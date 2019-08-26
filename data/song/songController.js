angular.module('myApp')
    .controller('getSongsCtrl', function ($scope, $http) {
        $http({
            url: 'http://192.168.95.173:8089/song/getall',
            method: 'GET'
        }).then(function successCallback(response) {
            $scope.songs = response.data;
        }, function errorCallback(error) {
            console.log(ErrorEvent);
        });
        $scope.selected = [];
        $scope.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
          };

        $scope.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: true,
            pageSelect: true
        };
        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };
    });