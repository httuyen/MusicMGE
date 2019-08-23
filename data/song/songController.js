angular.module('myApp')
.controller('getSongsCtrl',function($scope, $http){
    $http({
        url: 'http://192.168.95.173:8089/song/getall',
        method: 'GET'
    }).then(function successCallback(response) {
        $scope.songs = response.data;
    }, function errorCallback(error) {
        console.log(ErrorEvent);
    });
});