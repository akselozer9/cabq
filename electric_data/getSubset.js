const fs1 = require('fs');
const fs2 = require('fs');
let subset = [];

fs1.readFile('electric2021fixed.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     electrics = JSON.parse(data);

    for (let i = 0; i < electrics.length; i++) {
      if(electrics[i].CUSTOMER_NUMBER == "1153493741179626100" ||
        electrics[i].CUSTOMER_NUMBER == "1153493741185560100" ||
        electrics[i].CUSTOMER_NUMBER == "1155073740246213100" ||
            electrics[i].CUSTOMER_NUMBER == "1156913730381544101" ||
            electrics[i].CUSTOMER_NUMBER == "1158614721360944100" ||
            electrics[i].CUSTOMER_NUMBER == "1158684610274260100" ||
            electrics[i].CUSTOMER_NUMBER == "1159720060273863100" ||
             electrics[i].CUSTOMER_NUMBER == "1159720061624182100" || 
             electrics[i].CUSTOMER_NUMBER == "1167050211546212100" || 
             electrics[i].CUSTOMER_NUMBER == "1186666621903452100" ||
             electrics[i].CUSTOMER_NUMBER == "318317010379115100" ||
             electrics[i].CUSTOMER_NUMBER == "318329020379125100" ||
             electrics[i].CUSTOMER_NUMBER == "321315010381111100"
            ){
        subset.push(electrics[i]);
        }

        }

        fs2.writeFileSync('./electric2021subset.json', JSON.stringify(subset));

})