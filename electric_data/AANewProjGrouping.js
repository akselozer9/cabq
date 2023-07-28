const fs = require('fs');

const calculateLevenshteinDistance = (str1, str2) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (!str1 || !str2) {
        resolve(Infinity);
      } else {
        const m = str1.length;
        const n = str2.length;
        const dp = [];

        // Rest of the Levenshtein distance calculation code...

        resolve(dp[m][n]);
      }
    }, 0);
  });
};

const groupedData = {};

fs.readFile('allElectricAccounts.json', 'utf8', (err, data) => {
  if (err) {
    console.log(`Can't read allElectricAccounts.json`);
    return;
  }

  const allAccounts = JSON.parse(data);

  for (let i = 0; i < allAccounts.length; i++) {
    const glDescription = allAccounts[i]["GL_DESCRIPTION"];
    const accNumber = allAccounts[i].AccNumber;

    if (groupedData.hasOwnProperty(glDescription)) {
      groupedData[glDescription].AccNumber.add(accNumber);
    } else {
      groupedData[glDescription] = {
        AccNumber: new Set([accNumber]),
        "GL_DESCRIPTION": glDescription
      };
    }
  }

  const groupedArray = Object.values(groupedData);

  fs.readFile('BUILDINGS.json', 'utf8', async (err, data) => {
    if (err) {
      console.log(`Can't read BUILDINGS.json`);
      return;
    }

    const buildings = JSON.parse(data);
    const final = [];

    for (const building of buildings) {
      let minDistance = Infinity;
      let mostSimilarGroup;

      for (const group of groupedArray) {
        const distance = await calculateLevenshteinDistance(group.GL_DESCRIPTION, building.Name);
        if (distance < minDistance) {
          minDistance = distance;
          mostSimilarGroup = group;
        }
      }

      final.push({
        BuildingName: building.Name,
        GL_DESCRIPTION: mostSimilarGroup && mostSimilarGroup.GL_DESCRIPTION,
        AccNumber: mostSimilarGroup && Array.from(mostSimilarGroup.AccNumber)
      });
    }

    fs.writeFile('./AANewProjGroupingFinal.json', JSON.stringify(final), err => {
      if (err) {
        console.log("Can't write AANewProjGroupingFinal.json");
      } else {
        console.log('Grouped data has been written to AANewProjGroupingFinal.json');
      }
    });
  });
});
