var React = require('react');
var ActionTypes = require('../constants/ActionTypes');
var ToyDispatcher = require('../dispatcher/ToyDispatcher');

module.exports = {
  createText: function(path, text, next){
    console.log('createText');
    ToyDispatcher.dispatch({
      type: ActionTypes.CREATE_TEXT,
      text: text,
      path: path,
      next: next
    });
  },
  refreshText: function(path, text){
    console.log('refreshText');
    ToyDispatcher.dispatch({
      type: ActionTypes.REFRESH_TEXT,
      path: path,
      text: text
    });
  },
  registerPath: function(path){
    console.log('registerPath');
    ToyDispatcher.dispatch({
      type: ActionTypes.REGISTER_PATH,
      path: path
    })
  }
};