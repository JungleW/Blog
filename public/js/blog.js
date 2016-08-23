var app = angular.module('blogApp', []);
app.controller('blogController', function($scope, $http) {
    $scope.$on("articleChange", function (event, msg) {
          $scope.$broadcast("updateArticle", msg);
      });
});
app.controller('asideListCtrl', function($scope, $http, $timeout) {
    $scope.searchKey = "";
    $scope.currentId = "";
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
    $scope.clearSearch = function(){
        $scope.searchKey = "";
    }
    $scope.getArticleById = function(articleId) {
         $http.get("/blog/ajax/article?articleId=" + articleId).success(function(response) {
             $scope.$emit("articleChange", response);
             $scope.curretnId = articleId;
             $timeout($scope.hideAsideMenu, 1000);
         });
    }
    $scope.getArticleById(1);
    $scope.pageManager.search("");
    
    $scope.showAsideMenu = function(){
        $scope.show_titles = true; 
    }
    $scope.hideAsideMenu = function(){
        $scope.show_titles = false; 
    }
});

app.controller('articleCtrl', function($scope, $http) {
    $scope.$on("updateArticle", function(event, msg) {
        $scope.article = msg;
    });
});