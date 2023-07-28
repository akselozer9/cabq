import fs from "fs";

      fs.readFile('BUILDINGS.json', 'utf8', (err, data) => {
          if (err) {
            console.log(`can't read BUILDINGS.json file`);
            return;
          }
        
          const buildings = JSON.parse(data);

let returnJSON = {};

let Names = [];
let Addresses = [];
  
        for(let i = 0; i < buildings.length; ++i){
          
          const name = buildings[i].Name || '';
          const address = buildings[i].FacilityAddress || '';
          
          const cleanedName = name.replace(/[^\x00-\x7F]/g, "");
          const cleanedAddress = address.replace(/[^\x00-\x7F]/g, "");
          
          Names.push(cleanedName);
          Addresses.push(cleanedAddress);
          
        }

    returnJSON["Names"] = Names;
    returnJSON["Addresses"] = Addresses;


        fs.writeFile('./HuggyArrs.json', JSON.stringify(returnJSON), err => {
              if (err) {
                console.log("Can't write HuggyArrs.json");
                } else {
                  console.log('Data written to HuggyArrs.json');
                }
            });
        });