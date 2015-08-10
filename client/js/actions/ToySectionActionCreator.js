var React = require('react');
var ActionTypes = require('../constants/ActionTypes');
var ToyDispatcher = require('../dispatcher/ToyDispatcher');

var db = require('../utils/firebaseUtils.js').getRefByPath;

// This file is not yet integrated into the app.
module.exports = {
  createText: function(path, text){
    ToyDispatcher.dispatch({
      type: ActionTypes.CREATE_TEXT,
      text: text,
      path: path
    });
    db(path).set(text);
  },
  refreshText: function(path){
    ToyDispatcher.dispatch({
      type: ActionTypes.REFRESH_TEXT,
      path: path
    });
  }
};