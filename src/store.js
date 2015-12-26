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

    var _ = {
        version: "0.1",
        stringify: function (s) {
            return d === undefined || typeof d === "function" ? d+'' : JSON.stringify(d);
        },
        parse: function (s) {
            // if it doesn't parse, return as is
            try { 
                return JSON.parse(s); 
            } catch(e) { 
                return s; 
            }
        },
        get: function (area, key) { 
            return area.getItem(key); 
        },
        set: function (area, key, string) { 
            area.setItem(key, string);
        },
        remove: function (area, key) {
            area.removeItem(key); 
        },
        key: function (area, i) { 
            return area.key(i); 
        },
        length: function (area) { 
            return area.length; 
        },
        clear: function (area) { 
            area.clear(); 
        },
        storeAPI: {
            _area: localStorage,
            each: function (fn, and) {
                for ( var i = 0, m = _.length(this._area); i < m; i++ ) {
                    var key = _.key(this._area, i);
                    if ( key !== undefined ) {
                        if ( fn.call(this, key, and || this.get(key)) === false ) {
                            break;
                        }
                    }
                    if ( m > _.length(this._area) ) { m--; i--; }
                }
                return and || this;
            },
            get: function (key) {
                var s = _.get(this._area, key);
                return s !== null ? _.parse(s) : s;
            },
            getAll: function () {
                return this.each(function (k, all) { all[k] = this.get(k); }, {});
            },
            set: function (key, data) {
                return _.set(this._area, key, _.stringify(data));
            },
            setAll: function (data) {
                for ( var key in data ) {
                    this.set(key, data[key]); 
                }
            },
            remove: function (key) {
                var d = this.get(key);
                _.remove(this._area, key);
                return d;
            },
            clear: function () {
                _.clear(this._area);
            }
        }
    };

    return _.storeAPI;
});