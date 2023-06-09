const { addAttributes } = require('../helpers/extend_component');
const { Element } = require('./element');

class Select extends Element {
  constructor(parent, name, value) {
    if (name === undefined || name === null) {
      value = name;  // eslint-disable-line
      name = parent; // eslint-disable-line
      parent = null; // eslint-disable-line
    }

    super(parent);

    this.tag = 'select';
    this.name = name;
    this.value = value || [];
  }
  serializeOptions() {
    let serialized = '';
    for (const option of this.value) {
      serialized += `<option value="${option.value}">${option.key}</option>`;
    }
    return serialized;
  }
  toString() {
    return [
      this.startString(),
      this.serializeOptions(),
      this.endString(),
    ].join('\n');
  }
}

addAttributes(Select, ['required', 'val']);

module.exports.Select = Select;
