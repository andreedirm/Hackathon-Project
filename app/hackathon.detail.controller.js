(function() {
    'use strict';

    angular
        .module('app')
        .controller('HackathonDetailCtrl', HackathonDetailCtrl);

    HackathonDetailCtrl.$inject = ['$log', 'HackathonFactory'];

    /* @ngInject */
    function HackathonDetailCtrl($log, HackathonFactory) {
        var vm = this;
        vm.title = 'HackathonDetailCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();