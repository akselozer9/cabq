const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');

let modifiedJsonFile = [];

fs1.readFile('InputData.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     gas = JSON.parse(data);

fs2.readFile('./ACCOUNTBUILDINGS/gasACCOUNTSsorted.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
    bank_ids = JSON.parse(data);

    for (let i = 0; i < gas.length; i++) {
        let currentEntry = gas[i];
        for (let j = 0; j < bank_ids.length; j++) {
          if (bank_ids[j].AccountNumber === currentEntry.ACCOUNT_NUMBER) {
              modifiedJsonFile.push({...currentEntry, Group: bank_ids[j].Group, DistrictNum: bank_ids[j].DistrictNum, Name: bank_ids[j].Name, Membership: bank_ids[j].Membership});
          }
        }
      }



fs3.writeFileSync('./tempResults/GasResults.json', JSON.stringify(modifiedJsonFile));
})
})