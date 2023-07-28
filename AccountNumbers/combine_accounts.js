const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
const fs4 = require('fs'); 

fs1.readFile('./ELECTRIC_ACCOUNTS.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
    let electric_data = JSON.parse(data);

fs1.readFile('./WATER_ACCOUNTS.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
    let water_data = JSON.parse(data);

fs1.readFile('./GAS_ACCOUNTS.json', 'utf8', (err, data) => {
    if (err) {
            console.log(`can't read water2022.json`)
    }
    let gas_data = JSON.parse(data);

      

    let merged_data = [];

electric_data.forEach((electric) => { 
  merged_data.push({...electric}); 
  })


gas_data.forEach((gas) => {
 merged_data.forEach((data) => {
  let index = merged_data.findIndex(element => element.FacilityName === gas.FacilityName);
  if(index != -1){
    merged_data[index] = {...merged_data[index], ...gas};
    console.log(`3`)
  }
  else{
    console.log(`4`)
    merged_data.push({...gas}); 
  }
})
  
  })

  water_data.forEach((water) => {
    merged_data.forEach((data) => {
      let index = merged_data.findIndex(element => element.FacilityName === water.FacilityName);
      if(index != -1){
      merged_data[index] = {...merged_data[index], ...water};
      console.log(`5`)
    }
    else{
      merged_data.push({...water}); 
      console.log(`6`)
    }
  })
    
    })


//do all of the total accounts per

merged_data.forEach((data) => {
let TotalAccounts = 0;

if(data.NumberElectricAccounts){
TotalAccounts += data.NumberElectricAccounts;
}
if(data.NumberWaterAccounts){
  TotalAccounts += data.NumberWaterAccounts;
}
if(data.NumberGasAccounts){
    TotalAccounts += data.NumberGasAccounts;
}

  data.NumberTotalAccounts = TotalAccounts;
})

let all_accounts = 0; 

merged_data.forEach((data) => {
if(data.NumberTotalAccounts){
  all_accounts += data.NumberTotalAccounts;  
}
})

console.log(`all of paiges accounts = ${all_accounts}`)


    let jsonData2 = JSON.stringify(merged_data);
            
    fs4.writeFileSync("ALL_ACCOUNTS_MERGED.json", jsonData2);


})
})
})