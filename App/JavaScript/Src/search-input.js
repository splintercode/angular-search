(function() {
    'use strict';

    var appDirectives = angular.module('app.directives');

    appDirectives.directive('searchInput', ['searchService', function(searchService) {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                results: '=ngModel',
                query: '=value',
            },
            template: [
                '<form name="searchForm" novalidate ng-submit="search(searchForm.$valid, query)">',
                    '<input type="search" ng-model="query" placeholder="Search" class="search-form__input" required />',
                    '<button type="submit" class="btn search-form__btn">',
                        '<span ng-show="!isLoading">Search</span><i ng-show="isLoading" class="animate-spin icon-spin1"></i>',
                    '</button>',
                '</form>'
            ].join(''),
            link: function(scope) {
                scope.isLoading = false;

                scope.search = function(valid, query) {
                    if (valid) {
                        scope.isLoading = true;
                        searchService.search(query).then(function(results) {
                            scope.results = results.data.d.results[0];
                            scope.isLoading = false;
                        });
                    }
                };
            }
        };
    }]);
}());
