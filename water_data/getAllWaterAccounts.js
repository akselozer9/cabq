const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
const fs4 = require('fs');
const fs5 = require('fs');
const fs6 = require('fs');
const fs7 = require('fs');
const fs8 = require('fs');
const fs9 = require('fs');

let modifiedJsonFile = [];

fs1.readFile('water2015.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     water2015 = JSON.parse(data);

     for (let i = 0; i < water2015.length; i++) {
            modifiedJsonFile.push({"AccNumber": water2015[i].CUSTOMER_NUMBER,
            "Composite Address": water2015[i].ADDRESS,
            "Composite Name": water2015[i].NAME });
     }


     fs2.readFile('water2016.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`can't read water2022.json`)
        }
         water2016 = JSON.parse(data);
    
         for (let i = 0; i < water2016.length; i++) {
            let isNewAccNumber = true;
            for (let j = 0; j < modifiedJsonFile.length; j++) {
              if(water2016[i].CUSTOMER_NUMBER === modifiedJsonFile[j].AccNumber){
                isNewAccNumber = false;
              }
            }
            if (isNewAccNumber) {
              modifiedJsonFile.push({"AccNumber": water2016[i].CUSTOMER_NUMBER ,
              "Composite Address": water2016[i].ADDRESS,
              "Composite Name": water2016[i].NAME});
            }
          }


         fs3.readFile('water2017.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`can't read water2022.json`)
            }
             water2017 = JSON.parse(data);


             for (let i = 0; i < water2017.length; i++) {
                let isNewAccNumber = true;
                for (let j = 0; j < modifiedJsonFile.length; j++) {
                  if(water2017[i].CUSTOMER_NUMBER === modifiedJsonFile[j].AccNumber){
                    isNewAccNumber = false;
                  }
                }
                if (isNewAccNumber) {
                  modifiedJsonFile.push({
                    "AccNumber": water2017[i].CUSTOMER_NUMBER,
                    "Composite Address": water2017[i].ADDRESS,
                    "Composite Name": water2017[i].NAME });
                }
              }



             fs4.readFile('water2018.json', 'utf8', (err, data) => {
                if (err) {
                    console.log(`can't read water2022.json`)
                }
                 water2018 = JSON.parse(data);


                 for (let i = 0; i < water2018.length; i++) {
                    let isNewAccNumber = true;
                    for (let j = 0; j < modifiedJsonFile.length; j++) {
                      if(water2018[i].CUSTOMER_NUMBER === modifiedJsonFile[j].AccNumber){
                        isNewAccNumber = false;
                      }
                    }
                    if (isNewAccNumber) {
                      modifiedJsonFile.push({
                        "AccNumber": water2018[i].CUSTOMER_NUMBER,
                        "Composite Address": water2018[i].ADDRESS,
                        "Composite Name": water2018[i].NAME
                    });
                    }
                  }




                 fs5.readFile('water2019.json', 'utf8', (err, data) => {
                    if (err) {
                        console.log(`can't read water2022.json`)
                    }
                     water2019 = JSON.parse(data);


                     for (let i = 0; i < water2019.length; i++) {
                        let isNewAccNumber = true;
                        for (let j = 0; j < modifiedJsonFile.length; j++) {
                          if(water2019[i].CUSTOMER_NUMBER === modifiedJsonFile[j].AccNumber){
                            isNewAccNumber = false;
                          }
                        }
                        if (isNewAccNumber) {
                          modifiedJsonFile.push({
                            "AccNumber": water2019[i].CUSTOMER_NUMBER,
                            "Composite Address": water2019[i].ADDRESS,
                            "Composite Name": water2019[i].NAME
                        });
                        }
                      }


                     fs6.readFile('water2020.json', 'utf8', (err, data) => {
                        if (err) {
                            console.log(`can't read water2022.json`)
                        }
                         water2020 = JSON.parse(data);
                       
                         for (let i = 0; i < water2020.length; i++) {
                            let isNewAccNumber = true;
                            for (let j = 0; j < modifiedJsonFile.length; j++) {
                              if(water2020[i].CUSTOMER_NUMBER === modifiedJsonFile[j].AccNumber){
                                isNewAccNumber = false;
                              }
                            }
                            if (isNewAccNumber) {
                              modifiedJsonFile.push({
                                "AccNumber": water2020[i].CUSTOMER_NUMBER,
                                "Composite Address": water2020[i].ADDRESS,
                                "Composite Name": water2020[i].NAME
                             });
                            }
                          }





                         fs7.readFile('water2021.json', 'utf8', (err, data) => {
                            if (err) {
                                console.log(`can't read water2022.json`)
                            }
                             water2021 = JSON.parse(data);

                             for (let i = 0; i < water2021.length; i++) {
                                let isNewAccNumber = true;
                                for (let j = 0; j < modifiedJsonFile.length; j++) {
                                  if(water2021[i].CUSTOMER_NUMBER === modifiedJsonFile[j].AccNumber){
                                    isNewAccNumber = false;
                                  }
                                }
                                if (isNewAccNumber) {
                                  modifiedJsonFile.push({
                                    "AccNumber": water2021[i].CUSTOMER_NUMBER,
                                    "Composite Address": water2021[i].ADDRESS,
                                    "Composite Name": water2021[i].NAME
                                });
                                }
                              }




                                fs8.readFile('water2022.json', 'utf8', (err, data) => {
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
                    "Composite Address": water2022[i].ADDRESS,
                    "Composite Name": water2022[i].NAME
                });
                     
                }
                                      }


                                      fs9.writeFileSync('./allWaterAccounts.json', JSON.stringify(modifiedJsonFile));













































































})
})
})
})

})
})

})
})
