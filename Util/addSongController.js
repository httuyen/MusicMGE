angular.module('myApp')
    .controller('addItemController', ['$mdDialog', '$scope'], function($mdDialog, $scope) {
        'use strict';
        this.cancel = $mdDialog.cancel;
    });