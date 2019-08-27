angular.module('myApp')
    .controller('getCategoriesCtrl', function($scope, $http, $timeout, $mdDialog) {
        'use strict';
        $http({
            url: 'https://musicsmanager.herokuapp.com/category/getall',
            method: 'GET'
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        }, function errorCallback(error) {
            console.log(ErrorEvent);
        });
    });