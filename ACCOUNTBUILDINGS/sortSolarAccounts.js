const fs1 = require('fs');
const fs2 = require('fs');

fs1.readFile('allACCOUNTS.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     allAccountsArray = JSON.parse(data);
console.log('yo')

// create a new array to hold the sorted electric accounts
let solarAccountsSorted = [];

// loop through allAccountsArray and push each electric account to electricAccountsSorted
allAccountsArray.forEach(account => {
    if (account.SolarAccountNumbers) {
        // loop through each electric account
        Object.keys(account.SolarAccountNumbers).forEach(solarAccountNumber => {
            let solarAccount = {};
            solarAccount.AccountNumber = account.SolarAccountNumbers[solarAccountNumber];
            solarAccount.Name = account.Name;
            solarAccount.DistrictNum = account.DistrictNum;
            solarAccount.Group = account.Group;
            solarAccount.Membership = account.Membership;
            solarAccountsSorted.push(solarAccount);
        });
    }
});

// sort electricAccountsSorted by AccountNumber
solarAccountsSorted.sort((a, b) => {
    return a.AccountNumber.toString().localeCompare(b.AccountNumber.toString());
});

// write electricAccountsSorted to electricACCOUNTSsorted.json
fs2.writeFileSync('solarACCOUNTSsorted.json', JSON.stringify(solarAccountsSorted, null, 2));

})