angular.module('beats', ['ionic', 'app'])

.run(function($ionicPlatform, $state, localStorageService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    var token = localStorageService.get('beats-token');
    if(!token) {
      $state.go('app.login');
    } else {
      $state.go('app.feed');
    }
  });
});