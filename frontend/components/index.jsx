var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../store/bench.js');
var ApiUtil = require('../util/api_util.js');

var Index = React.createClass ({
  getInitialState: function() {
    return {
    benches: BenchStore.all()
    }
  },

  onChange: function () {
    this.setState({benches: BenchStore.all() })
  },

  componentDidMount: function() {
    this.benchListener = BenchStore.addListener(this.onChange);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function () {
    this.benchListener.remove();
  },

  render: function () {
    var benches = this.state.benches.map(function(bench, idx) {
      return <li key={idx}>{bench.description}</li>
    });

    return (
      <ul>
        {benches}
      </ul>
    );
  }

});



module.exports = Index;
