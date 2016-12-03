Bidly.controller('ItemController', ['$scope', '$location', 'DemoService', 'ngDialog',
  function($scope, $location, DemoService, ngDialog) {

    $scope.selection = 'details';

    $scope.tab = function(selected) {
      $scope.selection = selected
    }

    $scope.cards = DemoService.class();
    $scope.item = {
      "templateUrl": 'shared/_itemMainCard.html'
    }

    $scope.suggestions = {
      "templateUrl": 'shared/_itemCard.html'
    }

}])
