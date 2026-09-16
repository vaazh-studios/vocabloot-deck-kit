(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo-shared-reading'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'SnapLingo-shared-reading'.");
    }
    globalThis['SnapLingo-shared-reading'] = factory(typeof globalThis['SnapLingo-shared-reading'] === 'undefined' ? {} : globalThis['SnapLingo-shared-reading'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var substring = kotlin_kotlin.$_$.e6;
  //endregion
  //region block: pre-declaration
  //endregion
  function validateTokens(source, tokens) {
    var previousEnd = 0;
    var _iterator__ex2g4s = tokens.g();
    while (_iterator__ex2g4s.h()) {
      var token = _iterator__ex2g4s.i();
      if (token.cc() < previousEnd)
        return false;
      if (token.cc() >= token.mp() || token.mp() > source.length)
        return false;
      if (!(substring(source, token.cc(), token.mp()) === token.np()))
        return false;
      previousEnd = token.mp();
    }
    return true;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = validateTokens;
  //endregion
  return _;
}));

//# sourceMappingURL=SnapLingo-shared-reading.js.map
