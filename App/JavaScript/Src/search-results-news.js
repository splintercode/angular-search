(function() {
    'use strict';

    var appDirectives = angular.module('app.directives');

    appDirectives.directive('searchResultsNews', function() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                results: '=ngModel'
            },
            template: [
            '<ul class="search-list col-12-contain">',
                '<li ng-repeat="result in results" class="search-list__item">',
                    '<a href="{{result.Url}}" target="_blank" class="search-list__link">',
                        '<div class="search-list__title">{{result.Title}}</div>',
                        '<div class="search-list__source">{{result.Source}} - {{result.Date | date}}</div>',
                        '<p>{{result.Description}}</p>',
                    '</a>',
                '</li>',
            '</ul>'
            ].join('')
        };
    });
}());
