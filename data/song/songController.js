angular.module('myApp')
    .controller('getSongsCtrl', function($scope, $http, $timeout, $mdDialog) {
        'use strict';
        $scope.loadComplete = false;
        $http({
            url: 'http://192.168.95.173:8089/song/getall',
            method: 'GET'
        }).then(function successCallback(response) {
            $scope.songs = response.data;
            $scope.loadComplete = true;
        }, function errorCallback(error) {
            console.log(ErrorEvent);
        });
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
            limit: 20,
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
                controller: 'getSongsCtrl',
                controllerAs: 'ctrl',
                focusOnOpen: false,
                targetEvent: event,
                templateUrl: 'templates/add-song.html',
            }).then($scope.getDesserts);
        };
    });