(function() {
    'use strict';

    var appFilters = angular.module('app.filters', []);

    appFilters.filter('durationTime', function() {
        return function(millseconds) {
            var seconds = Math.floor(millseconds / 1000);
            var days = Math.floor(seconds / 86400);
            var hours = Math.floor((seconds % 86400) / 3600);
            var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
            var time = '';

            if (days > 0) {
                time += (days > 1) ? (days + ' days ') : (days + ' day ');
            }

            if (hours > 0) {
                time += (hours > 1) ? (hours + ' hours ') : (hours + ' hour ');
            }

            if (minutes >= 0) {
                time += (minutes > 1) ? (minutes + ' minutes ') : (minutes + ' minute ');
            }

            return time;
        };
    });
}());
