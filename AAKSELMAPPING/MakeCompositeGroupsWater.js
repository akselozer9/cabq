import fs from "fs";
import { promisify } from "util";

//In this file we are grouping by the GL_DESCRIPTIONS field inside
//utility Excel Spreadsheets and splitting Solar and Electric
//We are also grouping edge cases such as Medians, Flasher, Lights 
//reducing by about 1,000 elements!!!
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const loopBills = async () => {
//loop through every composite bill here
const groupedData = {};

for(let i = 15; i < 22; i++){
    
    const fileName = `../water_data/water20${i}.json`;

    try {
        const data = await readFileAsync(fileName, "utf8");
        const allAccounts = JSON.parse(data);
 
    
    for (let i = 0; i < allAccounts.length; i++) {
     
 
        if(allAccounts[i]["GL_DESCRIPTION"] && allAccounts[i]["CUSTOMER_NAME"]){

const customerName = allAccounts[i]["NAME"].replace(/|REC|CITY PARK AND RECREATION|COA PARK AND REC|Parks and Recreations|PARKS AND RECREATION|PARKS AND REC|PARKS & REC|COA|CABQ AQB|CITY ABQ|City of Albuquerque|ALBUQ|ALB|ALBUQUERQUE|CITY OF ALB|CITY OF ALBUQ|CITY OF ABQ|CITY OF ALBQ|CITY OF ALBUQ|CITY OF ALBUQUERQUE|-/g, "");
  const glDescription = allAccounts[i]["ADDRESS"];
    const accNumber = allAccounts[i]["CUSTOMER_NUMBER"].toString();
      

if (glDescription.includes("HYDRANT")) {
    console.log(`indead`) 
    const specialKey = "HYDRANT"; 
    if (groupedData.hasOwnProperty(specialKey)) {
                groupedData[specialKey].Water.add(accNumber);
            } else {
            groupedData[specialKey] = {
                Water: new Set(),
                "GL_DESCRIPTION": "2 Coa Office Of Emergency Fire Hydrant NE",
                "CUSTOMER_NAME": "Fire Hydrant",
            };
                groupedData[specialKey].Water.add(accNumber);
            } 
}    else{
    
          if (groupedData.hasOwnProperty(glDescription)) {
            groupedData[glDescription].Water.add(accNumber);
        } else {
          groupedData[glDescription] = {
            Water: new Set(),
            "GL_DESCRIPTION": glDescription,
            "CUSTOMER_NAME": customerName,
          };
            groupedData[glDescription].Water.add(accNumber);
        } 
    }
        
        }
    }
}
     catch(err){
        console.log(`Error reading ${fileName}:`, err);
    }
}

const groupedArray = Object.values(groupedData);
  
groupedArray.forEach(entry => {
      entry.Water = Array.from(entry.Water);
});
    return groupedArray;
};

const getResult = async () => {

const final = await loopBills();

fs.writeFile('./CompositeGroupsWater.json', JSON.stringify(final), err => {
        if (err) {
          console.log("Can't write CompositeGroups.json");
        } else {
          console.log('Data written to CompositeGroups.json');
        }
    });
}

await getResult();

