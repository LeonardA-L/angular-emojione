(function() {
/* globals emojione */
'use strict';

angular.module('angular-emojione', [])
.filter('emojione', function() {
  return function(input) {
    return emojione.toImage(input || '');
  };
})
.directive('emojione', [function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var html = element.html();
      if(html){
        element.html(emojione.toImage(html));
      }
      else{
        scope.$watch(function(){
          return attrs.emojione;
        }, function (value) {
          element.html(value && emojione.toImage(value.toString()));
        });
      }
    }
  };
}]);

})();