var Bidly = angular.module('Bidly', [
  'ui.router',
  'templates',
  'ngDialog',
  'ui.bootstrap',
  'Devise',
  'facebook',
  'ngCookies',
  'Bidly.services',
  'Bidly.directives',
  'Bidly.controllers',
]);


Bidly.config(['FacebookProvider', function(FacebookProvider) {
     // Set your appId through the setAppId method or
     // use the shortcut in the initialize method directly.
     FacebookProvider.init('1567078173606071');
  }])
