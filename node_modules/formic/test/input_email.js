const test = require('tape'); // eslint-disable-line
const Formic = require('../index.js');

test('basic form test', function (t) { // eslint-disable-line
  let i = new Formic.Input("email_field_name");
  i.type('email');
  i.val('100');
  i.klass('hello').style({'width':'800px','height':'100px'}).id("index");

  t.end();
});
