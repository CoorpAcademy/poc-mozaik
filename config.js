// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: 'localhost',
    port: process.env.PORT || 5000,

    theme: 'light-grey',

    // clients configs
    api: {
    },

    // define duration beetwen each dashboard rotation (ms)
    rotationDuration: 4000,

    dashboards: [
        {
            columns: 4, rows: 3,
            widgets: [
                // Insert widgets for your first dashboard here
            ]
        }
    ]
};

module.exports = config;