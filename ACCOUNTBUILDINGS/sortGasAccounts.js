const fs1 = require('fs');
const fs2 = require('fs');

fs1.readFile('allACCOUNTS.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     allAccountsArray = JSON.parse(data);

// create a new array to hold the sorted electric accounts
let gasAccountsSorted = [];

// loop through allAccountsArray and push each electric account to electricAccountsSorted
allAccountsArray.forEach(account => {
    if (account.GasAccountNumbers) {
        // loop through each electric account
        Object.keys(account.GasAccountNumbers).forEach(gasAccountNumber => {
            let gasAccount = {};
            gasAccount.AccountNumber = account.GasAccountNumbers[gasAccountNumber];
            gasAccount.Name = account.Name;
            gasAccount.DistrictNum = account.DistrictNum;
            gasAccount.Group = account.Group;
            gasAccount.Membership = account.Membership;
            gasAccountsSorted.push(gasAccount);
        });
    }
});

// sort electricAccountsSorted by AccountNumber
gasAccountsSorted.sort((a, b) => {
    return a.AccountNumber.toString().localeCompare(b.AccountNumber.toString());
});

// write electricAccountsSorted to electricACCOUNTSsorted.json
fs2.writeFileSync('gasACCOUNTSsorted.json', JSON.stringify(gasAccountsSorted, null, 2));

})