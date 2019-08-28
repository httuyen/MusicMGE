angular.module('myApp')
    .controller('logOutCtrl', function($scope, $window) {
        $scope.login = function() {
            $window.location.href = 'templates/login.html';
        }
    });