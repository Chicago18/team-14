const mysql = require('mysql'),
      nconf = require('nconf');

nconf.file({
  file: './config/config.json'
  });