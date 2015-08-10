var Firebase = require('firebase');

module.exports = {
  getRefByPath: function(path){
    return new Firebase('https://blistering-inferno-2653.firebaseio.com/' + path);
  }
};