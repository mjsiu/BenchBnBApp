var React = require('react');
var ReactDOM = require('react-dom');
var Bench = require('./store/bench.js');
var ApiUtils = require('./util/api_util.js');
var Actions = require('./actions/api_actions.js');
var Index = require('./components/index.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Index/>, document.getElementById('root')
  );
});
