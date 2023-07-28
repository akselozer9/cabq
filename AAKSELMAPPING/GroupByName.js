import fs from "fs";

fs.readFile('AANewProjGroupingFinal2.json', 'utf8', (err, data) => {
    if (err) {
      console.log(`can't read electricACCOUNTSsorted.json`);
      return;
    }
  
 const inputJSON = JSON.parse(data);


 function calculateGroupScore(data) {
    const scores = data.map(item => item.Score);
    const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
    return averageScore;
  }


const groupedJSON = {};
let counter = 0;
for (const element of inputJSON) {
  const { Name, ...data } = element;
  if (groupedJSON.hasOwnProperty(Name)) {
    groupedJSON[Name].Data.push(data);
  } else {
    ++counter;
    groupedJSON[Name] = {
      Name,
      IsValid: false,
      Data: [data]
    };
  }
}


for (const groupName in groupedJSON) {
    if (Object.prototype.hasOwnProperty.call(groupedJSON, groupName)) {
      const groupData = groupedJSON[groupName].Data;
      const groupScore = calculateGroupScore(groupData);
      groupedJSON[groupName].GroupScore = groupScore;
    }
  }


//sort by GroupScore to easily find bad mappings
const sortedGroups = Object.values(groupedJSON).sort((a, b) => b.GroupScore - a.GroupScore);
   

fs.writeFile("./FinalFinal.json", JSON.stringify(sortedGroups), (err) => {
    if (err) {
      console.log("Can't write AANewProjGroupingFinal.json");
    } else {
      console.log("Grouped data has been written to AANewProjGroupingFinal.json");
   console.log(counter);
    }
  })

})