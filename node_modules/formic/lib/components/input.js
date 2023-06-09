const { addAttributes } = require('../helpers/extend_component');
const { Element } = require('./element');

class Input extends Element {
  constructor(parent, name, value) {
    if (name === undefined || name === null) {
      value = name;  // eslint-disable-line
      name = parent; // eslint-disable-line
      parent = null; // eslint-disable-line
    }

    super(parent);

    this.tag = 'input';
    this.name = name;
    this.value = value || null;
    this.requiredAttributes = this.requiredAttributes.concat(['type', 'val']);
  }

  getValue() {
    if (this.attributes.type === 'password') {
      return null;
    }
    if (this.value) {
      return this.value;
    }
    if (this.parent && this.parent.object && this.parent.object[this.name]) {
      return this.parent.object[this.name];
    }
    return null;
  }
}

addAttributes(Input, ['type', 'val', 'required', 'placeholder']);

module.exports.Input = Input;
