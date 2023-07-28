const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');


let uniqueObjects = [];

fs1.readFile('./profiles.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     profiles = JSON.parse(data);
    
     fs1.readFile('./districts.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`can't read water2022.json`)
        }
         groups = JSON.parse(data);

    profiles.forEach(function(jsonObject) {
        groups.forEach(function(jsonObject2) {

    if(jsonObject2.idBrainFacilities === jsonObject.idBrainFacilities){
        jsonObject.DistrictNum = jsonObject2['CouncilDistrict'];
    }

        })
    })
      


fs3.writeFileSync('./profiles_output.json', JSON.stringify(profiles));
})


})



