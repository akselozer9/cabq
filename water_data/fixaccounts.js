const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');

let modifiedJsonFile = [];

fs1.readFile('accountsWeKnow.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     MV = JSON.parse(data);

     fs2.readFile('allWaterAccounts.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`can't read water2022.json`)
        }
         composite = JSON.parse(data);


         for (let i = 0; i < composite.length; i++) {
            let isNewAccNumber = true;
               for (let j = 0; j < MV.length; j++) {
                    if(composite[i].AccNumber === MV[j].AccountNumber){
                           isNewAccNumber = false;
                                          }
                                        }
                 if (isNewAccNumber) {
                     modifiedJsonFile.push({"AccNumber": composite[i].AccNumber,
                     "Composite Address": composite[i]["Composite Address"],
                        "Composite Name": composite[i]["Composite Name"]
                    });
                             }
                                      }
        
  
         fs3.writeFileSync('./missingAccounts.json', JSON.stringify(modifiedJsonFile));

    })



})
