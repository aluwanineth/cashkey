(function () {
    "use strict";
    angular
        .module('common.services')
        .factory("userProfile",userProfile)

    function userProfile() {
        var setProfile = function (userName, token, refreshToken) {
            sessionStorage.setItem("userName", userName);
            sessionStorage.setItem("acessToken", token);
            sessionStorage.setItem("refreshToken", refreshToken);
        };

        var getProfile = function () {
            var profile = {
                isLogIn: sessionStorage.getItem('acessToken') != null,
                userName: sessionStorage.getItem('userName'),
                token: sessionStorage.getItem('acessToken'),
                refreshToken: sessionStorage.getItem('refreshToken')
            };
            return profile;
        }
        return {
            setProfile: setProfile,
            getProfile: getProfile,
        }
    }
}());