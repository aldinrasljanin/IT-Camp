const { addAttributes } = require('../helpers/extend_component');
const { Element } = require('./element');

class Button extends Element {
  constructor(parent, name, value) {
    if (name === undefined || name === null) {
      value = name;  // eslint-disable-line
      name = parent; // eslint-disable-line
      parent = null; // eslint-disable-line
    }

    super(parent);

    this.tag = 'button';
    this.name = name;
    this.value = value || null;
    this.requiredAttributes = this.requiredAttributes.concat(['type', 'val']);
  }
  toString() {
    return [
      this.startString(),
      this.value || this.attributes.value,
      this.endString(),
    ].join('\n');
  }
}

addAttributes(Button, ['type', 'val']);

module.exports.Button = Button;
