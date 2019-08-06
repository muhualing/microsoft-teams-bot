## About `getTimezoneFromSession.js`
#### Overview
To solve the issue [Microsoft Teams: get timezone of user?](https://stackoverflow.com/questions/53282405/microsoft-teams-get-timezone-of-user)

We can solve the issue `"NOT Receive the timezone"` by mapping the `utcOffset` of `localTimestamp` and `country` in `entities` to `timezone`.   

I wrote a javascript code to get timezone such as `"Asia/shanghai"` by using the `"localTimestamp": "2019-08-06T18:23:44.259+08:00"` and `"country": "CN"` from `Session` 
Part of the session in Microsoft Teams as follows:
```json
partOfSampleSession = {
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
    ...
    ...
}
```
#### how to run
1. `npm install`
2. `node src/utils/getTimezoneFromSession.js`  