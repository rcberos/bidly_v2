Bidly.controller('ShowCartController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state', '$stateParams', '$http', '$window',
  function($scope, $location, DemoService, ngDialog, $state, $stateParams, $http, $window) {

    console.log('show cart');

    function showCart(){
        var data = {
            UserID: 1,
            Token: 'xeag9vm6t3sd2z05il404elnluc051fu4t33ecnhri2ut0k244etp0ti9o5urb254n93733yfeohj22txpuqjxvp2ix2dtf6tltx', // one month Token
            // Token: '222', // wrong Token
            // Token: '2xazgyyxi2b4bwgcap49uoyhucqnqmclnamxj265l4rdm0u3pu1wyxb17wll47t0n5sy96h7uh0caqroe0izvn04gn3n7yacqytz', // Expired Token
            Action: 'show'
        }
        var url = 'http://bidly.southeastasia.cloudapp.azure.com/api/myCart';
        var config = {withCredentials:false};
        $http.post(url, data, config).then(
            function(resp){
                console.log(resp.data);
                if(!resp.data.isCartEmpty){
                    console.log('wa');
                    $scope.items = resp.data.cart.items;
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                }
                else{
                    $scope.items = [];
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                    $window.alert('Cart is Empty');
                }
            })
    }

    $scope.removeFromCart = function(ItemID){
        var data = {
            UserID: 1,
            ItemID: ItemID,
            Token: 'xeag9vm6t3sd2z05il404elnluc051fu4t33ecnhri2ut0k244etp0ti9o5urb254n93733yfeohj22txpuqjxvp2ix2dtf6tltx',
            Action: 'remove'
        }
        var url = 'http://bidly.southeastasia.cloudapp.azure.com/api/myCart';
        var config = {withCredentials:false};
        $http.post(url, data, config).then(
            function(resp){
                console.log(resp.data);
                showCart();
            })
    }

    $scope.checkout = function(){
        var data = {
            UserID: 1,
            Token: 'xeag9vm6t3sd2z05il404elnluc051fu4t33ecnhri2ut0k244etp0ti9o5urb254n93733yfeohj22txpuqjxvp2ix2dtf6tltx',
            Action: 'checkout'
        }
        var url = 'http://bidly.southeastasia.cloudapp.azure.com/api/myCart';
        var config = {withCredentials:false};
        $http.post(url, data, config).then(
            function(resp){
                console.log(resp.data);
                $location.path('/checkout'); 
            })
    }

        
    showCart();
    if(!$scope.$$phase) {
        $scope.$apply();
    }

}])
