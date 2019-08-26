angular.module('myApp')
    .controller('getSongsCtrl', function($scope, $http) {
        $http({
            url: 'http://192.168.95.173:8089/song/getall',
            method: 'GET'
        }).then(function successCallback(response) {
            $scope.songs = response.data;
        }, function errorCallback(error) {
            console.log(ErrorEvent);
        });
        $scope.selected = [];
        $scope.toggleLimitOptions = function() {
            $scope.limitOptions = $scope.limitOptions ? undefined : [10, 20, 30];
        };

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
    });