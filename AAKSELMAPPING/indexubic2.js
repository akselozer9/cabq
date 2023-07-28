import fs from "fs";
import request from "request";

function getToken(callback) {
    const authenticate = {
      method: 'POST',
      url: 'https://auth.ubihub.ubicquia.com/auth/realms/ubivu-prd/protocol/openid-connect/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        client_id: '69655.sismail@cabq.gov',
        grant_type: 'client_credentials',
        client_secret: '8b213838-594b-4bab-a0f1-5f23c20c7361',
        scope: 'openid'
      }
    };
  
    request(authenticate, (error, response, body) => {
      if (error) {
        console.error('Error generating token:', error.message);
        callback(null);
      } else if (response.statusCode !== 200) {
        console.error('Error generating token:', response.statusCode, body);
        callback(null);
      } else {
        const accessToken = JSON.parse(body).access_token;
        console.log('Access Token:', accessToken);
        callback(accessToken);
      }
    });
  }
  
  
  function getData() {
    getToken((accessToken) => {
        if (!accessToken) {
            console.error('Access token not available.');
            return;
        }

        const apiUrl = 'https://api.ubicquia.com/api/v2/nodes/light';
        
        const requestData = {
            "filter": [
                {
                  "attribute": "",
                  "operator": "",
                  "value": "",
                  "start_date": "",
                  "end_date": "",
                  "key": ""
                }
            ],
            "air-quality": "",
            "periods": "",
            "q": "",
            "page": 1,
            "per_page": 659 // changed from 15 to 659 as per your requirement
        };

        const options = {
            method: 'POST',
            url: apiUrl,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json', // added this line to specify that we're sending JSON
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(requestData) // added this line to include the request data in the API call
        };

        request(options, (error, response, body) => {
            if (error) {
                console.error('Error retrieving data:', error.message);
            } else if (response.statusCode !== 200) {
                console.error('Error retrieving data:', response.statusCode, body);
            } else {
                const alertData = JSON.parse(body);
                console.log('Alert Data:', alertData);

                fs.writeFile('./ids2.json', JSON.stringify(alertData), (err) => {
                    if (err) {
                        console.error('Error writing file', err);
                    } else {
                        console.log('Successfully wrote ids2.json');
                    }
                });
            }
        });
    });
}
    
    getData();
   