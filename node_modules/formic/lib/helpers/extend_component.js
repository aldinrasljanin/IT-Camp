const camelCase = require('camelcase');

const safeMethodCall = function(object, method) { // eslint-disable-line
  if (object === null || object === undefined) {
    return null;
  }

  if (!object[method]) {
    return null;
  }

  return object[method]();
};

module.exports.addAttributes = function (className, attributes) { // eslint-disable-line
  attributes.forEach((attribute) => {
    const getter = camelCase(`get-${attribute}`);
    const setter = camelCase(attribute);
    if (!className.prototype[getter]) {
      className.prototype[getter] = function () { // eslint-disable-line
        return this.attributes[attribute] || safeMethodCall(this, camelCase(`default-${attribute}`));
      };
    }
    if (!className.prototype[setter]) {
      //
      className.prototype[setter] = function (value, apply) {  // eslint-disable-line
        let attribName = attribute;
        if (attribName === 'klass') {
          attribName = 'class';
        }

        if (attribName === 'val') {
          attribName = 'value';
        }
        let shouldApply = false;
        if (apply !== undefined) {
          if (apply === true) {
            shouldApply = true;
          }
        } else {
          shouldApply = true;
        }
        if (shouldApply === true) {
          if (this.attributes[attribName]) {
            this.attributes[attribName] = `${this.attributes[attribName]} ${value}`;
          } else {
            this.attributes[attribName] = value;
          }
          
        }
        return this;
      };
      //
    }
  });
};

