const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');

GAS_ACCOUNTS = [];
WATER_ACCOUNTS = [];
ELECTRIC_ACCOUNTS = [];

ACCOUNTS_MERGED = []; 

fs1.readFile('./ElectricAccountNumbers.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
    console.log(`yoyoyoy`)
    let electric_data = JSON.parse(data);

let electricAccounts = {};

electric_data.forEach(entry => {
  let facilityName = entry.FacilityName;
  if (electricAccounts[facilityName]) {
    electricAccounts[facilityName].NumberElectricAccounts++;
    electricAccounts[facilityName].ElectricAccountNumbers[`AccountNumber${electricAccounts[facilityName].NumberElectricAccounts}`] = entry.AccountNumbers;
  } else {
    electricAccounts[facilityName] = { FacilityName: facilityName, NumberElectricAccounts: 1, ElectricAccountNumbers: { AccountNumber1: entry.AccountNumbers } };
  }
});

// Create new json file
let jsonData = JSON.stringify(Object.values(electricAccounts));

// Write json data to file
fs2.writeFileSync("ELECTRIC_ACCOUNTS.json", jsonData);
    
    

    //fs3.writeFileSync('./FinalElectricAccountNumbers.json', JSON.stringify(jsonData));


        })

