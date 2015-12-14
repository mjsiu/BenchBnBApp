var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass ({

  render: function () {
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
