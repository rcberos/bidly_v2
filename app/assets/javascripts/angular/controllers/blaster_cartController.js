Bidly.controller('ShowCartController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state', '$stateParams', '$http', '$window',
  function($scope, $location, DemoService, ngDialog, $state, $stateParams, $http, $window) {

    console.log('show cart');

    function showCart(){
        var data = {
            UserID: 1,
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
