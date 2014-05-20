(function () {

    var BreadcrumbFactory = function () {

        var getBreadcrumbs = function ($location) {
            var path = $location.path(),
                root = '#/',
                crumbs = [{ view: 'Home', path: root }];

            if (path[0] === '/')  // trim leading slash
                path = path.substr(1);

            if (path[path.length - 1] === '/')  // trim trailing slash
                path = path.substr(0, path.length - 1);

            var path_components = path.split('/'),
                path_len = path_components.length;

            for (var i = 0; i < path_len; i++) {
                var view = path_components[i].trim(),
                    path = root + path_components.slice(0, i + 1).join('/').trim();

                if (view !== '')
                    crumbs.push( { view: view, path: path } );
            }

            return crumbs;
        };

        var factory = {
            getBreadcrumbs: getBreadcrumbs
        };

        return factory;
    };


    angular.module('myApp')
        .factory('BreadcrumbFactory', BreadcrumbFactory);

}());
