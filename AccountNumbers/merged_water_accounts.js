const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');

GAS_ACCOUNTS = [];
WATER_ACCOUNTS = [];
ELECTRIC_ACCOUNTS = [];

ACCOUNTS_MERGED = []; 

fs1.readFile('./WaterAccountNumbers.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
    console.log(`yoyoyoy`)
    let water_data = JSON.parse(data);

let waterAccounts = {};

water_data.forEach(entry => {
  let facilityName = entry.FacilityName;
  if (waterAccounts[facilityName]) {
    waterAccounts[facilityName].NumberWaterAccounts++;
    waterAccounts[facilityName].WaterAccountNumbers[`AccountNumber${waterAccounts[facilityName].NumberWaterAccounts}`] = entry.AccountNumbers;
  } else {
    waterAccounts[facilityName] = { FacilityName: facilityName, NumberWaterAccounts: 1, WaterAccountNumbers: { AccountNumber1: entry.AccountNumbers } };
  }
});

// Create new json file
let jsonData = JSON.stringify(Object.values(waterAccounts));

// Write json data to file
fs2.writeFileSync("WATER_ACCOUNTS.json", jsonData);
    
    

    //fs3.writeFileSync('./FinalElectricAccountNumbers.json', JSON.stringify(jsonData));


        })

