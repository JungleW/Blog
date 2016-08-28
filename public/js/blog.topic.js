var app = angular.module('blogTopicApp', []);
app.controller('blogTopicController', function($scope, $http) {
    $scope.$on("articleChange", function (event, msg) {
          $scope.$broadcast("updateArticle", msg);
      });
});

