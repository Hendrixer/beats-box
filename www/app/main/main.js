angular.module('app', ['app.user','app.feed','LocalStorageModule'])

.constant('Beats', {
  authorize: 'https://partner.api.beatsmusic.com/v1/oauth2/authorize',
  key: 'zrgzzth5aqncqjem2gj56akh',
  secret: '3sKxWrUEy4mZhWzb8m56EWZp',
  callback: 'http%3A%2F%2Flocalhost'
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/feed');
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "app/main/menu.tpl.html",
      controller: 'AppCtrl'
    })
})
.controller('AppCtrl', function ($scope, $state, $ionicModal) {

});




