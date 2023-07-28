import fs from 'fs';
import  { Parser } from 'json2csv';

const rawData = fs.readFileSync('ids2.json');
const jsonData = JSON.parse(rawData);

const data = jsonData.data;

let newElements = [];

for (let element of data) {
    if(element.id === 22){
        console.log(element.node);
    }
    newElements.push({
        id: element.id,
        node: element.node,
        node_status: element.node_status,
        serial_number: element.serial_number,
        dev_eui: element.dev_eui,
        latitude : element.latitude, 
        longitude :  element.longitude , 
    });
}

const json2csvParser = new Parser();
const csvData = json2csvParser.parse(newElements);

fs.writeFileSync('output.csv', csvData);
