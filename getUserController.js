var app = angular.module('getUsers', ['ngMaterial', 'ngMessages'])
.controller('getUsersCtrl', function ($scope, $http) {
    $http({
        url: 'http://192.168.95.173:8089/user/getall',
        method: 'GET'
    }).then(function successCallback(response) {
        $scope.users = response.data;
        console.log($scope.users)
    }, function errorCallback(error) {
        console.log(ErrorEvent);
    });
});
