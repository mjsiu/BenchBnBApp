var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../store/bench.js');

var Index = React.createClass ({
  getInitialState: function() {
    return {
    benches: BenchStore.all()
    }
  },

  render: function () {
    return (
      <div>
        <h1> Hello </h1>
      </div>
    );
  }
});



module.exports = Index;
