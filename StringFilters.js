(function() {
    'use strict';

    /**
    * capitalize first letter of every word in str
    * TODO: instead of operating on \S*, operate on words not in a blacklist (prepositions, etc.)
    */
    function toTitleCase() {
        function _filter(str) {
            return str.replace(/\w\S*/g,
                        function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        });
        }

        return _filter;
    }


    angular.module('myApp')
        .filter('toTitleCase', toTitleCase);

}());
