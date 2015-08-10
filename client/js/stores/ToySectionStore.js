var React = require('react');
var ActionTypes = require('../constants/ActionTypes');
var ToyDispatcher = require('../dispatcher/ToyDispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var db = require('../utils/firebaseUtils.js').getRefByPath;

var CHANGE_EVENT = 'change';

var _data = {};
var ToySectionStore = assign({}, EventEmitter.prototype, {
  get: function(path){ return _data[path] },
  set: function(path, data){
    console.log('set', path, _data[path], '->', data);
    db(path).set(data);
  }
});

ToySectionStore.dispatcherToken = ToyDispatcher.register(function(action){
  switch(action.type){
    case ActionTypes.CREATE_TEXT:
      ToySectionStore.set(action.path, action.text);
      break;
    case ActionTypes.REFRESH_TEXT:
      console.log('ToySectionStore REFRESH_TEXT', action);
      break;
    case ActionTypes.REGISTER_PATH:
      console.log('register', action.path, this);
      db(action.path).on('value', function(data){
        _data[action.path] = data.val();
        console.log(_data);
        ToySectionStore.emit(CHANGE_EVENT);
      });
      break;
  }
});



module.exports = ToySectionStore;
