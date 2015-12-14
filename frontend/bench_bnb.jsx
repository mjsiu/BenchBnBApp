var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search.jsx');
var BenchForm = require('./components/bench_form.jsx');
var App = require('./components/app.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
        <Route path="benches/new" component={BenchForm}/>
    </Route>

);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root')
  );
});
