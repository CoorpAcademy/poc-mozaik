require('babel/register')({
    only: /node_modules\/mozaik[^/]*\/src/
});

var mozaik = new (require('mozaik'))(require('./config'));




mozaik.startServer();
