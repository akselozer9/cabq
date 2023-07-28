const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');


let outputData = {};
let uniqueBuildingNames = [];
let uniqueObjects = [];

fs1.readFile('./profiles.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read water2022.json`)
    }
     profiles = JSON.parse(data);
    


     profiles.forEach(profile => {
        // Check if the FacilityName is already in the outputData object
        if (outputData.hasOwnProperty(profile.FacilityName)) {
        // Get the number of buildings for the FacilityName from the outputData object
        let numBuildings = outputData[profile.FacilityName].numBuildings;
      
        // Create a new key for the building 
        let buildingKey = `Building${numBuildings + 1}`;
        // Push the building name to the uniqueBuildingNames array
        uniqueBuildingNames.push(profile.BuildingName);
        // Create a new object with the building data
        let buildingObj = {
        BuildingYearBuilt: profile.BuildingYearBuilt,
        BuildingGrossArea: profile.BuildingGrossArea,
        BuildingLatitude: profile.BuildingLatitude,
        BuildingLongitude: profile.BuildingLongitude,
        BuildingName: profile.BuildingName
        };
        // Add the building object to the outputData for the FacilityName
        outputData[profile.FacilityName].Buildings[buildingKey] = buildingObj;
        // Increment the number of buildings for the FacilityName
        outputData[profile.FacilityName].numBuildings++;
        if(profile.BuildingGrossArea){ 
        console.log(`yo`);
        outputData[profile.FacilityName].FacilityGrossArea += profile.BuildingGrossArea;
      
        }
        } else {
        // Create a new object in the outputData with the FacilityName
        outputData[profile.FacilityName] = {
        FacilityAddress: profile.FacilityAddress,
        idBrainFacilities: profile.idBrainFacilities,
        numBuildings: 1,
        Buildings: {},
        FacilityGrossArea: 0,
        FacilityLatitude: 0, 
        FacilityLongitude: 0 
        };
        // Push the building name to the uniqueBuildingNames array
        uniqueBuildingNames.push(profile.BuildingName);
        // Create a new object with the building data
        let buildingObj = {
        BuildingYearBuilt: profile.BuildingYearBuilt,
        BuildingGrossArea: profile.BuildingGrossArea,
        BuildingLatitude: profile.BuildingLatitude,
        BuildingLongitude: profile.BuildingLongitude,
        BuildingName: profile.BuildingName
        };
        // Add the building object to the outputData for the FacilityName
        outputData[profile.FacilityName].Buildings.Building1 = buildingObj;
        if(profile.BuildingGrossArea){
        console.log(`yo 2x`);
        outputData[profile.FacilityName].FacilityGrossArea += profile.BuildingGrossArea;
    
        }
        }
      });
      
for (let facilityName in outputData) {
    uniqueObjects.push({
    Name: facilityName,
    FacilityGrossArea: outputData[facilityName].FacilityGrossArea,
    BuildingCount: outputData[facilityName].numBuildings,
    FacilityAddress: outputData[facilityName].FacilityAddress,
    idBrainFacilities: outputData[facilityName].idBrainFacilities,
    Buildings: outputData[facilityName].Buildings, 

    });
  }

fs3.writeFileSync('./profiles_output.json', JSON.stringify(uniqueObjects));
})






