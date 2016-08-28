var app = angular.module('essayApp', []);
app.controller('essayController', function($scope, $http) {
    $scope.getArticleById = function(articleId) {
         $http.get("/blog/ajax/article?articleId=" + articleId).success(function(response) {$scope.article = response;});
    }
    $scope.getArticleById(1);
    
    $scope.pageManager = function(){
        this.url = "/blog/ajax/titles",
        this.next_page = 1,
        this.per_page = 9,
        this.search = "",
        this.more = false,
        this.search = function(searchKey) {
            more = false;
            next_page = 1;
            searchkey = searchKey==undefined? "": searchKey;
            var searchUrl = url + "?search=" + searchkey + "&amount=" + per_page;
            $http.get(searchUrl).success(function (response) {
                more = true;
                $scope.titles = response;
                next_page++;
            });
        },
        this.nextPage = function() {
            more = false;
            if(more){
            var searchUrl = url + "?search=" + searchkey + "&amount=" +(next_page*per_page);
                $http.get(searchUrl).success(function (response) {
                    more = true;
                    var length = response.length;
                    var html = "";
                    for(var i= 0; i<length; i++) {
                        html += '<a class="list-group-item title-item" ng-repeat="title in titles" href="javascript: void(0)" ng-click="getArticleById(title.articleId)" ng-bind="title.name"></a>';
                    }
                    
                    next_page++;
                });
            }       
        }
        return {
            search: search,
            nextPage: nextPage
        }
    }();
    $scope.pageManager.search("");
    $scope.pageManager.nextPage();
});