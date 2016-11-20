Bidly.controller('ItemController', ['$scope', '$location', 'DemoService', 'ngDialog',
  function($scope, $location, DemoService, ngDialog) {


    $scope.cards = DemoService.class();


}])
