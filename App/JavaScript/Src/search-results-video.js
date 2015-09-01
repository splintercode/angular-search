(function() {
    'use strict';

    var appDirectives = angular.module('app.directives');

    appDirectives.directive('searchResultsVideo', function() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                results: '=ngModel'
            },
            template: [
            '<ul class="video-list">',
                '<li ng-repeat="result in results" class="video-list__item">',
                    '<a href="{{result.MediaUrl}}" target="_blank" alt="{{result.Title}}" class="video-list__link">',
                        '<div style="background-image: url(\'{{result.Thumbnail.MediaUrl}}\')" class="video-list__img"></div>',
                        '{{result.Title}}<br />',
                        '<div class="video-list__duration">{{result.RunTime | durationTime}}</div>',
                    '</a>',
                '</li>',
            '</ul>'
            ].join('')
        };
    });
}());
