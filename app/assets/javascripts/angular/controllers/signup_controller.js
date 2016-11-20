angular.module('Bidly.controllers')
  .controller('SignupController', ["$scope", "$state", "Auth", "AuthService", function($scope, $state, Auth, AuthService) {

    $scope.user = {}
    $scope.signupForm = function() {
        var config = {
            headers: {
                'X-HTTP-Method-Override': 'POST'
            }
        };



        Auth.register($scope.signup, config).then(function(response) {

            var user = response
            user.auth_token = response.data.auth_token;
            AuthService.setCurrentUser(user);
            $state.go('welcome', {patient_id: user.id});
        }, function(error) {
            console.log(error)
        });
    }
  }]);
