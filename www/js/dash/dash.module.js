/**
 * @created Lei)Leo) SHI <foxshee@gmail.com>
 * @date 1/23/16
 */

'use strict';

/* ***************************************************************************
 * ### Angular Module - Dash ###
 *
 */

// Define your `project module`
var dashModule = angular.module('app.dash',
    []
);

// Use `bulk` to load `all` angular elements under this module folder.
var bulk = require('bulk-require');
// TODO Make the `paths` in `bulk` to be a variable.
//
// For now, `bulk` does not support a variable as the `paths`, since when doing `buuikify` on `browserify`, it will be
// ignored.
var angularElements = bulk(__dirname, ['./**/!(*.module|*.spec).js']);

// Load Angular Module Processor
var processor = require('../app.module.processor');
processor.angularModuleProcessor(dashModule, angularElements);

module.exports = dashModule;



