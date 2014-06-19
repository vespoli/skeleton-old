// Main application code for site
/*jslint devel: true, browser: true, indent: 2 */
/*global jQuery:true */
/*global FOO:true */

/*******************************************************************************
* Global utility "class"
* instantiate like this when using in a local component
* var swo = new FOO.someWrapperObject();
*******************************************************************************/
FOO.someWrapperObject = function() {
  var foo = function (bar, bat, baz){

  },

  bar = {
    barMethodA : function(){

    },
    barMethodB : function(){

    }
  },

  // private function
  bat = function(){

  };

  //public methods
  return {
    foo: foo,
    bar: bar
  };
}
;
