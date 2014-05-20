(function () {
    'use strict';


    // see: http://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
    // see: http://jsfiddle.net/JeJenny/ZG9re/
    var FileUploadDirective = function ($parse) {
        var directive = {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var model = $parse(attrs.fileInput);
                var modelSetter = model.assign;

                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };

        return directive;
    };


    FileUploadDirective.$inject = ['$parse'];


    angular.module('myApp')
        .directive('fileInput', FileUploadDirective);
    // name is normalized to file-input for html

}());
