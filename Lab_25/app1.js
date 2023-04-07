var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.langs = {
        name: 'Петро',
        surname: 'Петренко',
        age: '25'
    };
});