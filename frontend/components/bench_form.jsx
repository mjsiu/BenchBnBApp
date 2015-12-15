var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BenchForm = React.createClass ({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return ({
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      description: ''
    })
  },

  createBench: function (event) {
    event.preventDefault();
    var bench = {};
    Object.keys(this.state).forEach(function (key) {
      { bench[key] = this.state[key]; }
    }.bind(this));

    ApiUtil.createBench(bench);
  },

  render: function () {
    return (
      <form className="new-bench" onSubmit={this.createBench}>
        Lat: <input
                type="text"
                valueLink={this.linkState("lat")}
             />
      <br/>
        Lng: <input
                type="text"
                valueLink={this.linkState("lng")}
             />
      <br/>
        Description: <input
                        type="text"
                        valueLink={this.linkState("description")}
                      />
      <br/>
        <button>Create Bench</button>
      </form>
    );
  }

});

module.exports = BenchForm;
