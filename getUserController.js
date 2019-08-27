(function(){
    angular.module('myApp')
    .controller('getUsersCtrl', function ($scope, $http) {
        $http({
            url: 'http://127.0.0.1:8089/user/getall',
            method: 'GET'
        }).then(function successCallback(response) {
            $scope.users = response.data;
            console.log($scope.users)
        }, function errorCallback(error) {
            console.log(ErrorEvent);
        });
    })
    .controller('getSongsCtrl',function($scope, $http){
        $http({
            url: 'http://127.0.0.1:8089/song/getall',
            method: 'GET'
        }).then(function successCallback(response) {
            $scope.songs = response.data;
        }, function errorCallback(error) {
            console.log(ErrorEvent);
        });
    });
})();
