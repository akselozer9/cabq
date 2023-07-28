const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
let SUM = 0;
let SUMP = 0;
let SUML = 0;
fs1.readFile('electric2019.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     electrics = JSON.parse(data);

    for (let i = 0; i < electrics.length; i++) {
        SUM += electrics[i].TOTAL_AMOUNT_DUE;
        }
      console.log(`2019 Yearly Total ${SUM}`);

})

fs3.readFile('electric2018.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     electrics22 = JSON.parse(data);

    for (let i = 0; i < electrics2.length; i++) {
        if(electrics22[i].TOTAL_AMOUNT_DUE){
        SUML += electrics22[i].TOTAL_AMOUNT_DUE;
        }
        }
      console.log(`2018 Yearly Total ${SUML}`);

})


fs2.readFile('electric2017.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     electrics2 = JSON.parse(data);

    for (let i = 0; i < electrics2.length; i++) {
        SUMP += electrics2[i].TOTAL_AMOUNT_DUE;
        }
      console.log(`2017 Yearly Total ${SUMP}`);

})