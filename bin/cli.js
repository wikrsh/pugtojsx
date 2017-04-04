#!/usr/bin/env node

'use strict';

const {pugtojsx} = require('../index');

function readStdin(cb) {
  let buf = '';
  process.stdin.setEncoding('utf8');
  process.stdin
    .on('data', (data) => { buf += data; })
    .on('end', () => cb(buf))
    .resume();
}

readStdin((s) => {
  process.stdout.write(pugtojsx(s));
});
