// -*- coding: utf-8, tab-width: 2 -*-

const EX = function func2tag(f) {
  return function renderTaggedString(s, ...v) {
    return v.reduce((b, a, i) => b + s[i] + f(a, i, v), '') + s[s.length - 1];
  };
};

export default EX;
