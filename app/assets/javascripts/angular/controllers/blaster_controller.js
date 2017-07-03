Bidly.controller('BlasterController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state', '$stateParams', '$http', '$window',
  function($scope, $location, DemoService, ngDialog, $state, $stateParams, $http, $window) {

    console.log('blaster');

    if($stateParams.qwe == 'all'){
        console.log('redirect');
        $location.path('/blaster'); 
    }
    else{
        if($stateParams.qwe == null ){
            $scope.type = 'all';
            $http.get('http://bidly.southeastasia.cloudapp.azure.com/api/getItems?q=all', {withCredentials:false}).then(
                function(resp){
                    console.log(resp.data);
                    $scope.items = resp.data.items;
                });
        }
        else{
            $scope.type = $stateParams.qwe;
            $http.get('http://bidly.southeastasia.cloudapp.azure.com/api/getItems?q='+$stateParams.qwe, {withCredentials:false}).then(
                function(resp){
                    console.log(resp.data);
                    $scope.items = resp.data.items;
                });
        }
    }


    $scope.addToCart = function(ItemID){
        console.log(ItemID);
        var data = {
            UserID: 1,
            ItemID: ItemID,
            Quantity: 1,
            Action: 'add'
        }
        var url = 'http://bidly.southeastasia.cloudapp.azure.com/api/myCart';
        var config = {withCredentials:false};
        $http.post(url, data, config).then(
            function(resp){
                console.log(resp.data);
                $window.alert('item added to cart');
            })
    }
  
        


    if(!$scope.$$phase) {
        $scope.$apply();
    }


}])
