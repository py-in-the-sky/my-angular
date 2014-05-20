(function () {

    var PeopleFactory = function ($http) {
        var people = null;
        var peopleColumns = {
            col1: 'First Name',
            col2: 'Last Name',
            col3: 'Day 1',
            col4: 'Day 2'
        };

        var getPeople = function () {
            var people = [
                { col1: 'X', col2: 'Y', col3: 'Z', col4: '45' },
                { col1: 'A', col2: 'B', col3: 'C', col4: '45' },
                { col1: 'D', col2: 'Xasdfsadf', col3: 'Y', col4: '45' },
                { col1: 'I', col2: 'C', col3: 'Y', col4: '45' },
                { col1: 'Fasfasdf', col2: 'L', col3: 'Wasdfasdf', col4: '45' },
                { col1: 'H', col2: 'M', col3: 'Q', col4: '45asdfsadf' }
            ];

            return people;
        };


        var factory = {
            getPeople: getPeople,
            peopleColumns: peopleColumns
        };

        return factory;
    };


    PeopleFactory.$inject = ['$http'];


    angular.module('myApp')
        .factory('PeopleFactory', PeopleFactory);

}());
