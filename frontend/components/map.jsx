var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../store/bench.js');
var ApiUtil = require('../util/api_util.js');

var Map = React.createClass ({
  getInitialState: function() {
    return {
    benches: BenchStore.all()
    }
  },

  onChange: function () {
    this.setState({benches: BenchStore.all() });
  },

  setMap: function () {
    var map = this.map;
    BenchStore.all().forEach(function(bench) {
      var myLatLng = {lat: bench.lat, lng: bench.lng};
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: bench.title
      });
      marker.setMap(map);
    });
  },

  componentDidMount: function(){
     var map = ReactDOM.findDOMNode(this.refs.map);
     var mapOptions = {
       center: {lat: 37.7758, lng: -122.435},
       zoom: 13
     };
     this.map = new google.maps.Map(map, mapOptions);
     this.mapListener = BenchStore.addListener(this.onChange);
     ApiUtil.fetchBenches();
   },

   componentWillUnmount: function () {
     this.mapListener.remove();
   },

  render: function () {
    this.setMap();
    return (
      <div className="map" ref="map">
      </div>
    );
  }

});

module.exports = Map;
