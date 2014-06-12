/*jslint devel: true, browser: true, indent: 2 */
/*global jQuery:true */


/*******************************************************************************
* Utility
*******************************************************************************/

// String.prototype.toPhoneNumber = function() {
//   var s2 = (""+this).replace(/\D/g, '');
//   var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
//   return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
// };

// Number.prototype.toCurrency = function(place) {
//   //default is 2 decimal places. Can be overridden
//   place = (!isNaN(parseFloat(place)) && isFinite(place)) ? place : 2;
//   var num = Math.abs(this).toFixed(place).toString();
//   var output = num.substring(num.indexOf('.'));

//   if (num.length <= 6) {return (this < 0 ? '-' : '') + "$" + num.substring(0, num.indexOf('.')) + output;}

//   var ii = 0;
//   for (ii = num.length - 6; ii > 0; ii-=3) { output = ',' + num.substring(ii, ii+3) + output; }
//   ii = ii === 0 ? 3 : 3 + ii;
//   return (this < 0 ? '-' : '') + "$" + num.substring(0, ii) + output;
// };

// Number.prototype.toCommas = function() {
//   var num = Math.abs(this).toString();
//   if (num.length <= 3) {return (this < 0 ? '-' : '') + num;}

//   var idx = num.indexOf('.');
//   var output = idx > -1 ? num.substring(idx) : '';
//   if (output.length > 0) {num = num.substring(0, idx);}

//   var ii = 0;
//   for (ii = num.length - 3; ii > 0; ii-=3) {output = ',' + num.substring(ii, ii+3) + output;}
//   ii = ii === 0 ? 3 : 3 + ii;
//   return (this < 0 ? '-' : '') + num.substring(0, ii) + output;
// };

// //helper function for old ie
// if (!Array.prototype.indexOf) {
//   Array.prototype.indexOf = function (obj, fromIndex) {
//     if (fromIndex === null) {
//       fromIndex = 0;
//     } else if (fromIndex < 0) {
//       fromIndex = Math.max(0, this.length + fromIndex);
//     }
//     for (var i = fromIndex, j = this.length; i < j; i++) {
//       if (this[i] === obj) { return i;}
//     }
//     return -1;
//   };
// }
// function inArray(arr,obj) {
//   return (arr.indexOf(obj) !== -1);
// }
// function isSelected(arr,obj) {
//   return inArray(arr,obj) ? 'selected' : '';
// }

// //from crockfords JSON 2
// //TODO: need to make this a polyfill just for lt-ie9
// Date.prototype.toJSON = function (key) {
//   function f(n) {
//     // Format integers to have at least two digits.
//     return n < 10 ? '0' + n : n;
//   }

//   return this.getUTCFullYear()   + '-' +
//        f(this.getUTCMonth() + 1) + '-' +
//        f(this.getUTCDate())      + 'T' +
//        f(this.getUTCHours())     + ':' +
//        f(this.getUTCMinutes())   + ':' +
//        f(this.getUTCSeconds())   + 'Z';
// };

// String.prototype.isValidDateString = function() {
//   var d = new Date(this);
//   if ( Object.prototype.toString.call(d) !== "[object Date]" ){
//     return false;
//   }
//   return !isNaN(d.getTime());
// };

// Date.prototype.toMMDDYYYY = function (key) {
//   function f(n) {
//     // Format integers to have at least two digits.
//     return n < 10 ? '0' + n : n;
//   }
//   return  f(this.getUTCMonth() + 1) + '/' +
//           f(this.getUTCDate())      + '/' +
//           this.getUTCFullYear();
// };

// Date.prototype.timeAgo = function(){
//   var seconds = Math.floor((new Date() - this) / 1000);
//   var interval = Math.floor(seconds / 31536000);

//   if (interval > 1) {return interval + " years";}
//   if (interval === 1) {return interval + " year";}
//   interval = Math.floor(seconds / 2592000);
//   if (interval > 1) { return interval + " months";}
//   if (interval === 1) {return interval + " month";}
//   interval = Math.floor(seconds / 86400);
//   if (interval > 1) {return interval + " days";}
//   if (interval === 1) {return interval + " day";}
//   interval = Math.floor(seconds / 3600);
//   if (interval > 1) {return interval + " hours";}
//   if (interval === 1) {return interval + " hour";}
//   interval = Math.floor(seconds / 60);
//   if (interval > 1) {return interval + " minutes";}
//   if (interval === 1) {return interval + " minute";}
//   return Math.floor(seconds) + " seconds";
// };
