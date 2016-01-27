var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./js/components/app.jsx');
var parseCred = require('./js/parse-credentials.json');
// require('./css/main.css');

Parse.initialize(parseCred.applicationId, parseCred.javaScriptKey); 

ReactDOM.render(<App/>, document.getElementById('container'));
