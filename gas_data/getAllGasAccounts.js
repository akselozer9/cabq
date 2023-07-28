const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
const fs4 = require('fs');
const fs5 = require('fs');
const fs6 = require('fs');
const fs7 = require('fs');
const fs8 = require('fs');
const fs9 = require('fs');
const fs10 = require('fs');
let modifiedJsonFile = [];




fs10.readFile('gas2014.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     water2014 = JSON.parse(data);

     for (let i = 0; i < water2014.length; i++) {
            modifiedJsonFile.push({"AccNumber": water2014[i].ACCOUNT_NUMBER,
            "Composite Address": water2014[i].ADDRESS,
            "Composite Name": water2014[i].LOC_NAME,
            "MonthNum": water2014[i].MonthNum,
            "YearNum": water2014[i].YearNum,
         });
     }




fs1.readFile('gas2015.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     water2015 = JSON.parse(data);

     for (let i = 0; i < water2015.length; i++) {
        let isNewAccNumber = true;
        for (let j = 0; j < modifiedJsonFile.length; j++) {
          if(water2015[i].ACCOUNT_NUMBER === modifiedJsonFile[j].AccNumber){
            isNewAccNumber = false;
          }
        }
        if (isNewAccNumber) {
          modifiedJsonFile.push({"AccNumber": water2015[i].ACCOUNT_NUMBER,
          "Composite Address": water2015[i].ADDRESS,
          "Composite Name": water2015[i].LOC_NAME,
          "MonthNum": water2015[i].MonthNum,
          "YearNum": water2015[i].YearNum,
        });
        }
      }


     fs2.readFile('gas2016.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`can't read water2022.json`)
        }
         water2016 = JSON.parse(data);
    
         for (let i = 0; i < water2016.length; i++) {
            let isNewAccNumber = true;
            for (let j = 0; j < modifiedJsonFile.length; j++) {
              if(water2016[i].ACCOUNT_NUMBER === modifiedJsonFile[j].AccNumber){
                isNewAccNumber = false;
              }
            }
            if (isNewAccNumber) {
              modifiedJsonFile.push({"AccNumber": water2016[i].ACCOUNT_NUMBER,
              "Composite Address": water2016[i].ADDRESS,
              "Composite Name": water2016[i].LOC_NAME,
              "MonthNum": water2016[i].MonthNum,
              "YearNum": water2016[i].YearNum,
            });
            }
          }


         fs3.readFile('gas2017.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`can't read water2022.json`)
            }
             water2017 = JSON.parse(data);


             for (let i = 0; i < water2017.length; i++) {
                let isNewAccNumber = true;
                for (let j = 0; j < modifiedJsonFile.length; j++) {
                  if(water2017[i].ACCOUNT_NUMBER === modifiedJsonFile[j].AccNumber){
                    isNewAccNumber = false;
                  }
                }
                if (isNewAccNumber) {
                  modifiedJsonFile.push({
                    "AccNumber": water2017[i].ACCOUNT_NUMBER,
                    "Composite Name": water2017[i].LOC_NAME,
                    "MonthNum": water2017[i].MonthNum,
                    "YearNum": water2017[i].YearNum,
                });
                }
              }



             fs4.readFile('gas2018.json', 'utf8', (err, data) => {
                if (err) {
                    console.log(`can't read water2022.json`)
                }
                 water2018 = JSON.parse(data);


                 for (let i = 0; i < water2018.length; i++) {
                    let isNewAccNumber = true;
                    for (let j = 0; j < modifiedJsonFile.length; j++) {
                      if(water2018[i].ACCOUNT_NUMBER === modifiedJsonFile[j].AccNumber){
                        isNewAccNumber = false;
                      }
                    }
                    if (isNewAccNumber) {
                      modifiedJsonFile.push({
                        "AccNumber": water2018[i].ACCOUNT_NUMBER,
                        "Composite Name": water2018[i].LOC_NAME,
                        "MonthNum": water2018[i].MonthNum,
                        "YearNum": water2018[i].YearNum,
                    });
                    }
                  }




                 fs5.readFile('gas2019.json', 'utf8', (err, data) => {
                    if (err) {
                        console.log(`can't read water2022.json`)
                    }
                     water2019 = JSON.parse(data);


                     for (let i = 0; i < water2019.length; i++) {
                        let isNewAccNumber = true;
                        for (let j = 0; j < modifiedJsonFile.length; j++) {
                          if(water2019[i].ACCOUNT_NUMBER === modifiedJsonFile[j].AccNumber){
                            isNewAccNumber = false;
                          }
                        }
                        if (isNewAccNumber) {
                          modifiedJsonFile.push({
                            "AccNumber": water2019[i].ACCOUNT_NUMBER,
                            "Composite Name": water2019[i].LOC_NAME,
                            "MonthNum": water2019[i].MonthNum,
                            "YearNum": water2019[i].YearNum,
                        });
                        }
                      }


                     fs6.readFile('gas2020.json', 'utf8', (err, data) => {
                        if (err) {
                            console.log(`can't read water2022.json`)
                        }
                         water2020 = JSON.parse(data);
                       
                         for (let i = 0; i < water2020.length; i++) {
                            let isNewAccNumber = true;
                            for (let j = 0; j < modifiedJsonFile.length; j++) {
                              if(water2020[i].ACCOUNT_NUMBER === modifiedJsonFile[j].AccNumber){
                                isNewAccNumber = false;
                              }
                            }
                            if (isNewAccNumber) {
                              modifiedJsonFile.push({
                                "AccNumber": water2020[i].ACCOUNT_NUMBER,
                                "Composite Name": water2020[i].LOC_NAME,
                                "MonthNum": water2020[i].MonthNum,
                                "YearNum": water2020[i].YearNum,
                             });
                            }
                          }





                         fs7.readFile('gas2021.json', 'utf8', (err, data) => {
                            if (err) {
                                console.log(`can't read water2022.json`)
                            }
                             water2021 = JSON.parse(data);

                             for (let i = 0; i < water2021.length; i++) {
                                let isNewAccNumber = true;
                                for (let j = 0; j < modifiedJsonFile.length; j++) {
                                  if(water2021[i].ACCOUNT_NUMBER === modifiedJsonFile[j].AccNumber){
                                    isNewAccNumber = false;
                                  }
                                }
                                if (isNewAccNumber) {
                                  modifiedJsonFile.push({
                                    "AccNumber": water2021[i].ACCOUNT_NUMBER,
                                    "Composite Name": water2021[i].LOC_NAME,
                                    "MonthNum": water2021[i].MonthNum,
                                    "YearNum": water2021[i].YearNum,
                                });
                                }
                              }




                                fs8.readFile('gas2022.json', 'utf8', (err, data) => {
                                    if (err) {
                                        console.log(`can't read water2022.json`)
                                    }
                                    water2022 = JSON.parse(data);


                                    for (let i = 0; i < water2022.length; i++) {
                                        let isNewAccNumber = true;
                                        for (let j = 0; j < modifiedJsonFile.length; j++) {
                                          if(water2022[i].CUSTOMER_NUMBER === modifiedJsonFile[j].AccNumber){
                                            isNewAccNumber = false;
                                          }
                                        }
                if (isNewAccNumber) {
                  modifiedJsonFile.push({
                    "AccNumber": water2022[i].CUSTOMER_NUMBER,
                    "Composite Name": water2022[i].LOC_NAME, 
                    "MonthNum": water2022[i].MonthNum,
                    "YearNum": water2022[i].YearNum,
                });
                     
                }
                                      }
    fs9.writeFileSync('./allGasAccounts.json', JSON.stringify(modifiedJsonFile));













































































})
})
})
})

})
})
})
})
})
