app.controller('articleCtrl', ["$scope", "$http" , function($scope, $http) {
    $scope.$on("updateArticle", function(event, msg) {
        $scope.article = msg;
    });
}]);
app.filter('to_trusted', ["$sce", function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);  
        }
    }]
);