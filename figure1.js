Reveal.addEventListener('ready', function(){
var yourVlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "data": {
      "url": "https://raw.githubusercontent.com/mingrui4/spr2019-adv-project/master/output.csv"
    },
    "config": {"axis": {"domain": false}},
    "columns": 2,
    "concat": [
      {
        "title": {
          "text": "2014-2015 Daily Temperature (F) in SEA",
          "anchor": "middle"
        },
        "width": 960,
        "height": 400,
        "mark": "rect",
        "encoding": {
          "x": {
            "field": "date",
            "timeUnit": "date",
            "type": "ordinal",
            "title": "Day",
            "axis": {"labelAngle": 0, "format": "%e"}
          },
          "y": {
            "scale": {"domain": {"selection": "brush"}},
            "field": "date",
            "timeUnit": "month",
            "type": "ordinal",
            "title": "Month"
          },
          "color": {
            "field": "KSEA_temp",
            "aggregate": "max",
            "type": "quantitative",
            "legend": {"title": null}
          }
        }
      },
      {
        "title": {
          "text": "2014-2015 Daily Temperature (F) in NYC",
          "anchor": "middle"
        },
        "width": 960,
        "height": 400,
        "mark": "rect",
        "encoding": {
          "x": {
            "field": "date",
            "timeUnit": "date",
            "type": "ordinal",
            "title": "Day",
            "axis": {"labelAngle": 0, "format": "%e"}
          },
          "y": {
            "scale": {"domain": {"selection": "brush"}},
            "field": "date",
            "timeUnit": "month",
            "type": "ordinal",
            "title": "Month"
          },
          "color": {
            "field": "KNYC_temp",
            "aggregate": "max",
            "type": "quantitative",
            "legend": {"title": null}
          }
        }
      },
      {
        "width": 960,
        "height": 250,
        "mark": {"type": "line", "point": {"filled": false, "fill": "#60acfc"}},
        "selection": {"brush": {"type": "interval", "encodings": ["x"]}},
        "encoding": {
          "x": {
            "timeUnit": "month",
            "field": "date",
            "type": "ordinal",
            "title": "Date"
          },
          "y": {
            "aggregate": "mean",
            "field": "KSEA_temp",
            "type": "quantitative",
            "title": "Temp"
          },
          "color": {"value": "#60acfc"}
        }
      },
      {
        "width": 960,
        "height": 250,
        "mark": {"type": "line", "point": {"filled": false, "fill": "#ff9a07"}},
        "selection": {"brush": {"type": "interval", "encodings": ["x"]}},
        "encoding": {
          "x": {
            "timeUnit": "month",
            "field": "date",
            "type": "ordinal",
            "title": "Date"
          },
          "y": {
            "aggregate": "mean",
            "field": "KNYC_temp",
            "type": "quantitative",
            "title": "Temp"
          },
          "color": {"value": "#ff9a07"}
        }
      }
    ]
  };

var embedded = vegaEmbed('#vis', yourVlSpec);
});