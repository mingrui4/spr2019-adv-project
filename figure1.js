Reveal.addEventListener('ready', function(){
var yourVlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "data": {
        "url": "https://raw.githubusercontent.com/mingrui4/spr2019-adv-project/master/output.csv"
    },
    "title": {
        "text": "2014-2015 Daily Temperature (F) in CLT",
        "anchor": "middle"
    },
    "config": {
        "axis": {
            "domain": false
        }
    },
    "vconcat": [
        {
            "width": 960,
            "height": 400,
            "mark": "rect",
            "encoding": {
                "x": {
                    "field": "date",
                    "timeUnit": "date",
                    "type": "ordinal",
                    "title": "Day",
                    "axis": {
                        "labelAngle": 0,
                        "format": "%e"
                    }
                },
                "y": {
                    "scale": {
                        "domain": {
                            "selection": "brush"
                        }
                    },
                    "field": "date",
                    "timeUnit": "month",
                    "type": "ordinal",
                    "title": "Month"
                },
                "color": {
                    "field": "KCLT_temp",
                    "aggregate": "max",
                    "type": "quantitative",
                    "legend": {
                        "title": null
                    }
                }
            }
        },
        {
            "width": 960,
            "height": 250,
            "mark": {
                "type": "line",
                "point": {
                    "filled": false,
                    "fill": "grey"
                }
            },
            "selection": {
                "brush": {
                    "type": "interval",
                    "encodings": [
                        "x"
                    ]
                }
            },
            "encoding": {
                "x": {
                    "timeUnit": "month",
                    "field": "date",
                    "type": "ordinal",
                    "title": "Date"
                },
                "y": {
                    "aggregate": "mean",
                    "field": "KCLT_temp",
                    "type": "quantitative",
                    "title": "Temp"
                },
                "color": {
                    "value": "grey"
                }
            }
        }
    ]
};

var embedded = vegaEmbed('#vis', yourVlSpec);
});