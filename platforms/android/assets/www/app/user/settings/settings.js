angular.module('app.user.settings', [])

.config(function ($stateProvider) {
  $stateProvider
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'app/user/settings/settings.tpl.html',
          controller: 'UserSettingsController'
        }
      }
    })
})
.controller('UserSettingsController', function ($scope) {
  $scope.name = 'Settings';
});