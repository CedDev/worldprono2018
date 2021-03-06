/// <reference path="../../typings/tsd.d.ts" />
'use strict';

(function() {

    class TeamController {
        teams = [];
        orderProp = 'group';
        menu = [
            { name: 'News', href: '/news', section: '', ngclick: '', class: 'nothing', a_class: 'nothing' },
            { name: 'Regulations', href: '/regulation', section: '', ngclick: '', class: 'nothing', a_class: 'nothing' },
            { name: 'Matchs', href: '/match', section: '', ngclick: '', class: 'nothing', a_class: 'nothing' },
            { name: 'Teams', href: '/team', section: '', ngclick: '', class: 'nothing', a_class: 'nothing' }
        ];
        constructor($scope, $http) {
            this.$http = $http;
            this.loadTeams();
            this.showPlay = false;
        }

        loadTeams() {
                this.$http.get('api/teams').then(response => {
                    //console.log('data', response.data);
                    this.teams = response.data;
                });
            }
            // show players
        openPlayers(team) {
            team.showPlay = !team.showPlay;
        };


        createTeam(form) {
            this.submitted = true;

            if (form.$valid) {
                console.log('form', form);
                this.$http.post('/api/teams', {
                    code: this.newteam.code,
                    name: this.newteam.name,
                    group: this.newteam.group,
                    image: this.newteam.image,
                    comment: this.newteam.comment
                }).then(res => {
                    this.loadTeams();
                    this.newteam.code = '';
                    this.newteam.name = '';
                    this.newteam.group = '';
                    this.newteam.image = '';
                    this.newteam.comment = '';
                });
            }
        }
    }


    angular.module('worldProno2018App.teams')
        .controller('TeamController', TeamController);

})();
