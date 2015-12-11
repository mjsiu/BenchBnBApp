var React = require('react');
var ReactDOM = require('react-dom');
var Bench = require('./store/bench.js');
var ApiUtils = require('./util/api_util.js');
var Actions = require('./actions/api_actions.js');
var Index = require('./components/index.jsx');
var Map = require('./components/map.jsx');
var Search = require('./components/Search.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Search/>, document.getElementById('root')
  );
});
