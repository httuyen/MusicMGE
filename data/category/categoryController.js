angular.module('myApp')
    .controller('getCategoriesCtrl', function($scope, $http, $timeout, $mdDialog) {
        'use strict';
        $http({
            url: 'http://192.168.95.173:8089/category/getall',
            method: 'GET'
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        }, function errorCallback(error) {
            console.log(ErrorEvent);
        });
    });