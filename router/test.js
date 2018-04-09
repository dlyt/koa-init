'use strict';

const { TestCtrl } = require('../app/controller');

module.exports = (router) => {
    router.get('/test', TestCtrl.index);
};