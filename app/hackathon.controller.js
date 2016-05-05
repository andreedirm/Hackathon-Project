(function() {
    'use strict';

    angular
        .module('app')
        .controller('HackathonCtrl', HackathonCtrl);

    HackathonCtrl.$inject = ['$log', 'HackathonFactory'];

    /* @ngInject */
    function HackathonCtrl($log, HackathonFactory) {
        var vm = this;
        vm.title = 'HackathonCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();