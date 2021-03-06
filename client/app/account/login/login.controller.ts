/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

class LoginController {
    constructor(Auth, $state) {
        this.user = {};
        this.errors = {};
        this.submitted = false;

        this.Auth = Auth;
        this.$state = $state;
    }

    login(form) {
        this.submitted = true;

        if (form.$valid) {
            this.Auth.login({
                    email: this.user.email,
                    password: this.user.password
                })
                .then(() => {
                    // Logged in, redirect to home         
                    this.$state.go('arena');
                })
                .catch(err => {
                    this.errors.other = err.message;
                });
        }
    }
}

angular.module('worldProno2018App')
    .controller('LoginController', LoginController);
