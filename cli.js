#!/usr/bin/env node
// ./cli.js
let app = require('./app.js')
const action = process.argv[1];
const dest = process.argv[2];
app(action, dest)