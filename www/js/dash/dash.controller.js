/**
 * @created Lei)Leo) SHI <foxshee@gmail.com>
 * @date 1/23/16
 */

'use strict';

// Load Angular Module Processor
var processor = require('../app.module.processor');

function dashController($scope) {

    'ngInject';

}

module.exports = {
    name: 'dashController',
    type: processor.elementType.CONTROLLER,
    func: dashController
};
