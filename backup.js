
var clone = require('clone-repos');

clone({owner: 'iondune', dest: 'github'}, function(err, repos) {
  if (err) return console.error(err);
  console.log('cloned', repos);
});
