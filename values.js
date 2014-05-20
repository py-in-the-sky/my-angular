(function () {
    'use strict';

    // a value is not available to the module's config function
    // can be injected in controllers, etc., but not into the modules config
    // method
    angular.module('myApp').value('moduleSettings', {
        modTitle: 'My App',
        version: '1.0'
    });

    // a constant is available to the module's config function
    // can be injected into the config method for the module along with
    // being injected into controllers, etc.
    // angular.module('peopleModule').constant('moduleSettings', {
    //     title: 'People Module',
    //     version: '1.0'
    // });

}());
