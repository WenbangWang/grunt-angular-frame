define (
    [
        'angular',
        'angularRoute'
    ],
    function (angular) {
        'use strict';

        return angular.module (
            'ui.personalBusiness',
            [
                'ngRoute'
            ]).config (['$routeProvider',function ($routeProvider) {
            $routeProvider
                .when ('/', { templateUrl: '', controller: ''});
        }]);
    });
