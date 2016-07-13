/*
 * angular-emojione
 *
 * Angular directive and filter for easily rendering emojione emojis
 *
 * (c) 2016 Léonard Allain-Launay
 * License: MIT
 */

(function(angular) {
/* globals emojione */
'use strict';

angular.module('angular-emojione', [])
/*
 * Usage:
 * <p ng-bind-html="content | emojione"></p>
 */
.filter('emojione', function() {
  return function(input) {
    return emojione.toImage(input || '');
  };
})
/*
 * Usage:
 * <p emojione="{{content}}"></p>
 * <p emojione>:smile:</p>
 */
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

})(window.angular);