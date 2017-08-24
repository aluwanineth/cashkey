(function () {
    "use strict";
    angular
        .module('common.services', ['ngResouce'])
        .constant("appSettings",
        {
            serverPath: "http://localhost/Cashkey.webApi/"
        });
}());