(function () {
    "use strict";
    angular
        .module('common.services')
        .controller("loginController", ["$scope","loginService","userProfile",loginController])

    function loginController($scope, loginService, userProfile) {
        var vm = this;
        vm.responseData = "";
        vm.userRegistrationUserName = "";
        vm.userRegistrationFirstName = "";
        vm.userRegistrationLastName = "";
        vm.userRegistrationEmail = "";
        vm.userRegistrationPassword = "";
        vm.userRegistrationConfirmPassword = "";
        vm.RegisterUser = function () {
            alert("In");
            vm.responseData = "";
            var userInfo = {
                UserName: vm.userRegistrationUserName,
                Email: vm.userRegistrationEmail,
                FirstName: vm.userRegistrationFirstName,
                LastName: vm.userRegistrationLastName,
                Password: vm.userRegistrationPassword,
                ConfirmPassword: vm.userRegistrationConfirmPassword
            };
            var registerResult = loginService.register(userInfo);
            registerResult.then(function (data) {
                vm.responseData = "User Registration is Successfully";
                vm.userRegistrationPassword = "";
            }, function (response) {
                vm.responseData = response.statusText + "\r\n";
                if (response.data.exceptionMessage)
                    vm.responseData += response.data.exceptionMessage;
                if (response.data.modelState) {
                    for (var key in response.data.modelState) {
                        vm.responseData += response.data.modelState[key] + "\r\n";
                    }
                }
            });
        };
        vm.login = function () {
            var userLogin = {
                grant_type: "password",
                userName: vm.userRegistrationUserName,
                password: vm.userRegistrationPassword
            };
            var loginResult = loginService.login(userLogin);
            loginResult.then(function (resp) {
                vm.userRegistrationUserName = resp.data.userName;
                userProfile.setProfile(reso.data.userName, resp.data.acess_token, resp.data.refresh_token);

            }, function (response) {
                vm.responseData = response.statusText + "\r\n";
                if (response.data.error)
                    vm.responseData += response.data.error_description;
            });
        };
        vm.logout = function () {
            sessionStorage.removeItem('acessToken');
        };
    }
}());