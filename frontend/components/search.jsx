var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./map.jsx');
var Index = require('./index.jsx');
var History = require('react').History;


var Search = React.createClass ({
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
