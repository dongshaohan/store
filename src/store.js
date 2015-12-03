/*
 * store.js - v0.1 - 2015-12-03
 * localStorage api library
 * @author dongsh
 */
;(function (root, factory) {

 	//  AMD. Register as an anonymous module.
  	if (typeof define === 'function' && define.amd) {
        define(function () {
      	    return factory();
        });

    //  Next for Node.js or CommonJS. 
    } else if (typeof exports !== 'undefined' && module.exports) {
        module.exports = factory();

    //  Finally, as a browser global.
    } else {
    	root.store = factory();
    }

})(this, function () {

    return {

    };
});