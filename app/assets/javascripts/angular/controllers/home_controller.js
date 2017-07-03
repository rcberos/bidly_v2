angular.module('Bidly.controllers')
  .controller('LoginController', ["$scope", "$state", "$http", "$window", "$location",  function($scope, $state, $http, $window, $location) {


    $scope.passcode = false
    $scope.fb = true


   $scope.submitLogin = function() {
     console.log($scope.user.email)
     console.log($scope.user.password)

     var data = {
          Username: $scope.user.email,
          Password: $scope.user.password,
          Action: 'login'
      }
      var url = 'http://bidly.southeastasia.cloudapp.azure.com/api/login';
      var config = {withCredentials:false};
      $http.post(url, data, config).then(
          function(resp){
              console.log(resp.data);
              if(resp.data.isLoggedIn){
                  $window.alert('Logged IN Success with Token: '+resp.data.Token);

                  $location.path('/blaster');
                  // $scope.items = resp.data.cart.items;
                  // if(!$scope.$$phase) {
                  //     $scope.$apply();
                  // }
              }
              else{
                  $window.alert('Wrong Email or Password');
              }
          })



     data = {
       "action": 'code',
       "code": $scope.user.password
     }

    };








}]);
