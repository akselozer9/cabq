import fetch from "node-fetch";
import fs from "fs";

const API_TOKEN = "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";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const calculateMaxAverageIndex = async (namesArr, addressesArr, groupName, Names) => {
  let maxAverage = -Infinity;
  let maxIndex = -1;

  for (let i = 0; i < namesArr.length; i++) {
   

if(groupName.indexOf("#") !== -1){
    const groupNameNumber = await extractNumberFromGroupName(groupName.toString());
    const namesArrNumber = await extractNumberFromNamesArr(Names[i].toString());
    
            if (!namesArrNumber || groupNameNumber !== namesArrNumber) {
                    namesArr[i] = 0;
                    addressesArr[i] = 0;
            }
}
   //case where address matches but bad name or visa versa
    const average = Math.max(namesArr[i], addressesArr[i]);

            if (average > maxAverage) {
            maxAverage = average;
            maxIndex = i;
            }
  }
  return {maxIndex, maxAverage} ;
};

const extractNumberFromGroupName = async (groupName) => {
    const poundIndex = groupName.indexOf("#");
    if (poundIndex !== -1) {
      const spaceIndex = groupName.indexOf(" ", poundIndex);
      let endIndex = groupName.length;
  
      if (spaceIndex !== -1) {
        endIndex = spaceIndex;
      }
  
      const numberString = groupName.substring(poundIndex + 1, endIndex);
      const number = parseInt(numberString);
      if (!isNaN(number)) {
        return number;
      }
    }
    return null;
  };
  
  const extractNumberFromNamesArr = async (namesArrString) => {
    const numberRegex = /\d+/;
    const numberString = namesArrString.match(numberRegex);
    if (numberString) {
      const number = parseInt(numberString[0]);
      if (!isNaN(number)) {
        return number;
      }
    }
    return null;
  };


  


const getSimilarName = async (group, Names, Addresses) => {
  const nameValues = {
    inputs: {
      source_sentence: group.CUSTOMER_NAME.toLowerCase(),
      sentences: Names,
    },
  };

  const addressValues = {
    inputs: {
      source_sentence: group.Address.toLowerCase(),
      sentences: Addresses,
    },
  };

  try {
    const response1 = await fetch(
      "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nameValues),
      }
    );

    const response2 = await fetch(
      "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addressValues),
      }
    );

    if (!response1 || !response2 || response1.status === 429 || response2.status === 429) {
      console.log("API rate limit reached. Waiting for 90 minutes...");
      await delay(20 * 60 * 1000);
      return await getSimilarName(group, Names, Addresses);
    }

    const namesArr = await response1.json();
    const addressesArr = await response2.json();
    
    const {maxIndex, maxAverage} = await calculateMaxAverageIndex(namesArr, addressesArr, group.CUSTOMER_NAME, Names);
    return {Name: Names[maxIndex], Address: Addresses[maxIndex], maxAverage};
    
  } catch (error) {
    // If we reach the usage limit for HuggingFace API
    console.error("Error calling Hugging Face API:", error.message);
    console.log("API rate limit reached. Waiting for 90 minutes...");
    await delay(20 * 60 * 1000); // Wait 90 minutes (convert to milliseconds)
    throw error; // Throw the error to halt the program
  }
};

fs.readFile("HuggyArrs.json", "utf8", async (err, data) => {
  if (err) {
    console.log("can't read HuggyArrs.json");
    return;
  }

  const { Names, Addresses } = JSON.parse(data);

  fs.readFile("CompositeGroups.json", "utf8", async (err, data) => {
    if (err) {
      console.log("can't read CompositeGroups.json");
      return;
    }

    const groupedArray = JSON.parse(data);
    const final = [];

    for (const group of groupedArray) {
     
        let mostSimilarName;
        let mostSimilarAddress;
        let score;
   

        while (!mostSimilarName) {
        let  result = await getSimilarName(group, Names, Addresses);
        mostSimilarName = result.Name;
        mostSimilarAddress = result.Address
        score = result.maxAverage;
          if (!mostSimilarName) {
            console.log("Retrying API call for:", group.GL_DESCRIPTION);
            await delay(2 * 60 * 1000); // Wait for 2 minutes before retrying
          }
        }

      
      console.log(group.Address);
      console.log(mostSimilarName);
      console.log(mostSimilarAddress);
      console.log(score);
    

      final.push({
        Name: mostSimilarName,
        Group: group.Group,
        Address: mostSimilarAddress,
        Score: score,
        GL_DESCRIPTION: group.Address,
        CUSTOMER_NAME: group.CUSTOMER_NAME,
        Electric: Array.from(group.Electric),
        Solar: Array.from(group.Solar)
      });
    }

    fs.writeFile("./AANewProjGroupingFinal2.json", JSON.stringify(final), (err) => {
      if (err) {
        console.log("Can't write AANewProjGroupingFinal.json");
      } else {
        console.log("Grouped data has been written to AANewProjGroupingFinal.json");
      }
    });
  });
});
