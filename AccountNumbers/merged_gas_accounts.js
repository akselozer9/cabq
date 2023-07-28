const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');

GAS_ACCOUNTS = [];
WATER_ACCOUNTS = [];
ELECTRIC_ACCOUNTS = [];

ACCOUNTS_MERGED = []; 

fs1.readFile('./GasAccountNumbers.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
    console.log(`yoyoyoy`)
    let gas_data = JSON.parse(data);

let gasAccounts = {};

gas_data.forEach(entry => {
  let facilityName = entry.FacilityName;
  if (gasAccounts[facilityName]) {
    gasAccounts[facilityName].NumberGasAccounts++;
    gasAccounts[facilityName].GasAccountNumbers[`AccountNumber${gasAccounts[facilityName].NumberGasAccounts}`] = entry.AccountNumbers;
  } else {
    gasAccounts[facilityName] = { FacilityName: facilityName, NumberGasAccounts: 1, GasAccountNumbers: { AccountNumber1: entry.AccountNumbers } };
  }
});

// Create new json file
let jsonData = JSON.stringify(Object.values(gasAccounts));

// Write json data to file
fs2.writeFileSync("GAS_ACCOUNTS.json", jsonData);
    
    

    //fs3.writeFileSync('./FinalElectricAccountNumbers.json', JSON.stringify(jsonData));


        })

