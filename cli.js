#!/usr/bin/env node
'use strict';
const meow = require('meow');
const osName = require('os-name');

meow(`
	Example
	  $ os-name
	  macOS Sierra
`);

console.log(osName());
