var React = require('react');
var ActionTypes = require('../constants/ActionTypes');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var fb = require('../utils/firebaseUtils.js').getRefByPath;

var CHANGE_EVENT = 'change';

var _data = {};
var ToySectionStore = assign({}, EventEmitter.prototype, {

  // init handles event registry, so would probably be in
  // either the ActionCreator or ... something.
  init: function(path){
    console.log('ToySectionStore init', path);
    fb(path).on('value', function(snapshot){
      console.log('fb', path, snapshot.val());
      _data[path] = snapshot.val();
      this.emit(CHANGE_EVENT);
    }, this);
  },
  get: function(path){ return _data[path] },
  set: function(path, data){
    console.log('set', path, _data[path], '->', data);
    fb(path).set(data);
  }
});

module.exports = ToySectionStore;
