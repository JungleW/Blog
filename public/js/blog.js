var app = angular.module('blogApp', []);
app.controller('blogController', function($scope, $http) {
    $scope.$on("articleChange", function (event, msg) {
          $scope.$broadcast("updateArticle", msg);
      });
});

