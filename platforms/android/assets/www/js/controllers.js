angular.module('starter.controllers', ['LocalStorageModule'])

.controller('AppCtrl', function($scope, Beats, $window, $document, localStorageService, $state) {
  var url = Beats.authorize + '?response_type=token&' + 'redirect_uri=' + Beats.callback + '&client_id=' + Beats.key
  var loginWindow;
  $scope.login = function () {
     loginWindow = $window.open(url, '_blank', 'location=no,toolbar=no');
     loginWindow.addEventListener('loadstart', function(evt) {
      $scope.show = evt.url;
      var parser = $window.document.createElement('a');
      parser.href = evt.url;
      var params = parser.search.split('&');

      angular.forEach(params, function (param) {
        if(param.indexOf('access_token') > -1) {
          var token = param.substring(13);
          $window.alert('that token though! : ' +token);
          localStorageService.set('token', token);
          loginWindow.close();
          $state.transitionTo('app');
        }
      })

     });

     $scope.showToken = function () {
        $scope.token = localStorageService.get('token');
     };
  };


})


.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
