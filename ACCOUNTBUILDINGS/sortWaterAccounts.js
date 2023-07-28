const fs1 = require('fs');
const fs2 = require('fs');

fs1.readFile('allACCOUNTS.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     allAccountsArray = JSON.parse(data);
console.log('yo')

// create a new array to hold the sorted electric accounts
let waterAccountsSorted = [];

// loop through allAccountsArray and push each electric account to electricAccountsSorted
allAccountsArray.forEach(account => {
    if (account.WaterAccountNumbers) {
        // loop through each electric account
        Object.keys(account.WaterAccountNumbers).forEach(waterAccountNumber => {
            let waterAccount = {};
            waterAccount.AccountNumber = account.WaterAccountNumbers[waterAccountNumber];
            waterAccount.Name = account.Name;
            waterAccount.DistrictNum = account.DistrictNum;
            waterAccount.Group = account.Group;
            waterAccount.Membership = account.Membership;
            waterAccountsSorted.push(waterAccount);
        });
    }
});

// sort electricAccountsSorted by AccountNumber
waterAccountsSorted.sort((a, b) => {
    return a.AccountNumber.toString().localeCompare(b.AccountNumber.toString());
});

// write electricAccountsSorted to electricACCOUNTSsorted.json
fs2.writeFileSync('waterACCOUNTSsorted.json', JSON.stringify(waterAccountsSorted, null, 2));

})