(function() {
    'use strict';

    var appServices = angular.module('app.services', []);

    appServices.factory('searchService', ['$http', function($http) {
        var searchService = {
            search: search
        };

        function search(query) {
            var settings = {
                // Normally should be behind a server proxy to protect key using for just this demo
                appKey: '',
                urlBase: 'https://api.datamarket.azure.com/Bing/Search/v1/Composite?Sources=%27web%2Bimage%2Bvideo%2Bnews%27'
            };

            var url = settings.urlBase + '&Query=%27' + query + '%27';
            var authHeader = 'Basic ' + btoa(settings.appKey + ':' + settings.appKey);

            var promise = $http.get(url, {
                headers: { 'Authorization': authHeader }
            }).
            success(function() {    // data, status, headers, config

            }).
            error(function() {

            });

            return promise;
        }

        return searchService;
    }]);
}());
