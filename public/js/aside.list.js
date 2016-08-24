app.controller('asideListCtrl', function($scope, $http) {
    $scope.searchKey = "";
    $scope.search = function() {
        $scope.pageInfo = {
            currentPage: 0,
            perPage: 10,
            searchKey: "",
            url: "/blog/ajax/titles",
            more: false,
            state: ""
        }
        $scope.pageInfo.searchkey = ($scope.searchKey==undefined? "": $scope.searchKey);
        var searchUrl = $scope.pageInfo.url + "?searchKey=" + $scope.pageInfo.searchkey + "&page=" + $scope.pageInfo.currentPage + "&per_page=" + $scope.pageInfo.perPage;
        $http.get(searchUrl).success(function (response) {
            if(response.titles.length != 0){
                $scope.pageInfo.more = true;
            }
            $scope.titles = response.titles;
            $scope.pageInfo.currentPage += 1;
        });
    };
    $scope.next_page = function() {
        $scope.pageInfo.state = "加载中...";
        var searchUrl = $scope.pageInfo.url + "?searchKey=" + $scope.pageInfo.searchkey + "&page=" + $scope.pageInfo.currentPage + "&per_page=" + $scope.pageInfo.perPage;
        $http.get(searchUrl).success(function (response) {
            if(response.titles.length == 0){
                $scope.pageInfo.more = false;
            }
            $scope.pageInfo.state = "";
            
            for (var i in response.titles) { 
                $scope.titles.push(response.titles[i]); 
            } 
            $scope.pageInfo.currentPage += 1;
        });   
    };
    $scope.clear_search = function(){
        $scope.searchKey = "";
    };
    $scope.get_article_by_id = function(articleId) {
         $http.get("/blog/ajax/article?articleId=" + articleId).success(function(response) {
             $scope.$emit("articleChange", response);
             $scope.curretnId = articleId;
             $scope.hide_aside_menu();
         });
    };
    $scope.get_article_by_id();
    $scope.search();
    $scope.show_aside_menu = function(){
        $scope.show_titles = true; 
    };
    $scope.hide_aside_menu = function(){
        $scope.show_titles = false; 
    }
});