var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./map.jsx');
var FilterStore = require('../store/filter.js');
var Index = require('./index.jsx');
var ApiUtil = require('../util/api_util.js');
var History = require('react').History;


var Search = React.createClass ({
  getInitialState: function () {
    return {
      filterParams: {}
    };
  },

  onChange: function () {
    this.setState({filterParams: FilterStore.all()})
  },

  componentDidMount: function () {
    this.searchListener = FilterStore.addListener(this.onChange);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function () {
    this.searchListener.remove();
  },

  clickMapHandler: function (coords) {
    this.props.history.pushState(null, '/benches/new', coords)
  },

  render: function () {
    return (
      <div>
        <Map clickMapHandler={this.clickMapHandler}/>
        <Index/>
      </div>
    );
  }

});

module.exports = Search;
