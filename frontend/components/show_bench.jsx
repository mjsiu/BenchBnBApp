var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./map.jsx')

var ShowBench = React.createClass ({

  render: function () {
    return (
      <div>
        I'm a bench
        <Map/>
      </div>
    );
  }

});

module.exports = ShowBench;
