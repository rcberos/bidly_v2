Bidly.controller('CheckoutController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state', '$stateParams', '$http', '$window',
  function($scope, $location, DemoService, ngDialog, $state, $stateParams, $http, $window) {

    console.log('checkout');

    function showCheckout(){
        var data = {
            // UserID: 1,
            Token: 'xeag9vm6t3sd2z05il404elnluc051fu4t33ecnhri2ut0k244etp0ti9o5urb254n93733yfeohj22txpuqjxvp2ix2dtf6tltx',
            // Token: '222',
            // Token: '2xazgyyxi2b4bwgcap49uoyhucqnqmclnamxj265l4rdm0u3pu1wyxb17wll47t0n5sy96h7uh0caqroe0izvn04gn3n7yacqytz',
            Action: 'show'
        }
        var url = 'http://bidly.southeastasia.cloudapp.azure.com/api/checkout';
        var config = {withCredentials:false};
        $http.post(url, data, config).then(
            function(resp){
                console.log(resp.data);
                if(resp.data.orders.length>0){
                    $scope.items = resp.data.orders;
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                }
                else{
                    $scope.items = [];
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                    $window.alert('Checkout is Empty');
                }
            })
    }

        
    showCheckout();
    if(!$scope.$$phase) {
        $scope.$apply();
    }

}])
