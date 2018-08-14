const koa = require('./lib/application');
const app = new koa();
app.use((ctx)=> {
  ctx.body = 'hello world';
})
// app.on('error', this.error)
app.listen(1234);
