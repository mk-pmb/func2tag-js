
<!--#echo json="package.json" key="name" underline="=" -->
func2tag
========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Convert any string-producing function to a renderer for JS tagged strings.
<!--/#echo -->



API
---

This module exports one function:

### func2tag(f)

Return a function that renders a tagged string by inserting into each slot
the result of `f(a, i, v)` where
`a` is the value for the slot,
`i` is the slot index ("slot number", counting from zero),
and `v` is the list (array) or all slot values.




Usage
-----

See [test/usage.mjs](test/usage.mjs).



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
