(function() {
    'use strict';

    var appDirectives = angular.module('app.directives');

    appDirectives.directive('searchResultsImages', function() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                results: '=ngModel'
            },
            template: [
                '<ul class="picture-list">',
                    '<li ng-repeat="result in results" class="picture-list__item">',
                        '{{result.Description}}',
                        '<a href="{{result.MediaUrl}}" target="_blank" alt="{{result.Title}}">',
                            '<div style="background-image: url(\'{{result.Thumbnail.MediaUrl}}\')" class="picture-list__img"></div>',
                        '</a>',
                    '</li>',
                '</ul>'
            ].join('')
        };
    });
}());
