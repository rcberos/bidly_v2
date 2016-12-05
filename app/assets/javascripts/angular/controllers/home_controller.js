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

    });

    //  result = {
    //    page_id: '1779236905645324',
    //    type: 'honeypot_v0',
    //    status: 'success'
    //  }
     //
    //  if(result.type == 'honeypot_v0') {
    //    $window.open('https://cryptic-ridge-33738.herokuapp.com/login', '_self')
    //  }
   }








}]);
