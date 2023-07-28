import fetch from "node-fetch";
import fs from "fs";

const API_TOKEN = "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";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const calculateMaxAverageIndex = async (namesArr, addressesArr, groupName, Names) => {
  let maxAverage = -Infinity;
  let maxIndex = -1;

  for (let i = 0; i < namesArr.length; i++) {
   
    const groupNameNumber = await extractNumberFromNamesArr(groupName.toString());
    const namesArrNumber = await extractNumberFromNamesArr(Names[i].toString());
    
  if(groupNameNumber){ 
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
      source_sentence: group.GL_DESCRIPTION.toLowerCase(),
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
    //{maxIndex, maxAverage}
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

fs.readFile("HuggyArrsWater.json", "utf8", async (err, data) => {
  if (err) {
    console.log("can't read HuggyArrsWater.json");
    return;
  }

  const { Names, Addresses } = JSON.parse(data);

  fs.readFile("CompositeGroupsWater.json", "utf8", async (err, data) => {
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

      
      console.log(group.GL_DESCRIPTION);
      console.log(mostSimilarName);
      console.log(mostSimilarAddress);
      console.log(score);
    

      final.push({
        Name: mostSimilarName,
        Address: mostSimilarAddress,
        Score: score,
        GL_DESCRIPTION: group.GL_DESCRIPTION,
        CUSTOMER_NAME: group.CUSTOMER_NAME,
        Water: Array.from(group.Water)
      });
    }

    fs.writeFile("./AANewProjGroupingFinalWater2.json", JSON.stringify(final), (err) => {
      if (err) {
        console.log("Can't write AANewProjGroupingFinal.json");
      } else {
        console.log("Grouped data has been written to AANewProjGroupingFinal.json");
      }
    });
  });
});
