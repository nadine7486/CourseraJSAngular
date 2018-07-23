(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.TooMuchChecker = function () {
    $scope.customClr ="";
    var lunchChoices = $scope.lunchInput;

    if (lunchChoices === undefined || lunchChoices ==""){
      $scope.customClr ="red";
      $scope.lunchMsg = function () {
        return "Please enter data first";
      };
    } else{
      $scope.customClr ="green";
      var array1 = lunchChoices.split(',');

      $scope.lunchMsg = function () {
        if (array1.length <=3) {
          return "Enjoy!";
        }  else{
          return "Too much!"
        };
      };
    }

  };


}

})();
