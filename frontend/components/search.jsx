var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./map.jsx');
var Index = require('./index.jsx');


var Search = React.createClass ({
  getInitialState: function() {
    return {
    }
  },

  render: function () {
    return (
      <div>
        <Map/>
        <Index/>
      </div>
    );
  }

});

module.exports = Search;
