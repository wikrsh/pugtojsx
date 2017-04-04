'use strict';

const pug = require('pug');
const HTMLtoJSX = require('htmltojsx');

/**
 * Convert pug string to JSX string
 */
exports.pugtojsx = function(str, locals) {
  var html = pug.render(str, locals);

  const converter = new HTMLtoJSX({ createClass: false });
  return converter.convert(html);
};
