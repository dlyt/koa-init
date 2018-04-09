'use strict';

const Koa = require('koa');
const app = new Koa();

const router = require('./app/router');
app.use(router.routes());

app.listen(3000, () => {
  console.log('starting at port 3000');
});