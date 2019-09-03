angular.module('myApp')

.controller('getSongsCtrl', function($scope, $http, $timeout, $mdDialog, $q) {
    'use strict';
    $scope.loadComplete = false;
    $scope.items = [];
    $scope.logItem = function(item) {
        $scope.items.push(item);
        console.log(item.name, 'was selected');
    };
    $http({
        url: 'https://musicsmanager.herokuapp.com/song/getall',
        //url: 'http://192.168.95.173:8089/song/getall',
        // auth: {
        //     'user': 'adminuser',
        //     'pass': 'password'
        // },
        method: 'GET'
    }).then(function successCallback(response) {
        $scope.songs = response.data;
        $scope.loadComplete = true;
    }, function errorCallback(error) {
        console.log(ErrorEvent);
    });

    $scope.deleteItem = function() {
        console.log($scope.items[$scope.items.length - 1].id);
        $http({
                method: 'DELETE',
                url: 'https://musicsmanager.herokuapp.com/song/delete/' + $scope.items[$scope.items.length - 1].id,
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                }
            })
            .then(function(response) {
                console.log("Delete complete");
            }, function(rejection) {
                console.log("Delete fail");
            });
    }
    $scope.selected = [];
    $scope.limitOptions = [10, 20, 30];
    // $scope.toggleLimitOptions = function() {
    //     $scope.limitOptions = $scope.limitOptions ? undefined : [10, 20, 30];
    // };

    $scope.options = {
        rowSelection: true,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: true,
        limitSelect: true,
        pageSelect: true
    };
    $scope.query = {
        order: 'name',
        limit: 10,
        page: 1
    };

    $scope.OpenTab = function(song) {
        window.open(song.link);
    }
    $scope.loadStuff = function() {
        $scope.promise = $timeout(function() {
            // loading
        }, 2000);
    }
    $scope.addSong = function(ev) {
        $mdDialog.show({
            clickOutsideToClose: true,
            controller: 'getCategoriesCtrl',
            focusOnOpen: false,
            targetEvent: event,
            templateUrl: 'templates/add-song.html',
        }).then($scope.getSongs);
    };
    $scope.getSongs = function() {
        $scope.promise = $nutrition.desserts.get($scope.query, success).$promise;
    };

    var deferred = $q.defer();
    $scope.promise = deferred.promise;
    deferred.resolve();



});