const _ = require('lodash');
const { Element } = require('./element');
const { Input } = require('./input');
const { Button } = require('./button');
const { Select } = require('./select');
const { addAttributes } = require('../helpers/extend_component');

class FormFor extends Element {
  constructor(object) {
    super(null);
    this.tag = 'form';
    if (!_.isNil(object) && _.isFunction(object.className) === true) {
      this.name = _.snakeCase(object.className());
    }
    this.object = object || {};
    this.requiredAttributes = this.requiredAttributes.concat(['accept-charset', 'action', 'method', 'url']);
  }

  defaultAcceptCharset(){ // eslint-disable-line
    return 'UTF-8';
  }
  
  defaultAction() { // eslint-disable-line
    return '/';
  }

  defaultMethod() { // eslint-disable-line
    return 'get';
  }

  email(name) { // eslint-disable-line
    const input = new Input(this, name);
    input.type('email');
    this.children.push(input);
    return input;
  }
  text(name, value) {
    const input = new Input(this, name, value);
    input.type('text');
    this.children.push(input);
    return input;
  }
  password(name) {
    const input = new Input(this, name);
    input.type('password');
    this.children.push(input);
    return input;
  }
  submit(value) {
    const button = new Button(this, 'submit');
    button.type('submit');
    button.val(value);
    this.children.push(button);
    return button;
  }
  hidden(name, value) {
    const input = new Input(this, 'hidden');
    input.type('hidden');
    input.attr('name', name);
    input.val(value);
    this.children.push(input);
    return input;
  }
  select(name, value) {
    const field = new Select(this, name, value);
    field.val(value);
    this.children.push(field);
    return field;
  }
  start() {
    return `${this.startString()} \n ${this.serializeChildren()} \n`;
  }
}

addAttributes(FormFor, ['accept-charset', 'action', 'method']);


module.exports.FormFor = FormFor;
