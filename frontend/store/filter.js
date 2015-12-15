var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FilterStore = new Store(AppDispatcher);
var FilterConstants = require('../constants/filter_constants');

var _filters = {};

FilterStore.all = function () {
  
};

var resetFilters = function(filters){
  _filters = filters;
}

FilterStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case FilterConstants.FILTERS_RECEIVED:
    var result = resetFilters(payload.filters);
    FilterStore.__emitChange();
    break;
  case FilterConstants.FILTERS_RECEIVED:
       resetFilters(payload.filters);
       break;
  }
  FilterStore.__emitChange();
}

module.exports = FilterStore;
