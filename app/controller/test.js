'use strict';

const TestCtrl = {};

TestCtrl.index = (ctx) => {
    ctx.body = 'hi, koa';
}

module.exports = TestCtrl;