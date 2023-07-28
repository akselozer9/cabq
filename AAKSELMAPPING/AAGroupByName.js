import fs from "fs";

fs.readFile('AANewProjGroupingFinal2.json', 'utf8', (err, data) => {
    if (err) {
      console.log(`can't read electricACCOUNTSsorted.json`);
      return;
    }
  
 const inputJSON = JSON.parse(data);


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
      IsValid: true,
      Data: [data]
    };
  }
}

fs.writeFile("./FinalElectric.json", JSON.stringify(groupedJSON), (err) => {
    if (err) {
      console.log("Can't write AANewProjGroupingFinal.json");
    } else {
      console.log("Grouped data has been written to AANewProjGroupingFinal.json");
   console.log(counter);
    }
  })

})