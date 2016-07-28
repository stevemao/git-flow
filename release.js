var semRelease = require('semantic-release-gitflow');
semRelease.release({
  path: '.',
  bump: {},
  changelog: {}
},function() { console.log(new Date()) });
