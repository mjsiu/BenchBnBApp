var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

var ApiActions = {
  receiveAll: function(filters){
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTERS_RECEIVED,
      filters: filters
    });
  },

  receiveSingleFilter: function(filter){
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTER_RECEIVED,
      filters: filter
    });
  }

}

module.exports = ApiActions;
