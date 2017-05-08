import google from 'googleapis';




// google analitics reports api
var viewID = '147524390'; // Google Analytics view ID
var key = require('./service_account.json'); // Service account

var jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/analytics.readonly'], null);
var oauth2Client = new google.auth.OAuth2();

jwtClient.authorize(function(err, result) {
    if (err) {
        console.log('Unauthorize');
        console.log(err);
        return;
    }

    oauth2Client.setCredentials({
        access_token: result.access_token
    });

    //Need to authenticate somewhere near here
    var analytics = google.analyticsreporting('v4');
    //Or here
    var re = {
        reportRequests: [{
            viewId: viewID,
            hideValueRanges: true,
            dateRanges: [{
                startDate: 'yesterday',
                endDate: 'yesterday',
            }],
            metrics: [{
                expression: 'ga:users',
            }, {
                expression: 'ga:sessions',
            }, {
                expression: 'ga:pageviews'
            }]

        }, ],
    };

    var req = {
        'headers': { 'Content-Type': 'application/json' },
        'auth': oauth2Client,
        'resource': re,
    };

    //Maybe here
    analytics.reports.batchGet(req,
        function(err, response) {
            if (err) {
                console.log('Fail');
                console.log(err);
                return;
            }
            console.log('Success');
            // console.log(JSON.stringify(response.reports, null, 2));
        }
    );
});