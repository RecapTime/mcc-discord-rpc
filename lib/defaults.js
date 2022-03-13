let defaultActivity = {
    description: "Event starts soon",
    assets: {
        large_image: "mcc-twitter",
        large_text: "MC Championship",
        small_image: "",
        small_text: ""
    },
    buttons: [
        {
            "label": "Check event stats",
            "url": "https://mcc.live"
        },
    ],
    timestamp: {
        start: Date.now(),
        // TODO: Update the end time, assuming that @TubboLive leaks it again.
        end: 1651032000000 // MCC20 in UTC time
    }
}

module.exports = defaultActivity