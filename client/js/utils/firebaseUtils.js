var Firebase = require('firebase');
var ToySectionActionCreator = require('../actions/ToySectionActionCreator');

module.exports = firebaseUtil = {
  getRefByPath: function(path){
    return new Firebase('https://blistering-inferno-2653.firebaseio.com/' + path);
  },
  registerPath: function(path){
    this.getRefByPath(path).on('value', function(data){
      setTimeout(function(){
        ToySectionActionCreator.refreshText(path, data.val());
      },0);
    });
  },
  set: function(path,data){
    this.getRefByPath(path).set(data);
  }
};

