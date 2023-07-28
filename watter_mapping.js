const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');

let modifiedJsonFile = [];

fs1.readFile('InputData.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     electrics = JSON.parse(data);

fs2.readFile('./ACCOUNTBUILDINGS/waterACCOUNTSsorted.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
    bank_ids = JSON.parse(data);

    for (let i = 0; i < electrics.length; i++) {
        let currentEntry = electrics[i];
        for (let j = 0; j < bank_ids.length; j++) {
          if (bank_ids[j].AccountNumber === currentEntry.CUSTOMER_NUMBER) {
              modifiedJsonFile.push({...currentEntry, Group: bank_ids[j].Group, DistrictNum: bank_ids[j].DistrictNum, Name: bank_ids[j].Name, Membership: bank_ids[j].Membership});
          }
        }
      }



fs3.writeFileSync('./tempResults/WaterResults.json', JSON.stringify(modifiedJsonFile));
})
})