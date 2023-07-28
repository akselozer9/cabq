const fs1 = require('fs');
const fs2 = require('fs');

fs1.readFile('allElectricAccounts.json', 'utf8', (err, data) => {
  if (err) {
    console.log(`can't read allElectricAccounts.json`);
    return;
  }
  const allAccounts = JSON.parse(data);
  const uniqueAccounts = {};
let counter = 0; 

  for (let account of allAccounts) {
    ++counter;
    const accountNumber = account.AccNumber;
    if (typeof accountNumber !== 'string') {
      // The CUSTOMER_NUMBER field is not a string
      console.log(counter/6)
      console.log('CUSTOMER_NUMBER is not of type string');
  }
    if (!uniqueAccounts[accountNumber]  && account["Composite Address"] && !account["RATE_CODE"].includes("PV")) {
        uniqueAccounts[accountNumber] = {
        "AccNumber": accountNumber,
        "Composite Address": account["Composite Address"],
        "Composite Name": account["Composite Name"],
        
      };
    }
  }

  const uniqueAccountsData = Object.values(uniqueAccounts);

  fs2.writeFile('./uniqueAccounts.json', JSON.stringify(uniqueAccountsData), (err) => {
    if (err) {
      console.log(`Error writing to file: ${err}`);
    } else {
      console.log('uniqueAccounts.json file created successfully.');
    }
  });
});
