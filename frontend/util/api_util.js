ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: "api/benches",
      success: function (benches) {
        ApiActions.recieveAll(benches);
      }
    })
  }
}

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
