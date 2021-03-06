/// <reference path="../../typings/tsd.d.ts" />
'use strict';
(function() {

    class RegulationComponent {
        menu = [
            { name: 'News', href: '/news', section: '', ngclick: '', class: 'nothing', a_class: 'nothing' },
            { name: 'Regulations', href: '/regulation', section: '', ngclick: '', class: 'nothing', a_class: 'nothing' },
            { name: 'Matchs', href: '/match', section: '', ngclick: '', class: 'nothing', a_class: 'nothing' },
            { name: 'Teams', href: '/team', section: '', ngclick: '', class: 'nothing', a_class: 'nothing' }
        ];
        constructor() {
            this.message = 'Hello';
        }
    }

    angular.module('worldProno2018App')
        .component('regulation', {
            templateUrl: 'app/regulation/regulation.html',
            controller: RegulationComponent,
            controllerAs: 'vm'
        });

})();
