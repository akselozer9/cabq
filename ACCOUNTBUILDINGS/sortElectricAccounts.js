const fs1 = require('fs');
const fs2 = require('fs');

fs1.readFile('allACCOUNTS.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     allAccountsArray = JSON.parse(data);
console.log('yo')

// create a new array to hold the sorted electric accounts
let electricAccountsSorted = [];

// loop through allAccountsArray and push each electric account to electricAccountsSorted
allAccountsArray.forEach(account => {
    if (account.ElectricAccountNumbers) {
        // loop through each electric account
        Object.keys(account.ElectricAccountNumbers).forEach(electricAccountNumber => {
            let electricAccount = {};
            electricAccount.AccountNumber = account.ElectricAccountNumbers[electricAccountNumber];
            electricAccount.Name = account.Name;
            electricAccount.DistrictNum = account.DistrictNum;
            electricAccount.Group = account.Group;
            electricAccount.Membership = account.Membership;
            electricAccountsSorted.push(electricAccount);
        });
    }
});

// sort electricAccountsSorted by AccountNumber
electricAccountsSorted.sort((a, b) => {
    return a.AccountNumber.toString().localeCompare(b.AccountNumber.toString());
});

// write electricAccountsSorted to electricACCOUNTSsorted.json
fs2.writeFileSync('electricACCOUNTSsorted.json', JSON.stringify(electricAccountsSorted, null, 2));

})