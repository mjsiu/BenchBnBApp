var ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: "api/benches",
      success: function (benches) {
        ApiActions.receiveAll(benches);
      }
    })
  }
}

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
