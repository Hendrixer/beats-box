angular.module('app.beats', [])

.service('BeatsApi', function (Beats, $http, $q) {
  var access_token;
  this.init = function (token) {
    if(angular.isString(token) {
      access_token = token;
    });
  }
});