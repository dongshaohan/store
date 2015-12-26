# store
A better way to use localStorage.

Download: [store.min.js](http://dongshaohan.github.io/store/store.min.js) or [store.js](http://dongshaohan.github.io/store/store.js)

##Documentation
the api of store like so:
```javascript
store.set(key, data); // sets stringified data under key
store.setAll(data);   // sets all key/data pairs in the object
store.get(key);       // gets and parses data stored under key
store.getAll();       // gets all stored key/data pairs as an object 
store.clear();        // removes all data
store.has(key);       // returns true or false
store.remove(key);    // removes key and its data
store.each(callback); // called with key and data args, return false to exit early
store.keys();         // returns array of keys
store.size();         // returns number of keys;
```
