(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.TooMuchChecker = function () {
    var lunchChoices = $scope.lunchInput;

    if (lunchChoices === undefined || lunchChoices ==""){
      $scope.lunchMsg = function () {
        return "Please enter data first";
      };
    } else{
      var array1 = lunchChoices.split(',');
      console.log('The lunch choices are:' + array1.length);

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
