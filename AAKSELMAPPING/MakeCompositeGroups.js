import fs from "fs";
import { promisify } from "util";

//In this file we are grouping by the GL_DESCRIPTIONS field inside
//utility Excel Spreadsheets and splitting Solar and Electric
//We are also grouping edge cases such as Medians, Flasher, Lights 
//reducing by about 1,000 elements!!!
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const loopBills = async () => {
//loop through every composite bill here
const groupedData = {};

for(let i = 12; i < 23; i++){

    //wierd error inside of 2015 data "GL_DESCRIPTION": "k", so grouping by field GL_DESCRIPTION for 
    //that year will lump disimiliar accounts together and mess it up for all further years
    if (i === 15) {
      continue;
  }

    const fileName = `../electric_data/electric20${i}.json`;

    try {
        const data = await readFileAsync(fileName, "utf8");
        const allAccounts = JSON.parse(data);
 
    
    for (let i = 0; i < allAccounts.length; i++) {
     
    if(allAccounts[i]["GL_DESCRIPTION"] && allAccounts[i]["CUSTOMER_NAME"]){
 
    
        let address = allAccounts[i]["STREET_NUMBER"] + " " + allAccounts[i]["STREET_NAME"];
              if (allAccounts[i].hasOwnProperty("STREET_DESIGNATOR")) {
                address += " " + allAccounts[i]["STREET_DESIGNATOR"];
              }
                if (allAccounts[i].hasOwnProperty("QUADRANT")) {
                    address += " " + allAccounts[i]["QUADRANT"];
                  }
     

const customerName = allAccounts[i]["CUSTOMER_NAME"].replace(/COA|CABQ AQB|CITY ABQ|City of Albuquerque|ALBUQ|ALB|ALBUQUERQUE|CITY OF ALB|CITY OF ALBUQ|CITY OF ABQ|CITY OF ALBQ|CITY OF ALBUQ|CITY OF ALBUQUERQUE|-/g, "");
  const glDescription = allAccounts[i]["GL_DESCRIPTION"];
    const accNumber = allAccounts[i]["CUSTOMER_NUMBER"].toString();
      const rateCode = allAccounts[i]["RATE_CODE"];

if (glDescription.includes("TRAFFIC") || glDescription.includes("FLASHER") ||
 glDescription.includes("TRAFFI") || glDescription.includes("FLASHING") || 
   glDescription.includes("SIGN") || glDescription.includes("BEACON") || 
     glDescription.includes("SIGNAL") ||  glDescription.includes("INTERSECTION LIGHTS") ||
      glDescription.includes("PEDESTRAIN LGTS") ||  glDescription.includes("PEDESTIAN LIGHT") ||
       glDescription.includes("PEDESTRAIN LGHT") || glDescription.includes("PEDESTRIAN LIGH") ||  
       glDescription.includes("PEDESTRIAN LGHT") ||   glDescription.includes("PED LGTS") ||
         glDescription.includes("RADAR SI") ) {
  
        const specialKey = "TRAFFIC-SIGNAL";
  
        if (groupedData.hasOwnProperty(specialKey)) {
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        } else {
          groupedData[specialKey] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": "3606 Lomas Blvd NE",
            "Address" : "3606 Lomas Blvd NE",
            "CUSTOMER_NAME": "Traffic Signal",
          };
  
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        }
      } else if (glDescription.includes("DMD LIGHTING")) {
        const specialKey = "DMD-LIGHTING";
  
        if (groupedData.hasOwnProperty(specialKey)) {
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        } else {
          groupedData[specialKey] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": "4511 Central NW",
            "CUSTOMER_NAME": "Dmd Lighting",
            "Address" : "4511 Central NW",
            "Group": "Lights"
          };
  
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        }
      } else if (glDescription.includes("SUNPORT LIGHTING") ) {
        const specialKey = "SUNPORT-LIGHTING";
  
        if (groupedData.hasOwnProperty(specialKey)) {
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        } else {
          groupedData[specialKey] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": "0 Sunport Lighting",
            "CUSTOMER_NAME": "Sunport Lights",
            "Address" : "0 Sunport Lighting",
            "Group": "Lights"
          };
  
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        }
      } 
      else if (glDescription.includes("ZOO LIGHTING")) {
        const specialKey = "ZOO-LIGHTING";
  
        if (groupedData.hasOwnProperty(specialKey)) {
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        } else {
          groupedData[specialKey] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": "0 Zoo Lighting",
            "CUSTOMER_NAME": "Zoo Lights",
            "Group": "Lights",
            "Address" : "0 Zoo Lighting",
          };
  
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        }
      }
      else if (glDescription.includes("ZOO")) {
        const specialKey = "ZOO";
  
        if (groupedData.hasOwnProperty(specialKey)) {
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        } else {
          groupedData[specialKey] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": "903 10th St SW",
            "Address" : "903 10th St SW",
            "CUSTOMER_NAME": "Zoo",
          };
  
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        }
      }
      else if (glDescription.includes("2200 SUNPORT")) {
        const specialKey = "ABQ-SUNPORT";
  
        if (groupedData.hasOwnProperty(specialKey)) {
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        } else {
          groupedData[specialKey] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": "2200 Sunport SE",
            "CUSTOMER_NAME": "Abq International Sunport",
            "Address" : "2200 Sunport SE",
          };
  
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        }
      }
    
      else if (glDescription.includes("WALKWAY")) {
        const specialKey = "WALKWAY-LIGHTING";
  
        if (groupedData.hasOwnProperty(specialKey)) {
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        } else {
          groupedData[specialKey] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": "1330 Palomas Dr SE",
            "CUSTOMER_NAME": "Walkway Lights",
            "Group": "Lights",
            "Address" : "1330 Palomas Dr SE",
          };
  
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        }
      }
     
      else if ( glDescription.includes("PARK LIGHTING")
      
      ) {
        const specialKey = "PARK-LIGHTING";
  
        if (groupedData.hasOwnProperty(specialKey)) {
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        } else {
          groupedData[specialKey] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": "0 Park Lighting",
            "CUSTOMER_NAME": "Park Lights",
            "Group": "Lights",
            "Address" : "0 Park Lighting",
          };
  
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        }
      }
      
     else if (glDescription.includes("MEDIANS") ||
       glDescription.includes("MEDIAN") ) {
        const specialKey = "MEDIANS";
  
        if (groupedData.hasOwnProperty(specialKey)) {
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        } else {
          groupedData[specialKey] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": "12200 Lomas Blvd NE",
            "CUSTOMER_NAME": "Medians",
            "Address" : "12200 Lomas Blvd NE",
          };
  
          if (rateCode.includes("PV")) {
            groupedData[specialKey].Solar.add(accNumber);
          } else {
            groupedData[specialKey].Electric.add(accNumber);
          }
        }
      } 
      else if (glDescription.includes("STREETSCAPE") ||
      glDescription.includes("STREETSCA") ||   glDescription.includes("STREETSCAP") ) {
       const specialKey = "STREETSCAPE";
 
       if (groupedData.hasOwnProperty(specialKey)) {
         if (rateCode.includes("PV")) {
           groupedData[specialKey].Solar.add(accNumber);
         } else {
           groupedData[specialKey].Electric.add(accNumber);
         }
       } else {
         groupedData[specialKey] = {
           Electric: new Set(),
           Solar: new Set(),
           "GL_DESCRIPTION": "0 Mart L King & Commercial  NE",
           "CUSTOMER_NAME": "Streetscape",
           "Address" : "0 Mart L King & Commercial  NE",
           "Group": "Solid Waste"
         };
 
         if (rateCode.includes("PV")) {
           groupedData[specialKey].Solar.add(accNumber);
         } else {
           groupedData[specialKey].Electric.add(accNumber);
         }
       }
     } 
     else if (glDescription.includes("CCD SOLID WASTE") ||
     glDescription.includes("LANDSCAPE")) {

      const specialKey = "LANDSCAPING";

      if (groupedData.hasOwnProperty(specialKey)) {
        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      } else {
        groupedData[specialKey] = {
          Electric: new Set(),
          Solar: new Set(),
          "GL_DESCRIPTION": "117 114Th  SW",
          "CUSTOMER_NAME": "Landscaping",
          "Address" : "117 114Th  SW"
        };

        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      }
    } 
      else if (glDescription.includes("IRRIGATION LGHT") ||
            glDescription.includes("IRRIGATION LIGHT") 
      ) {
       const specialKey = "IRRIGATION-LIGHTS";
 
       if (groupedData.hasOwnProperty(specialKey)) {
         if (rateCode.includes("PV")) {
           groupedData[specialKey].Solar.add(accNumber);
         } else {
           groupedData[specialKey].Electric.add(accNumber);
         }
       } else {
         groupedData[specialKey] = {
           Electric: new Set(),
           Solar: new Set(),
           "GL_DESCRIPTION": "1503 Sunport Pl SE",
           "CUSTOMER_NAME": "Irrigation-Lights",
           "Group": "Lights", 
           "Address" : "1503 Sunport Pl SE",
         };
 
         if (rateCode.includes("PV")) {
           groupedData[specialKey].Solar.add(accNumber);
         } else {
           groupedData[specialKey].Electric.add(accNumber);
         }
       }
     }
     else if (glDescription.includes("UNDERPASS LIGHTING") || glDescription.includes("UNDERPASS LGTS") ||
     glDescription.includes("UNDERPASS LIGHTS") ||  glDescription.includes("UNDER BRIDGE LIGHTI")  ) {
     
      const specialKey = "UNDERPASS-LIGHTS";

      if (groupedData.hasOwnProperty(specialKey)) {
        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      } else {
        groupedData[specialKey] = {
          Electric: new Set(),
          Solar: new Set(),
          "GL_DESCRIPTION": "0 Montano Underpass Lights",
          "CUSTOMER_NAME": "Underpass Lights",
          "Group": "Lights", 
          "Address" : "0 Montano Underpass Lights",
        };

        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      }
    }
    else if (glDescription.includes("HIGHMAST LIGHTING") || glDescription.includes("MAST") 
     ) {

     const specialKey = "HIGHMAST-LIGHTING";

     if (groupedData.hasOwnProperty(specialKey)) {
       if (rateCode.includes("PV")) {
         groupedData[specialKey].Solar.add(accNumber);
       } else {
         groupedData[specialKey].Electric.add(accNumber);
       }
     } else {
       groupedData[specialKey] = {
         Electric: new Set(),
         Solar: new Set(),
         "GL_DESCRIPTION": "1700 I-25 Sb & I-40 Eb Frontage Rd NE",
         "CUSTOMER_NAME": "High Mast Lighting",
         "Group": "Lights", 
         "Address" : "1700 I-25 Sb & I-40 Eb Frontage Rd NE",
       };

       if (rateCode.includes("PV")) {
         groupedData[specialKey].Solar.add(accNumber);
       } else {
         groupedData[specialKey].Electric.add(accNumber);
       }
     }
   }
     else if (glDescription.includes("LTS OUTSIDE CITY LIMITS")) {
      const specialKey = "OUTSIDE-CITY-LIMIT-LIGHTS";

      if (groupedData.hasOwnProperty(specialKey)) {
        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      } else {
        groupedData[specialKey] = {
          Electric: new Set(),
          Solar: new Set(),
          "GL_DESCRIPTION": "5736 Irving Blvd NW",
          "CUSTOMER_NAME": "Lights Outside City Limits",
          "Group": "Lights",
          "Address" : "5736 Irving Blvd NW",
        };

        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      }
    }
    else if (glDescription.includes("IRRIGATION") || 
    glDescription.includes("IRRIG") ||
    glDescription.includes("IRRIGATIO") ||
    glDescription.includes("IRRIGATI")
    ) {
      const specialKey = "IRRIGATION";

      if (groupedData.hasOwnProperty(specialKey)) {
        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      } else {
        groupedData[specialKey] = {
          Electric: new Set(),
          Solar: new Set(),
          "GL_DESCRIPTION": "1230.5 Unser Blvd SW",
          "CUSTOMER_NAME": "Irrigation",
          "Address" : "1230.5 Unser Blvd SW",
        };

        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      }
    }
    else if (glDescription.includes("SPRINKLERS") ||glDescription.includes("SPRINKL") ||
    glDescription.includes("SPRINKLER") || glDescription.includes("SPRINKERS")
    ) {
      const specialKey = "SPRINKLERS";

      if (groupedData.hasOwnProperty(specialKey)) {
        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      } else {
        groupedData[specialKey] = {
          Electric: new Set(),
          Solar: new Set(),
          "GL_DESCRIPTION": "0 Composite Bill",
          "CUSTOMER_NAME": "Sprinklers",
          "Address" : "0 Composite Bill",
        };

        if (rateCode.includes("PV")) {
          groupedData[specialKey].Solar.add(accNumber);
        } else {
          groupedData[specialKey].Electric.add(accNumber);
        }
      }
    }
//make sure street lights go last since condition lgts, lights should only
//grab the remaining lights left over
      else if (glDescription.includes("STREET LIGHTING") || glDescription.includes("STREET LIGHTS") || 
      glDescription.includes("STREET LIGHT") || glDescription.includes("STREET LGTS") || 
      glDescription.includes("FREEWAY LIGHTS") || glDescription.includes("STREETLIGHTS") || 
      glDescription.includes("LIGHTS") || glDescription.includes("LIGHT")|| glDescription.includes("LIGHTING")|| 
      glDescription.includes("LGTS") || glDescription.includes("LGT") || glDescription.includes("LTG") ||glDescription.includes("LTS")
      || glDescription.includes("LIGH") || glDescription.includes("LGHT") || glDescription.includes("LGHTING")
      ){

       const specialKey = "STREET-LIGHTS";
 
       if (groupedData.hasOwnProperty(specialKey)) {
         if (rateCode.includes("PV")) {
           groupedData[specialKey].Solar.add(accNumber);
         } else {
           groupedData[specialKey].Electric.add(accNumber);
         }
       } else {
         groupedData[specialKey] = {
           Electric: new Set(),
           Solar: new Set(),
           "GL_DESCRIPTION": "0 Street Lighting",
           "CUSTOMER_NAME": "Street Lights",
           "Group": "Lights",
           "Address" : "0 Street Lighting",
         };
 
         if (rateCode.includes("PV")) {
           groupedData[specialKey].Solar.add(accNumber);
         } else {
           groupedData[specialKey].Electric.add(accNumber);
         }
       }
     } 
      else {
        
        if (groupedData.hasOwnProperty(glDescription)) {
          if (rateCode.includes("PV")) {
            groupedData[glDescription].Solar.add(accNumber);
          } else {
            groupedData[glDescription].Electric.add(accNumber);
          }
        } else {
          groupedData[glDescription] = {
            Electric: new Set(),
            Solar: new Set(),
            "GL_DESCRIPTION": glDescription,
            "CUSTOMER_NAME": customerName,
            "Address" : address
          };
  
          if (rateCode.includes("PV")) {
            groupedData[glDescription].Solar.add(accNumber);
          } else {
            groupedData[glDescription].Electric.add(accNumber);
          }
        }
      
    }
    }
}
    }
     catch(err){
        console.log(`Error reading ${fileName}:`, err);
    }
}

const groupedArray = Object.values(groupedData);
  
groupedArray.forEach(entry => {
      entry.Electric = Array.from(entry.Electric);
      entry.Solar = Array.from(entry.Solar);
});
    return groupedArray;
//}
};

const getResult = async () => {

const final = await loopBills();

fs.writeFile('./CompositeGroups.json', JSON.stringify(final), err => {
        if (err) {
          console.log("Can't write CompositeGroups.json");
        } else {
          console.log('Data written to CompositeGroups.json');
        }
    });
}

await getResult();

