var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: "api/benches",
      success: function (benches) {
        ApiActions.receiveAll(benches);
      }
    })
  },

  createBench: function(bench){
    $.ajax({
      url: "api/benches",
      method: "POST",
      data: { bench: bench }
    })
  }

}

module.exports = ApiUtil;
