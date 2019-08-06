let moment = require("moment-timezone");
let ct = require("countries-and-timezones");

let partOfSampleSession = {
    "message": {
        "entities": [
            {
                "country": "CN",
                "locale": "zh-CN",
                "platform": "Web",
                "type": "clientInfo"
            }
        ],
        "localTimestamp": "2019-08-06T18:23:44.259+08:00"
    }
}

function getTimezoneFromSession(session) {
    // Get the name of country, such as "CN", "JP", "US"
    let country = session.message.entities[0].country;

    // Get the localTimestamp from message in session, such as "2019-08-06T18:23:44.259+08:00"
    let localTimestamp = session.message.localTimestamp;

    // Caculate the utfOffset of "localTimestamp", such as "480" by "2019-08-06T18:23:44.259+08:00"
    let utcOffsetOfLocalTime = moment().utcOffset(localTimestamp).utcOffset();

    // Mapping country to an object array which contains utcOffsets and it's corresponding timezones
    // One element from mxTimezones is {"utcOffset": "480", "name": "Asia/Shanghai"}
    let mxTimezones = ct.getTimezonesForCountry(country);

    // get the same timezone as localtime utcOffset from timezones in a country
    let timezone = "";
    mxTimezones.forEach(mxTimezone => {
        if (mxTimezone.utcOffset == utcOffsetOfLocalTime) {
            timezone = mxTimezone.name;
        }
    });
    return timezone;
}
let timezone = getTimezoneFromSession(partOfSampleSession);
// timezone = "Asia/Shanghai"
console.log(timezone);


// example of ct.getTimezonesForCountry("US")
// mxTimezones = [
//      {
//          "name": "America/New_York",
//          "utcOffset": "-300",
//      },
//      {
//          "name": "America/Los_Angeles",
//          "utcOffset": "-480",
//      }
//      ...
//      27 elements
//      ...
// ]