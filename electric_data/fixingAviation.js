const fs = require('fs');

newGrouping = [];
fs.readFile('allElectricAccounts.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`can't read electricACCOUNTSsorted.json`);
        return;
    }
    
    const elec = JSON.parse(data);

    for (let i = 0; i < elec.length; i++) {
            if(
elec[i]["AccNumber"] === "1152553131155146100" ||
elec[i]["AccNumber"] === "1152553131811172100" ||
elec[i]["AccNumber"] === "1152553821155158100" ||
elec[i]["AccNumber"] === "1153344650274265100" ||
elec[i]["AccNumber"] === "1153988920273893100" ||
elec[i]["AccNumber"] === "1154304831199867100" ||
elec[i]["AccNumber"] === "1154304931199870100" ||
elec[i]["AccNumber"] === "1154306740274932100" ||
elec[i]["AccNumber"] === "1154306741199923100" ||
elec[i]["AccNumber"] === "1154429600274005100" ||
elec[i]["AccNumber"] === "1154429620273891100" ||
elec[i]["AccNumber"] === "1154429650246318100" ||
elec[i]["AccNumber"] === "1154429710272215100" ||
elec[i]["AccNumber"] === "1154429760269977100" ||
elec[i]["AccNumber"] === "1154457200246212100" ||
elec[i]["AccNumber"] === "1154831150246209100" ||
elec[i]["AccNumber"] === "1154897391216621100" ||
elec[i]["AccNumber"] === "1154900210274262100" ||
elec[i]["AccNumber"] === "1154919820274269100" ||
elec[i]["AccNumber"] === "1154919821217415100" ||
elec[i]["AccNumber"] === "1154962870274008100" ||
elec[i]["AccNumber"] === "1155073740246213100" ||
elec[i]["AccNumber"] === "1155073740273634100" ||
elec[i]["AccNumber"] === "1155519421233934100" ||
elec[i]["AccNumber"] === "1155582411235629100" ||
elec[i]["AccNumber"] === "1156156650381920100" ||
elec[i]["AccNumber"] === "1156357011195407100" ||
elec[i]["AccNumber"] === "1156533290271165100" ||
elec[i]["AccNumber"] === "1156533320270661100" ||
elec[i]["AccNumber"] === "1156913730381544101" ||
elec[i]["AccNumber"] === "1156954551274248100" ||
elec[i]["AccNumber"] === "1158614721360944100" ||
elec[i]["AccNumber"] === "1158684610274260100" ||
elec[i]["AccNumber"] === "1158743920273883100" ||
elec[i]["AccNumber"] === "1158833280267809100" ||
elec[i]["AccNumber"] === "1159695690246216100" ||
elec[i]["AccNumber"] === "1159720060273863100" ||
elec[i]["AccNumber"] === "1159720060274259100" ||
elec[i]["AccNumber"] === "1159720061624182100" ||
elec[i]["AccNumber"] === "1159736511379423100" ||
elec[i]["AccNumber"] === "1160095090274047100" ||
elec[i]["AccNumber"] === "1170925601622472100" ||
elec[i]["AccNumber"] === "1171314701631292100" ||
elec[i]["AccNumber"] === "1171987001644312100" ||
elec[i]["AccNumber"] === "1186666621903452100" ||
elec[i]["AccNumber"] === "1191998851993153100" ||
elec[i]["AccNumber"] === "1196934202034732100" ||
elec[i]["AccNumber"] === "318317010379115100" ||
elec[i]["AccNumber"] === "318320000379117100" ||
elec[i]["AccNumber"] === "318323020379119100" ||
elec[i]["AccNumber"] === "318327040379123100" ||
elec[i]["AccNumber"] === "318328020379124100" ||
elec[i]["AccNumber"] === "318329020379125100" ||
elec[i]["AccNumber"] === "319631010380153100" ||
elec[i]["AccNumber"] === "320248000380522100" ||
elec[i]["AccNumber"] === "320519000380673100" ||
elec[i]["AccNumber"] === "320625040380734100" ||
elec[i]["AccNumber"] === "320858010380858100" ||
elec[i]["AccNumber"] === "320923020380892100" ||
elec[i]["AccNumber"] === "321100000380986100" ||
elec[i]["AccNumber"] === "321101010380987100" ||
elec[i]["AccNumber"] === "321174020381026100" ||
elec[i]["AccNumber"] === "321178000381028100" ||
elec[i]["AccNumber"] === "321181020381030100" ||
elec[i]["AccNumber"] === "321219030381053100" ||
elec[i]["AccNumber"] === "321290010381094100" ||
elec[i]["AccNumber"] === "321293020381096100" ||
elec[i]["AccNumber"] === "321312020381109100" ||
elec[i]["AccNumber"] === "321315010381111100" ||
elec[i]["AccNumber"] === "321389000381156100" ||
elec[i]["AccNumber"] === "321642000381299100" ||
elec[i]["AccNumber"] === "321642001462743100" ||
elec[i]["AccNumber"] === "321642001462744100" ||
elec[i]["AccNumber"] === "321836010381407100" ||
elec[i]["AccNumber"] === "321843020381411100" ||
elec[i]["AccNumber"] === "321844010381412100" ||
elec[i]["AccNumber"] === "322646010381842100" ||
elec[i]["AccNumber"] === "322787000381918100" ||
elec[i]["AccNumber"] === "322788010273888100" ||
elec[i]["AccNumber"] === "322788010381919100" ||
elec[i]["AccNumber"] === "322808000381930100" ||
elec[i]["AccNumber"] === "322839010381946100" ||
elec[i]["AccNumber"] === "323011000382037100" ||
elec[i]["AccNumber"] === "323264000274850100" ||
elec[i]["AccNumber"] === "323264000382170100" 

            ){
                    newGrouping.push({
                        "AccNumber": elec[i].AccNumber,
                                          "RATE_CODE" : elec[i]["RATE_CODE"],
                                          "GL_DESCRIPTION": elec[i]["GL_DESCRIPTION"],
                    })
                
            }
    }

    
  
        
    const groupedData = {};

    for (let i = 0; i < newGrouping.length; i++) {
      const glDescription = newGrouping[i]["GL_DESCRIPTION"];
      const accNumber = newGrouping[i].AccNumber;
    
      // Check if the GL_DESCRIPTION already exists in the groupedData
      if (groupedData.hasOwnProperty(glDescription)) {
        // If it exists, add the AccNumber to the Set of unique accounts
        groupedData[glDescription].AccNumber.add(accNumber);
      } else {
        // If it doesn't exist, create a new entry with the AccNumber Set
        groupedData[glDescription] = {
          AccNumber: new Set([accNumber]),
          "GL_DESCRIPTION": glDescription
        };
      }
    }
    
    // Convert the grouped data object to an array
    const groupedArray = Object.values(groupedData);
    
    // Convert the Set of unique accounts to an array within each grouped entry
    groupedArray.forEach(entry => {
      entry.AccNumber = Array.from(entry.AccNumber);
    });
    
    // Write the grouped data to a new file
    fs.writeFile('./GroupedByGLDescription.json', JSON.stringify(groupedArray), err => {
      if (err) {
        console.log("Can't write GroupedByGLDescription.json");
      } else {
        console.log('Grouped data has been written to GroupedByGLDescription.json');
      }
    });
    });