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
const fs11= require('fs');
const fs12 = require('fs');
const fs13 = require('fs');
const { emit } = require('process');

let modifiedJsonFile = [];

let uniqueAccounts = [];




fs10.readFile('electric2012.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     water2012 = JSON.parse(data);

     for (let i = 0; i < water2012.length; i++) {
      if(water2012[i].CUSTOMER_NAME){
       
      modifiedJsonFile.push(
        {"AccNumber": water2012[i].CUSTOMER_NUMBER,
            "Composite Address": water2012[i].GL_DESCRIPTION,
            "Composite Name": water2012[i].CUSTOMER_NAME,
            "RATE_CODE" : water2012[i].RATE_CODE,
            
            "GL_DESCRIPTION": water2012[i].GL_DESCRIPTION,

          }
            );
        }

            uniqueAccounts.push(water2012[i].CUSTOMER_NUMBER);
     }


     fs11.readFile('electric2013.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`can't read water2022.json`)
        }
         water2013 = JSON.parse(data);
    
         for (let i = 0; i < water2013.length; i++) {
          const accountNumber = water2013[i].CUSTOMER_NUMBER;
          if(water2013[i].CUSTOMER_NAME){
          if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
            modifiedJsonFile.push({
              "AccNumber": accountNumber,
              "Composite Address": water2013[i].GL_DESCRIPTION,
              "Composite Name": water2013[i].CUSTOMER_NAME,
              "RATE_CODE" : water2013[i].RATE_CODE,
              "GL_DESCRIPTION": water2013[i].GL_DESCRIPTION,
            });
          }
        }
        }
          
     fs12.readFile('electric2014.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`can't read water2022.json`)
        }
         water2014 = JSON.parse(data);
    
         for (let i = 0; i < water2014.length; i++) {
          const accountNumber = water2014[i].CUSTOMER_NUMBER;
          if(water2014[i].CUSTOMER_NAME){
          
          if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
            modifiedJsonFile.push({
              "AccNumber": accountNumber,
              "Composite Address": water2014[i].GL_DESCRIPTION,
              "Composite Name": water2014[i].CUSTOMER_NAME,
              "RATE_CODE" : water2014[i].RATE_CODE,
              "GL_DESCRIPTION": water2014[i].GL_DESCRIPTION,
            });
          }
        }
        }

          fs13.readFile('electric2015.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`can't read water2022.json`)
            }
             water2015 = JSON.parse(data);
        
             
              
              for (let i = 0; i < water2015.length; i++) {
                const accountNumber = water2015[i].CUSTOMER_NUMBER;
                if(water2015[i].CUSTOMER_NAME){
                if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
                  modifiedJsonFile.push({
                    "AccNumber": accountNumber,
                    "Composite Address": water2015[i].GL_DESCRIPTION,
                    "Composite Name": water2015[i].CUSTOMER_NAME,
                    "RATE_CODE" : water2015[i].RATE_CODE,
                    "GL_DESCRIPTION": water2015[i].GL_DESCRIPTION,
                  });
                }
              }
              }




     fs2.readFile('electric2016.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`can't read water2022.json`)
        }
         water2016 = JSON.parse(data);
    
         for (let i = 0; i < water2016.length; i++) {
          const accountNumber = water2016[i].CUSTOMER_NUMBER;
          if(water2016[i].CUSTOMER_NAME){
          if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
            modifiedJsonFile.push({
              "AccNumber": accountNumber,
              "Composite Address": water2016[i].GL_DESCRIPTION,
              "Composite Name": water2016[i].CUSTOMER_NAME,
              "RATE_CODE" : water2016[i].RATE_CODE,
              "GL_DESCRIPTION": water2016[i].GL_DESCRIPTION,
            });
          }
        }
        }


         fs3.readFile('electric2017.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`can't read water2022.json`)
            }
             water2017 = JSON.parse(data);


             for (let i = 0; i < water2017.length; i++) {
              const accountNumber = water2017[i].CUSTOMER_NUMBER;
              if(water2017[i].CUSTOMER_NAME){
              if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
                modifiedJsonFile.push({
                  "AccNumber": accountNumber,
                  "Composite Address": water2017[i].GL_DESCRIPTION,
                  "Composite Name": water2017[i].CUSTOMER_NAME,
                  "RATE_CODE" : water2017[i].RATE_CODE,
                  
                  "GL_DESCRIPTION": water2017[i].GL_DESCRIPTION,

                });
              }
            }
            }



             fs4.readFile('electric2018.json', 'utf8', (err, data) => {
                if (err) {
                    console.log(`can't read water2022.json`)
                }
                 water2018 = JSON.parse(data);


                 for (let i = 0; i < water2018.length; i++) {
                  const accountNumber = water2018[i].CUSTOMER_NUMBER;
                  if(water2018[i].CUSTOMER_NAME){
                  if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
                    modifiedJsonFile.push({
                      "AccNumber": accountNumber,
                      "Composite Address": water2018[i].GL_DESCRIPTION,
                      "Composite Name": water2018[i].CUSTOMER_NAME,
                      "RATE_CODE" : water2018[i].RATE_CODE,
                      "GL_DESCRIPTION": water2018[i].GL_DESCRIPTION,
                    });
                  }
                }
                }




                 fs5.readFile('electric2019.json', 'utf8', (err, data) => {
                    if (err) {
                        console.log(`can't read water2022.json`)
                    }
                     water2019 = JSON.parse(data);


                     for (let i = 0; i < water2019.length; i++) {
                      const accountNumber = water2019[i].CUSTOMER_NUMBER;
                      if(water2019[i].CUSTOMER_NAME){
                      if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
                        modifiedJsonFile.push({
                          "AccNumber": accountNumber,
                          "Composite Address": water2019[i].GL_DESCRIPTION,
                          "Composite Name": water2019[i].CUSTOMER_NAME,
                          "RATE_CODE" : water2019[i].RATE_CODE,
                          "GL_DESCRIPTION": water2019[i].GL_DESCRIPTION,
                        });
                      }
                    }
                    }


                     fs6.readFile('electric2020.json', 'utf8', (err, data) => {
                        if (err) {
                            console.log(`can't read water2022.json`)
                        }
                         water2020 = JSON.parse(data);
                       
                         for (let i = 0; i < water2020.length; i++) {
                          const accountNumber = water2020[i].CUSTOMER_NUMBER;
                          if(water2020[i].CUSTOMER_NAME){
                          if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
                            modifiedJsonFile.push({
                              "AccNumber": accountNumber,
                              "Composite Address": water2020[i].GL_DESCRIPTION,
                              "Composite Name": water2020[i].CUSTOMER_NAME,
                              "RATE_CODE" : water2020[i].RATE_CODE,
                              "GL_DESCRIPTION": water2020[i].GL_DESCRIPTION,
                            });
                          }
                        }
                        }





                         fs7.readFile('electric2021.json', 'utf8', (err, data) => {
                            if (err) {
                                console.log(`can't read water2022.json`)
                            }
                             water2021 = JSON.parse(data);

                             for (let i = 0; i < water2021.length; i++) {
                              const accountNumber = water2021[i].CUSTOMER_NUMBER;
                              if(water2021[i].CUSTOMER_NAME){
                              if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
                                modifiedJsonFile.push({
                                  "AccNumber": accountNumber,
                                  "Composite Address": water2021[i].GL_DESCRIPTION,
                                  "Composite Name": water2021[i].CUSTOMER_NAME,
                                  "RATE_CODE" : water2021[i].RATE_CODE,
                                  "GL_DESCRIPTION": water2021[i].GL_DESCRIPTION,
                                });
                              }
                            }
                            }




                                fs8.readFile('electric2022.json', 'utf8', (err, data) => {
                                    if (err) {
                                        console.log(`can't read water2022.json`)
                                    }
                                    water2022 = JSON.parse(data);

                                    for (let i = 0; i < water2022.length; i++) {
                                      const accountNumber = water2022[i].CUSTOMER_NUMBER;
                                      

                                      if(water2022[i].CUSTOMER_NAME){
                                      if (!modifiedJsonFile.some(item => item.AccNumber === accountNumber)) {
                                        modifiedJsonFile.push({
                                          "AccNumber": accountNumber,
                                          "Composite Address": water2022[i].GL_DESCRIPTION,
                                          "Composite Name": water2022[i].CUSTOMER_NAME,
                                          "RATE_CODE" : water2022[i].RATE_CODE,
                                          "GL_DESCRIPTION": water2022[i].GL_DESCRIPTION,
                                        });
                                      }
                                    }
                                    }


         fs9.writeFileSync('./allElectricAccounts.json', JSON.stringify(modifiedJsonFile));













































































})
})
})
})

})
})

})
})
})
})
})
