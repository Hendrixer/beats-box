angular.module('app.feed', [])

.controller('FeedController', function ($state, $scope) {
  $scope.things = ["90's", "80's", "new"];
  $scope.name = 'Discover';
})
.config(function ($stateProvider) {
  $stateProvider
    .state('app.feed', {
      url: '/feed',
      views: {
        'menuContent': {
          templateUrl: 'app/feed/feed.tpl.html',
          controller: 'FeedController'
        }
      }
    })
})