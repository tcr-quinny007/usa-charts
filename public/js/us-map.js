AmCharts.makeChart("map",{
    "type": "map",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "addClassNames": true,
    "fontSize": 15,
    "color": "#FFFFFF",
    "projection": "mercator",
    "backgroundAlpha": 1,
    "backgroundColor": "transparent",
    "dataProvider": {
        "map": "usaLow",
        "getAreasFromMap": true,
        "areas": [
            {
                "id": "US-AK",
                "title": "Alaska",
                "color": "rgba(255,0,0,0.8)"
            },
            {
                "id": "US-FL",
                "title": "Florida",
                "color": "rgba(255,0,0,0.8)"
            },
            {
                "id": "US-NV",
                "title": "Nevada",
                "color": "rgba(255,0,0,0.8)"
            },
            {
                "id": "US-SD",
                "title": "South Dakota",
                "color": "rgba(255,0,0,0.8)"
            },
            {
                "id": "US-TX",
                "title": "Texas",
                "color": "rgba(255,0,0,0.8)"
            },
            {
                "id": "US-WA",
                "title": "Washington",
                "color": "rgba(255,0,0,0.8)"
            },
            {
                "id": "US-WY",
                "title": "Wyoming",
                "color": "rgba(255,0,0,0.8)"
            },
            {
                "id": "US-NH",
                "title": "New Hampshire",
                "color": "rgba(255,0,0,0.8)"
            },
            {
                "id": "US-TN",
                "title": "Tennessee",
                "color": "rgba(255,0,0,0.8)"
            }
        ]
    },
    "balloon": {
        "horizontalPadding": 15,
        "borderAlpha": 0,
        "borderThickness": 1,
        "verticalPadding": 15
    },
    "areasSettings": {
        "color": "rgba(129,129,129,1)",
        "outlineColor": "rgba(80,80,80,1)",
        "rollOverOutlineColor": "rgba(80,80,80,1)",
        "rollOverBrightness": 20,
        "selectedBrightness": 20,
        "selectable": true,
        "unlistedAreasAlpha": 0,
        "unlistedAreasOutlineAlpha": 0
    },
    "imagesSettings": {
        "alpha": 1,
        "color": "rgba(129,129,129,1)",
        "outlineAlpha": 0,
        "rollOverOutlineAlpha": 0,
        "outlineColor": "rgba(80,80,80,1)",
        "rollOverBrightness": 20,
        "selectedBrightness": 20,
        "selectable": true
    },
    "linesSettings": {
        "color": "rgba(129,129,129,1)",
        "selectable": true,
        "rollOverBrightness": 20,
        "selectedBrightness": 20
    },
    "zoomControl": {
        "zoomControlEnabled": false,
        "homeButtonEnabled": false,
        "panControlEnabled": false,
        "right": 38,
        "bottom": 30,
        "minZoomLevel": 0.25,
        "gridHeight": 100,
        "gridAlpha": 0.1,
        "gridBackgroundAlpha": 0,
        "gridColor": "#FFFFFF",
        "draggerAlpha": 1,
        "buttonCornerRadius": 2
    }
});
