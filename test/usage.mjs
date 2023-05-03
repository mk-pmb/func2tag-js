// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';

import func2tag from '../func2tag.mjs';


test('hex', (t) => {
  t.plan(1);
  const tag = func2tag(n => '0x' + n.toString(16).toUpperCase());
  t.equal(tag`a = ${123}, b = ${456}, c = ${789}, d = 0`,
    'a = 0x7B, b = 0x1C8, c = 0x315, d = 0');
});







console.info('+OK usage test passed.');
