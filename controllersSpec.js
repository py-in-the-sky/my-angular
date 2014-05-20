'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
    beforeEach(module('myApp'));

    describe('PeopleController', function() {
        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('PeopleController', {
                $scope: scope
            });
        }));

        it('should be defined', function() {
            expect(ctrl)
                .toBeDefined();
        });
        it('should have table columns and people', function() {
            expect(scope.tableColumns)
                .toBeDefined();
            expect(scope.people)
                .toBeDefined();
        });
        it('should provide caret formatting to help visually indicate column sorting', function() {
            var testField = 'testField',
                nullField = 'blah';
            scope.sortBy = testField;

            expect(scope.formatCaret(nullField))
                .toEqual('invisible');
            expect(scope.formatCaret(testField)) // reverse is currently false
            .toEqual('visible');

            scope.doSort(testField);

            expect(scope.reverse)
                .toBe(true);
            expect(scope.formatCaret(testField)) // reverse is now true
            .toEqual('visible caret-up');
        });

    });

    describe('AboutController', function() {
        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('AboutController', {
                $scope: scope
            });
        }));

        it('should be defined', function() {
            expect(ctrl)
                .toBeDefined();
        });

        it('should have an empty $scope', function() {
            expect(scope.something)
                .toBeUndefined();
        });

    });


    //it('should ....', inject(function($controller) {
    //    //spec body
    //    var PeopleController = $controller('PeopleController');
    //    expect(PeopleController)
    //        .toBeDefined();
    //}));
});
