# store
A better way to use localStorage.

Download: [store.min.js](http://dongshaohan.github.io/store/store.min.js) or [store.js](http://dongshaohan.github.io/store/store.js)

##Documentation

	```javascript
	store.set(key, data); //
	store.setAll(data);   // 
	store.get(key);       // === store(key);
	store.getAll();                    // === store();
	store.clear();                     // === store(false);
	store.has(key);                    // returns true or false
	store.remove(key);                 // removes key and its data
	store.each(callback);              // called with key and data args, return false to exit early
	store.keys();                      // returns array of keys
	store.size();         // number of keys, not length of data
	```
