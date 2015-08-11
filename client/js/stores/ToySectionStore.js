var React = require('react');
var assign = require('object-assign');
var db = require('../utils/firebaseUtils.js');
var ActionTypes = require('../constants/ActionTypes');
var ToyDispatcher = require('../dispatcher/ToyDispatcher');

var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _data = {};
var ToySectionStore = assign({}, EventEmitter.prototype, {
  get: function(path){ return _data[path] },
  set: function(path, data){
    db.set(path,data);
  },
  _set: function(path, data){
    _data[path] = data;
  }
});

ToySectionStore.dispatcherToken = ToyDispatcher.register(function(action){
  switch(action.type){
    case ActionTypes.CREATE_TEXT:
      ToySectionStore.set(action.path, action.text);
      break;
    case ActionTypes.REFRESH_TEXT:
      console.log('ToySectionStore REFRESH_TEXT', action);
      ToySectionStore._set(action.path, action.text);
      ToySectionStore.emit(CHANGE_EVENT);
      break;
  }
});



module.exports = ToySectionStore;
