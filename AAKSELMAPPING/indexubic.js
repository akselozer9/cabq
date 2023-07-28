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
        client_id: '5916.sismail@cabq.gov',
        grant_type: 'client_credentials',
        client_secret: 'b46d8f14-2fed-422b-94f9-0a0d981d7a5e',
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

        const apiUrl = 'https://api.ubicquia.com/api/v2/traffic-mobility/list/vehicle';
        const requestData = {
            "edge": "947bbe4010e6",
            "responseType": "all",
            "direction": "N-S",
            "locationUid": "7rybcbkr6slj7fhak1",
            "vehicleType": "small_vehicle",
            "aggregationType": "hourly",
            "startDateTime": "2023-07-27 00:00:00",
            "endDateTime": "2023-07-27 20:30:00",
            "page": 1,
            "per_page": 10
        };

        const options = {
            method: 'POST',
            url: apiUrl,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(requestData)
        };

        request(options, (error, response, body) => {
            if (error) {
                console.error('Error retrieving data:', error.message);
            } else if (response.statusCode !== 200) {
                console.error('Error retrieving data:', response.statusCode, body);
            } else {
                const alertData = JSON.parse(body);
                console.log('Alert Data:', alertData);

                fs.writeFile('./ids.json', JSON.stringify(alertData), (err) => {
                    if (err) {
                        console.log('Error writing file', err);
                    } else {
                        console.log('Successfully wrote ids.json');
                    }
                });
            }
        });
    });
}
    
    getData();