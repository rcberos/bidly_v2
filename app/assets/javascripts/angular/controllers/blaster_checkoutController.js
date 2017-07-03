Bidly.controller('CheckoutController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state', '$stateParams', '$http', '$window',
  function($scope, $location, DemoService, ngDialog, $state, $stateParams, $http, $window) {

    console.log('checkout');

    function showCheckout(){
        var data = {
            UserID: 1,
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
