const test = require('tape'); // eslint-disable-line
const Formic = require('../index.js');

test('basic form test', function (t) { // eslint-disable-line
  let f = new Formic.FormFor("user");
  f.klass('classval').style({'width':'800px','height':'100px'}).id("index");
  f.url('/');

  f.emailField('user_email');
  f.emailField('xyz');

  console.log(f.toString());
  t.end();
});
