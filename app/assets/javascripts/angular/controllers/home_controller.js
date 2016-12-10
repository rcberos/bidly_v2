angular.module('Bidly.controllers')
  .controller('LoginController', ["$scope", "$state",  function($scope, $state) {


    $scope.passcode = false
    $scope.fb = true


   $scope.submitLogin = function() {
     console.log($scope.user.password)

     data = {
       "action": 'code',
       "code": $scope.user.password
     }

    };








}]);
