#!/usr/bin/env node
// ./cli.js
let app = require('./app.js')
const action = process.argv[2];
const dest = process.argv[3];
app(action, dest)