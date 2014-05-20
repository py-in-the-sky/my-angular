(function () {
    'use strict';

    // see: http://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
    // see: http://jsfiddle.net/JeJenny/ZG9re/
    var FileUploadService = function ($http) {

        this.uploadFileToUrl = function (file, uploadUrl, success, error) {

            var fd = new FormData();
            fd.append('file', file);

            var config = {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            };

            $http
                .post(uploadUrl, fd, config)
                .success(success)
                .error(error);
        };
    };


    FileUploadService.$inject = ['$http'];


    angular.module('myApp')
        .service('FileUploadService', FileUploadService);

}());
