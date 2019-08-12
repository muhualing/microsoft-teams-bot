### Overview of `adaptiveCard.json`
[Adaptive Cards](https://docs.microsoft.com/en-us/adaptive-cards/) are an open card exchange format enabling developers to exchange UI content in a common and consistent way.
`adaptiveCard.json` is a conflict meeting reminder card inside **Microsoft Teams**. Adaptive Cards inside Teams are a little different from the [Broswer-based](https://adaptivecards.io/designer/) one. 

**Differences**:
1. No `"contentType"` field and no `"content"` to wrap the body inside broswer-based one.
2. Values of button should contains `"msteams"` wrapper inside Teams.

**Brower-based Sample**:
```json
{
    "type": "AdaptiveCard",
    "body": [...
    ],
    "actions": [
        {
            ...
            "data": {
                ...
            }
        },
    ],
}
```

**Sample inside Microsoft Teams**:
```json
{
    "contentType": "application/vnd.microsoft.card.adaptive",
    "content": {
        "type": "AdaptiveCard",
        "body": [...
        ],
        "actions": [
            {
                ...
                "data": {
                    "msteams": {
                        ...
                        "value": "{\"bfKey\": \"bfVal\", \"conflictKey\": \"from value\"}"
                    }
                }
            },
        ],
    }
}
```