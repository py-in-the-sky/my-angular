'use strict';

/* jasmine specs for services go here */

describe('values', function() {
    beforeEach(module('myApp'));


    describe('moduleSettings version', function() {
        it('should return current version', inject(function(moduleSettings) {
            expect(moduleSettings.version)
                .toEqual('1.0');
        }));
        it('should return module title', inject(function(moduleSettings) {
            expect(moduleSettings.modTitle)
                .toEqual('My App');
        }));
    });


    describe('People Factory', function() {
        it('should have the proper number of fields', inject(function(PeopleFactory) {
            // see: http://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
            var size = 0,
                key;
            for (key in PeopleFactory.peopleColumns)
                if (PeopleFactory.peopleColumns.hasOwnProperty(key))
                    size++;
            expect(size)
                .toEqual(4);
        }));
        it('should have the proper field display names', inject(function(PeopleFactory) {
            expect(PeopleFactory.peopleColumns.col1)
                .toEqual('First Name');
            expect(PeopleFactory.peopleColumns.col2)
                .toEqual('Last Name');
            expect(PeopleFactory.peopleColumns.col3)
                .toEqual('Day 1');
            expect(PeopleFactory.peopleColumns.col4)
                .toEqual('Day 2');
        }));
        it('should return a list of people', inject(function(PeopleFactory) {
            expect(PeopleFactory.getPeople())
                .toBeDefined();
        }));
    });

});
