(function() {
    'use strict';

    angular
        .module('app')
        .factory('HackathonFactory', HackathonFactory);

    HackathonFactory.$inject = ['$http', '$q', '$log'];

    /* @ngInject */
    function HackathonFactory($http, $q, $log) {
        var service = {
            getHackathonData: getHackathonData
        };
        return service;

        ////////////////

        function getHackathonData() {}
    }
})();