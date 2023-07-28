const fs = require('fs');

fs.readFile('../ACCOUNTBUILDINGS/electricACCOUNTSsorted.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read electricACCOUNTSsorted.json`);
        return;
    }
    
    const electricAccounts = JSON.parse(data);
    
    fs.readFile('uniqueAccounts.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`can't read uniqueAccounts.json`);
            return;
        }
        
        const uniqueAccounts = JSON.parse(data);
        const missingAccounts = uniqueAccounts.filter(account => {
            return !electricAccounts.find(electricAccount => electricAccount.AccountNumber === account.AccNumber);
        });
        
        fs.writeFile('./missingAccounts.json', JSON.stringify(missingAccounts), err => {
            if (err) {
                console.log(`can't write missingAccounts.json`);
            } else {
                console.log('Missing accounts have been written to missingAccounts.json');
            }
        });
    });
});