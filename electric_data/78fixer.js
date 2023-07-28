const fs = require('fs');
const fs1 = require('fs');



fs.readFile('electric2022fixed.json', 'utf8', (err, data) => {
  if (err) throw err;

  let jsonData = JSON.parse(data);

  let fixed78 = [];

  jsonData.forEach(jsonEntry => {
    if (jsonEntry.MonthNum === 7 || jsonEntry.MonthNum === 8) {
        fixed78.push({
   
          "DEPARTMENT": jsonEntry.DEPARTMENT,
          "FUND": jsonEntry.FUND,
          "ACCOUNT": jsonEntry.ACCOUNT,
          "CUSTOMER_NUMBER": jsonEntry.CUSTOMER_NUMBER,
          "CUSTOMER_NAME": jsonEntry.CUSTOMER_NAME,
          "STREET_NUMBER": jsonEntry.STREET_NUMBER,
          "STREET_NAME": jsonEntry.STREET_NAME,
          "STREET_DESIGNATOR": jsonEntry.STREET_DESIGNATOR,
          "QUADRANT": jsonEntry.QUADRANT,
          "SERVICE_TYPE": jsonEntry.SERVICE_TYPE,
          "RATE_CODE": jsonEntry.RATE_CODE,
          "STATUS_CODE" : jsonEntry.STATUS_CODE,
          "CURRENT_BILL_AMOUNT": jsonEntry.CURRENT_BILL_AMOUNT,
          "LAST_METER_READ_DATE": jsonEntry.LAST_METER_READ_DATE,
          "NUMBER_OF_SERVICE_DAYS": jsonEntry.NUMBER_OF_SERVICE_DAYS,
          "CONTRACT_MINIMUM_DEMAND": jsonEntry.CONTRACT_MINIMUM_DEMAND,
          "ON_PEAK_DERIVED_DEMAND": jsonEntry.ON_PEAK_DERIVED_DEMAND,
          "ON_PEAK_DEMAND": jsonEntry.ON_PEAK_DEMAND,
          "ON_PEAK_DEMAND_CHARGE": jsonEntry.ON_PEAK_DEMAND_CHARGE,
          "ON_PEAK_KILOWATT": jsonEntry.ON_PEAK_KILOWATT,
          "TOTAL_KILOWATT": jsonEntry.TOTAL_KILOWATT,
          "METER_NUMBER": jsonEntry.METER_NUMBER,
          "METER_CONSTANT_MULTIPLIER": jsonEntry.METER_CONSTANT_MULTIPLIER,
          "METER_READING_KWH": jsonEntry.METER_READING_KWH,
          "PRIOR_METER_READING_KWH": jsonEntry.PRIOR_METER_READING_KWH,
          "OFF_PEAK_METER_READING": jsonEntry.OFF_PEAK_METER_READING,
          "PRIOR_OFF_PEAK_METER_READING":jsonEntry.PRIOR_OFF_PEAK_METER_READING,
          "ALLOWED_RKVA": jsonEntry.ALLOWED_RKVA,
          "BILLED_RKVA": jsonEntry.BILLED_RKVA,
          "RKVA_CHARGE": jsonEntry.RKVA_CHARGE,
          "NUMBER_OF_STREET_LIGHTS": jsonEntry.NUMBER_OF_STREET_LIGHTS,
          "TOTAL_AMOUNT_DUE":  jsonEntry.CURRENT_BILL_AMOUNT,
          "RECORD_NUMBER":jsonEntry.RECORD_NUMBER,
          "FROM_READING_DATE": jsonEntry.FROM_READING_DATE,
          "GL_DESCRIPTION": jsonEntry.GL_DESCRIPTION,
          "QUANTITY":jsonEntry.QUANTITY,
          "MonthNum": jsonEntry.MonthNum,
          "YearNum": jsonEntry.YearNum,
    })
}
  });

  fs1.writeFile('electric2022fixed78.json', JSON.stringify(fixed78), err => {
    if (err) throw err;
    console.log('fuck');
  });


});