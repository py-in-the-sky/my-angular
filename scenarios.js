'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('My App', function() {

    it('should automatically redirect to #/ when location hash/fragment is empty', function() {
        browser.get('');
        expect(browser.getLocationAbsUrl())
            .toMatch("/");
    });


    describe('Home', function() {

        beforeEach(function() {
            browser.get('#/');
        });


        it('should render Home when user navigates to #/', function() {
            expect(element.all(by.css('[ng-view] h1.page-header')).first().getText())
                .toMatch(/Patients/);
        });
        it('should route to About when link is clicked', function() {
            element(by.css('.navbar-nav li a[href="#/about"]')).click();
            expect(browser.getLocationAbsUrl())
                .toMatch('/about');
        });
        it('should hide columns when buttons are clicked', function() {
            var button1 = element(by.css('.filters .btn-group-xs .btn:first-child')),
                col1 = element(by.css('.main .table tbody tr:first-child td:first-child'));

            expect(button1.getAttribute('class'))
                .not.toContain('btn-default');
            expect(col1.getAttribute('class'))
                .not.toContain('hidden');

            button1.click();

            expect(button1.getAttribute('class'))
                .toContain('btn-default');
            expect(col1.getAttribute('class'))
                .toContain('hidden');

            button1.click();

            expect(button1.getAttribute('class'))
                .not.toContain('btn-default');
            expect(col1.getAttribute('class'))
                .not.toContain('hidden');
        });
        it('should reset default column hiding upon navigation', function() {
            var button1 = element(by.css('.filters .btn-group-xs .btn:first-child')),
                col1 = element(by.css('.main .table tbody tr:first-child td:first-child'));

            button1.click();

            expect(col1.getAttribute('class'))
                .toContain('hidden');

            element(by.css('.navbar-nav li a[href="#/about"]')).click();
            element(by.css('.navbar-nav li a[href="#/"]')).click();

            expect(browser.getLocationAbsUrl())
                .toMatch('/');
            expect(col1.getAttribute('class'))
                .not.toContain('hidden');
        });
        it('should support column sorting', function() {
            var col1 = element(by.css('.main .table thead tr th:first-child')),
                caret1 = element(by.css('.main .table thead tr th:first-child span')),
                colLast = element(by.css('.main .table thead tr th:last-child')),
                caretLast = element(by.css('.main .table thead tr th:last-child span')),
                cell1 = element(by.css('.main .table tbody tr:first-child td:first-child'));

            expect(caret1.getAttribute('class'))
                .toContain('caret');
            expect(cell1.getText())
                .toEqual('A');

            col1.click();
            var cell1 = element(by.css('.main .table tbody tr:first-child td:first-child'));

            expect(caret1.getAttribute('class'))
                .toContain('caret-up');
            expect(cell1.getText())
                .toEqual('X');
            expect(caretLast.getAttribute('class'))
                .not.toContain('caret-up');
            expect(caretLast.getAttribute('class'))
                .toContain('invisible');

            colLast.click();

            expect(caret1.getAttribute('class'))
                .not.toContain('caret-up');
            expect(caret1.getAttribute('class'))
                .toContain('invisible');
            expect(caretLast.getAttribute('class'))
                .not.toContain('caret-up');

            colLast.click();

            expect(caretLast.getAttribute('class'))
                .toContain('caret-up');

        });
        it('should reset default column sorting upon navigation', function() {
            var caret1 = element(by.css('.main .table thead tr th:first-child span')),
                cell1 = element(by.css('.main .table tbody tr:first-child td:first-child')),
                col1 = element(by.css('.main .table thead tr th:first-child')),
                colLast = element(by.css('.main .table thead tr th:last-child'));

            expect(caret1.getAttribute('class'))
                .toContain('caret');
            expect(cell1.getText())
                .toEqual('A');

            col1.click();

            expect(caret1.getAttribute('class'))
                .toContain('caret-up');


            element(by.css('.navbar-nav li a[href="#/about"]')).click();
            element(by.css('.navbar-nav li a[href="#/"]')).click();

            // check defaults are reset
            expect(browser.getLocationAbsUrl())
                .toMatch('/');
            expect(caret1.getAttribute('class'))
                .toContain('caret');
            expect(cell1.getText())
                .toEqual('A');

            col1.click();

            expect(caret1.getAttribute('class'))
                .toContain('caret-up');

            colLast.click();

            expect(caret1.getAttribute('class'))
                .not.toContain('caret-up');

            element(by.css('.navbar-nav li a[href="#/about"]')).click();
            element(by.css('.navbar-nav li a[href="#/"]')).click();

            var cell1 = element(by.css('.main .table tbody tr:first-child td:first-child'));

            // check defaults are reset
            expect(browser.getLocationAbsUrl())
                .toMatch('/');
            expect(caret1.getAttribute('class'))
                .toContain('caret');
            expect(cell1.getText())
                .toEqual('A');
        });

    });


    describe('About', function() {

        beforeEach(function() {
            browser.get('#/about');
        });


        it('should render About when user navigates to #/about', function() {
            expect(element.all(by.css('[ng-view] h2')).first().getText())
                .toMatch(/What is it all about?/);
            expect(browser.getLocationAbsUrl())
                .toMatch('/about');
        });

    });
});
