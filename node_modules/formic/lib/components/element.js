const { addAttributes } = require('../helpers/extend_component');
const camelCase = require('camelcase');

class Element {
  constructor(parent) {
    this.parent = parent || null;
    this.depth = 0;
    if (this.parent !== null && this.parent !== undefined) {
      this.depth = this.parent.depth + 1;
    }
    this.tag = 'div';
    this.attributes = {};
    this.children = [];
    this.requiredAttributes = ['id', 'name'];
  }

  attr(name, value) {
    if (name === null || name === undefined) {
      return this;
    }
    this.attributes[name] = value;
    return this;
  }
  data(name, value) {
    if (name === null || name === undefined) {
      return this;
    }
    return this.attr(`data-${name}`, value);
  }

  defaultName() {
    if (this.attributes.name) {
      return this.attributes.name;
    }
    let parentName = 'new';
    if (this.parent !== null && this.parent !== undefined) {
      parentName = this.parent.getName();
    }
    return `${parentName}[${this.name || this.tag}]`;
  }

  defaultId() {
    let parentName = 'new';
    if (this.parent !== null && this.parent !== undefined) {
      parentName = this.parent.getName();
    }
    return `${parentName}_${this.name || this.tag}`;
  }

  serializeAttribute(attributeValue) { // eslint-disable-line
    if (attributeValue !== null && typeof attributeValue === 'object') {
      const array = [];
      Object.keys(attributeValue).forEach(function(key) { // eslint-disable-line
        array.push(`${key}:${attributeValue[key]}`);
      });
      return array.join(';');
    } else { // eslint-disable-line
      return `${attributeValue}`;
    }
  }

  serializeAttributes() {
    const self = this;
    const serializedAttributesArray = [];

    Object.keys(this.attributes).forEach(function(key) { // eslint-disable-line
      if (self.tag === 'button' && (key === 'name' || key === 'value')) {
        return;
      }
      if (self.tag === 'select' && key === 'value') {
        return;
      }
      let serializedAttribute = key;
      if (self.attributes[key] !== null && self.attributes[key] !== undefined) {
        serializedAttribute += '=';
        serializedAttribute += `"${self.serializeAttribute(self.attributes[key])}"`;
      }
      serializedAttributesArray.push(serializedAttribute);
    });

    this.requiredAttributes.forEach(function(attribute){ // eslint-disable-line
      if (self.tag === 'button' && attribute === 'name') {
        return;
      }
      if (!self.attributes[attribute]) {
        let defaultValue = null;
        const methodName = camelCase(`default-${attribute}`);
        
        if (self[methodName]) {
          defaultValue = self[methodName]();
        }

        if (defaultValue) {
          serializedAttributesArray.push(`${attribute}="${defaultValue}"`);
        }
      }
    });
    return serializedAttributesArray;
  }
  padWhiteSpace() {
    return Array(this.depth * 4).join(' ');
  }

  serializeChildren() {
    const array = [];
    for (let i = 0; i < this.children.length; i += 1) {
      array.push(this.children[i].toString());
    }
    return array.join('\n');
  }

  start() {
    return this.startString();
  }

  startString() {
    return `${this.padWhiteSpace()}<${this.tag} ${this.serializeAttributes().reverse().join(' ')}>`;
  }

  end() {
    return this.endString();
  }

  endString() {
    let str = '';
    if (this.children.length > 0) {
      str += this.padWhiteSpace();
    }
    return `${str}</${this.tag}>`;
  }
  toString() {
    const array = [this.startString()];
    if (this.children.length > 0) {
      array.push(this.serializeChildren());
    }
    array.push(this.endString());
    let joiner = '';
    if (this.children.length > 0) {
      joiner = '\n';
    }

    return array.join(joiner);
  }
}

addAttributes(Element, ['id', 'name', 'klass', 'style', 'height', 'width']);

module.exports.Element = Element;
