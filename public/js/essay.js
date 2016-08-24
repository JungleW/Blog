var app = angular.module('essayApp', []);
app.controller('essayController', function($scope, $http) {
    $scope.$on("articleChange", function (event, msg) {
          $scope.$broadcast("updateArticle", msg);
      });
});