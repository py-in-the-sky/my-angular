(function () {
    'use strict';

    /**
    * determine whether obj[objField] has 'prefix' as its prefix
    * case insensitive
    * prefix and objField are both strings
    */
    function namePrefixFilter(prefix, objField) {
        var _prefix = (prefix === undefined ? '' : prefix.toLowerCase());

        function _filter(obj) {
            return obj[objField].toLowerCase().indexOf(_prefix) === 0;
        }

        return _filter;
    }


    angular.module('myApp')
        .filter('namePrefixFilter', namePrefixFilter);

}());
