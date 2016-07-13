(function() {
'use strict';

angular.module('angular-emojione', [])
.filter('emojione', function() {
  return function(input) {
    return emojione.toImage(input || '');
  };
})
})();