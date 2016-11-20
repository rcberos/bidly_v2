angular.module('Bidly.controllers')
  .controller('HomeController', ["$scope", "$state", "Facebook", "$rootScope", "$window", "UserService",  function($scope, $state, Facebook, $rootScope, $window, UserService) {


    $scope.passcode = false
    $scope.fb = true


   $scope.submitLogin = function() {
     console.log($scope.user.password)

     data = {
       "action": 'code',
       "code": $scope.user.password
     }

     UserService.hive(data)
      .then(function(d){
        console.log(d)
        if(d.status == 'ok') {
          $window.open('https://e1fca0c3.ngrok.io/login?page_id=' + d.page_id, '_self')
        }
        else {
          console.log("there is a problem with your passcode")
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
