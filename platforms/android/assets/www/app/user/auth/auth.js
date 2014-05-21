angular.module('app.user.auth', ['LocalStorageModule'])

.controller('LoginController', function ($scope, $state, LoginService) {
  $scope.login = LoginService.login;
  $scope.logout = LoginService.logout;
})

.config(function ($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'app/user/auth/login.tpl.html',
          controller: 'LoginController'
        }
      }
    })
})

.factory('LoginService', function (localStorageService, $window, Beats, $state) {
  var url = Beats.authorize + '?response_type=token&' + 'redirect_uri=' + Beats.callback + '&client_id=' + Beats.key;
  var loginWindow;
  var parser;
  var params;
  var token;
  return {
    login: function () {
      loginWindow = $window.open(url, '_blank', 'location=no,toolbar=no');
      loginWindow.addEventListener('loadstart', function (evt) {
        parser = $window.document.createElement('a');
        parser.href = evt.url;
        params = parser.search.split('&');

        angular.forEach(params, function (param) {
          if(param.indexOf('access_token') > -1) {
            token = param.substring(13);
            if(token) {
              $window.alert(token);
              loginWindow.close();
              localStorageService.set('beats-token', token);
              $state.transitionTo('app.feed');
            } else {
            }
          }
        });
      });

    },

    logout: function () {
      return LocalStorageService.clear();
    }
  };
})