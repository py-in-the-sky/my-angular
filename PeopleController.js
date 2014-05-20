(function () {

    var PeopleController = function ($scope, PeopleFactory) {
        $scope.tableColumns = PeopleFactory.peopleColumns;
        $scope.people = PeopleFactory.getPeople();
        // $scope.sortBy = 'col1';
        $scope.reverse = false;  // default sort order

        $scope.sortBy = (function () {  // default sort field from tablesColumns
            var key;
            for (key in $scope.tableColumns)  // get first field from tableColumns
                break;
            return key
        }());

        $scope.doSort = function (fieldName) {  // sorting used by view
            if (fieldName === $scope.sortBy)  // sorting on same column
                $scope.reverse = !$scope.reverse;  // change sort order
            else  // new field chosen for sorting
                $scope.reverse = false;  // reset to default sort order
                $scope.sortBy = fieldName;  // sortBy field changed
        };

        $scope.formatCaret = function (fieldName) {  // return css class for caret placeholder
            return fieldName===$scope.sortBy ?
                                ($scope.reverse ? 'visible caret-up' : 'visible')
                                : 'invisible';
        };
    };


    PeopleController.$inject = ['$scope', 'PeopleFactory'];


    angular.module('myApp')
        .controller('PeopleController', PeopleController);

}());
