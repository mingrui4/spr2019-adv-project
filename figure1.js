Reveal.addEventListener('ready', function(){
var yourVlSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {
        name: 'champaign_zoning', url: './champaign.topojson',
        "format": {
            "type": "topojson",
            "feature": "Zoning"
        }
    },
    "transform": [
        {
            'lookup': 'properties.zoning_description',
            'from': {
                'fields': ['base_type'],
                'data':
                {
                    'values': [
                        { 'code': 'CB1', 'base_type': 'Commercial' },
                        { 'code': 'CB2', 'base_type': 'Commercial' },
                        { 'code': 'CB3', 'base_type': 'Commercial' },
                        { 'code': 'CG', 'base_type': 'Commercial' },
                        { 'code': 'CI', 'base_type': 'Commercial' },
                        { 'code': 'CN', 'base_type': 'Commercial' },
                        { 'code': 'CO', 'base_type': 'Commercial' },
                        { 'code': 'I1', 'base_type': 'Industrial' },
                        { 'code': 'I2', 'base_type': 'Industrial' },
                        { 'code': 'IBP', 'base_type': 'Commercial' },
                        { 'code': 'IOP', 'base_type': 'Commercial' },
                        { 'code': 'IT-MF', 'base_type': 'Residential' },
                        { 'code': 'IT-MX', 'base_type': 'Residential' },
                        { 'code': 'IT-NC', 'base_type': 'Residential' },
                        { 'code': 'IT-SF1', 'base_type': 'Residential' },
                        { 'code': 'IT-SF2', 'base_type': 'Residential' },
                        { 'code': 'MF1', 'base_type': 'Residential' },
                        { 'code': 'MF2', 'base_type': 'Residential' },
                        { 'code': 'MF3', 'base_type': 'Residential' },
                        { 'code': 'MFUniv', 'base_type': 'Residential' },
                        { 'code': 'MHP', 'base_type': 'Residential' },
                        { 'code': 'SF1', 'base_type': 'Residential' },
                        { 'code': 'SF2', 'base_type': 'Residential' }
                    ]
                },
                'key': 'code'
            }
        }
    ],
    "hconcat": [
        {
            "selection": {
                "zone_choice": {
                    "fields": ["base_type"],
                    "type": "single",
                    "bind": { "input": "select", "options": ["Residential", "Industrial", "Commercial"] }
                }
            },
            "mark": "geoshape",
            "projection": {
                "type": "albersUsa"
            },
            "encoding": {
                "color": { "field": "base_type", "type": "nominal" }
            },
            "width": 600, "height": 400,
            "autosize": {
                "type": "fit",
                "contains": "padding"
            }
        },
        {
            "mark": "bar",
            "transform": [
                { "filter": { "selection": "zone_choice" } }
            ],
            "encoding": {
                "y": {
                    "field": "properties.zoning_code",
                    "type": "nominal"
                },
                "x": {
                    "field": "properties.SHAPESTArea",
                    "aggregate": "sum",
                    "type": "quantitative"
                }
            }
        }
    ],
};

var embedded = vegaEmbed('#vis', yourVlSpec);
});