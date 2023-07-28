const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');

 

fs1.readFile('./electric2020orig.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
    old_electric_data = JSON.parse(data);

fs2.readFile('./pnmfixeddata.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
    new_template = JSON.parse(data)
    

    console.log(`[`);
    old_electric_data.forEach(old => {
        new_template.forEach(NEW => {
           let bool = false;
        if (old.CUSTOMER_NUMBER === NEW.CUSTOMER_NUMBER
            && old.MonthNum === parseInt(NEW.MonthNum)
            && old.YearNum === NEW.YearNum) {
               
           if(old.TOTAL_KILOWATT === 0 && NEW.TOTAL_KILOWATT && NEW.TOTAL_KILOWATT !== 0){
            if(bool === false){ 
                bool = true;
        console.log(`{`)
            }
            console.log(`"New Account Name" : " ${NEW.ACCOUNT_NAME} ",`);
            console.log(`"CUSTOMER_NUMBER" : " ${old.CUSTOMER_NUMBER} ",`);
            console.log(`"Old Total Kilowatt" : ${old.TOTAL_KILOWATT},`);
            console.log(`"New Total Kilowatt" : ${NEW.TOTAL_KILOWATT},`);
            console.log(`"MonthNum" : ${old.MonthNum},`);
            console.log(`"YearNum" :  ${old.YearNum},`);
            old.TOTAL_KILOWATT = NEW.TOTAL_KILOWATT;
           }
   
           if(old.CURRENT_BILL_AMOUNT === 0 && NEW.CURRENT_BILL_AMOUNT && NEW.CURRENT_BILL_AMOUNT !== 0){
            if(bool === false){ 
                bool = true;
        console.log(`{`)
            }
            console.log(`"Old CURRENT_BILL_AMOUNT" : ${old.CURRENT_BILL_AMOUNT},`);
            console.log(`"New CURRENT_BILL_AMOUNT" : ${NEW.CURRENT_BILL_AMOUNT},`);
            old.CURRENT_BILL_AMOUNT = NEW.CURRENT_BILL_AMOUNT;
           }

           if(old.ON_PEAK_KILOWATT === 0 && NEW.ON_PEAK_KILOWATT && NEW.ON_PEAK_KILOWATT !== 0){
            if(bool === false){ 
                bool = true;
        console.log(`{`)
            }
            console.log(`"Old ON_PEAK_KILOWATT" : ${old.ON_PEAK_KILOWATT},`);
            console.log(`"New ON_PEAK_KILOWATT" : ${NEW.ON_PEAK_KILOWATT},`);
            old.ON_PEAK_KILOWATT = NEW.ON_PEAK_KILOWATT;
           }
           if(old.ON_PEAK_DEMAND_CHARGE === 0 && NEW.ON_PEAK_DEMAND_CHARGE && NEW.ON_PEAK_DEMAND_CHARGE !== 0){
            if(bool === false){ 
                bool = true;
        console.log(`{`)
            }
            console.log(`"Old ON_PEAK_DEMAND_CHARGE" : ${old.ON_PEAK_DEMAND_CHARGE},`);
            console.log(`"New ON_PEAK_DEMAND_CHARGE" : ${NEW.ON_PEAK_DEMAND_CHARGE},`);
            old.ON_PEAK_DEMAND_CHARGE = NEW.ON_PEAK_DEMAND_CHARGE;
           }
           if(old.ON_PEAK_DEMAND === 0 && NEW.ON_PEAK_DEMAND && NEW.ON_PEAK_DEMAND !== 0){
            if(bool === false){ 
                bool = true;
        console.log(`{`)
            }
            console.log(`"Old ON_PEAK_DEMAND" : ${old.ON_PEAK_DEMAND},`);
            console.log(`"New ON_PEAK_DEMAND" : ${NEW.ON_PEAK_DEMAND},`);
            old.ON_PEAK_DEMAND = NEW.ON_PEAK_DEMAND;
           }
           if(old.ON_PEAK_DEMAND_CHARGE === 0 && NEW.ON_PEAK_DEMAND_CHARGE && NEW.ON_PEAK_DEMAND_CHARGE !== 0){
            if(bool === false){ 
                bool = true;
        console.log(`{`)
            }
            console.log(`"Old ON_PEAK_DEMAND_CHARGE" : ${old.ON_PEAK_DEMAND_CHARGE},`);
            console.log(`"New ON_PEAK_DEMAND_CHARGE" : ${NEW.ON_PEAK_DEMAND_CHARGE},`);
            old.ON_PEAK_DEMAND_CHARGE = NEW.ON_PEAK_DEMAND_CHARGE;
           }
           if(bool === true){
           console.log(`},`)
           }
            }
        })
    })
    console.log(`]`);
 
    fs1.writeFile('./electric2020orig.json', JSON.stringify(old_electric_data), err => {
        if (err) {
            console.log(`can't write to electric2020.json`)
        }
    });
});
});