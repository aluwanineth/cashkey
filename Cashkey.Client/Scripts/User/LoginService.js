(function () {
    "use strict";
    angular
        .module('common.services')
        .factory("loginService", "$http","appSettings",loginService)

    function loginService($http, appSettings) {
        this.register = function (userInfo) {
            var response = $http({
                url: appSettings.serverPath + 'api/accounts/users',
                methord: 'POST',
                data: userInfo,
            });
            return response;
        };
        this.login = function (userLogin) {
            var response = $http({
                url: appSettings.serverPath + 'oauth/token',
                methord: 'POST',
                data: $.param({ grant_type: "password", username: userLogin.username, password: userLogin.password }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            });
            return response;
        }
        return {
            register: this.register,
            login: this.login,
        }
    }
}());