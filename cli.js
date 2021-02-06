#!/usr/bin/env node
import meow from 'meow';
import osName from 'os-name';

meow(`
	Example
	  $ os-name
	  macOS Sierra
`);

console.log(osName());
