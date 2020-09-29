/**
    beautify-qrcode v1.0.3
    river
    https://github.com/gexin1/beautify-qrcode
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? factory(exports)
        : typeof define === 'function' && define.amd
        ? define(['exports'], factory)
        : ((global =
              typeof globalThis !== 'undefined' ? globalThis : global || self),
          factory((global.beautifyQrcode = {})));
})(this, function (exports) {
    'use strict';

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
                symbols = symbols.filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(
                        object,
                        sym
                    ).enumerable;
                });
            keys.push.apply(keys, symbols);
        }

        return keys;
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(
                    target,
                    Object.getOwnPropertyDescriptors(source)
                );
            } else {
                ownKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(
                        target,
                        key,
                        Object.getOwnPropertyDescriptor(source, key)
                    );
                });
            }
        }

        return target;
    }

    function _extends() {
        _extends =
            Object.assign ||
            function (target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];

                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }

                return target;
            };

        return _extends.apply(this, arguments);
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    /** Used for built-in method references. */
    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */

    function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal =
        typeof global == 'object' &&
        global &&
        global.Object === Object &&
        global;

    /** Detect free variable `self`. */

    var freeSelf =
        typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root = freeGlobal || freeSelf || Function('return this')();

    /** Built-in value references. */

    var Symbol$1 = root.Symbol;

    /** Used for built-in method references. */

    var objectProto$1 = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var nativeObjectToString = objectProto$1.toString;
    /** Built-in value references. */

    var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */

    function getRawTag(value) {
        var isOwn = hasOwnProperty$1.call(value, symToStringTag),
            tag = value[symToStringTag];

        try {
            value[symToStringTag] = undefined;
            var unmasked = true;
        } catch (e) {}

        var result = nativeObjectToString.call(value);

        if (unmasked) {
            if (isOwn) {
                value[symToStringTag] = tag;
            } else {
                delete value[symToStringTag];
            }
        }

        return result;
    }

    /** Used for built-in method references. */
    var objectProto$2 = Object.prototype;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var nativeObjectToString$1 = objectProto$2.toString;
    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */

    function objectToString(value) {
        return nativeObjectToString$1.call(value);
    }

    /** `Object#toString` result references. */

    var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';
    /** Built-in value references. */

    var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    function baseGetTag(value) {
        if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
        }

        return symToStringTag$1 && symToStringTag$1 in Object(value)
            ? getRawTag(value)
            : objectToString(value);
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
        return value != null && typeof value == 'object';
    }

    /** `Object#toString` result references. */

    var symbolTag = '[object Symbol]';
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */

    function isSymbol(value) {
        return (
            typeof value == 'symbol' ||
            (isObjectLike(value) && baseGetTag(value) == symbolTag)
        );
    }

    /** Used to match property names within property paths. */

    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/;
    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */

    function isKey(value, object) {
        if (isArray(value)) {
            return false;
        }

        var type = typeof value;

        if (
            type == 'number' ||
            type == 'symbol' ||
            type == 'boolean' ||
            value == null ||
            isSymbol(value)
        ) {
            return true;
        }

        return (
            reIsPlainProp.test(value) ||
            !reIsDeepProp.test(value) ||
            (object != null && value in Object(object))
        );
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
    }

    /** `Object#toString` result references. */

    var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */

    function isFunction(value) {
        if (!isObject(value)) {
            return false;
        } // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.

        var tag = baseGetTag(value);
        return (
            tag == funcTag ||
            tag == genTag ||
            tag == asyncTag ||
            tag == proxyTag
        );
    }

    /** Used to detect overreaching core-js shims. */

    var coreJsData = root['__core-js_shared__'];

    /** Used to detect methods masquerading as native. */

    var maskSrcKey = (function () {
        var uid = /[^.]+$/.exec(
            (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
        );
        return uid ? 'Symbol(src)_1.' + uid : '';
    })();
    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */

    function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
    }

    /** Used for built-in method references. */
    var funcProto = Function.prototype;
    /** Used to resolve the decompiled source of functions. */

    var funcToString = funcProto.toString;
    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */

    function toSource(func) {
        if (func != null) {
            try {
                return funcToString.call(func);
            } catch (e) {}

            try {
                return func + '';
            } catch (e) {}
        }

        return '';
    }

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */

    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    /** Used to detect host constructors (Safari). */

    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Used for built-in method references. */

    var funcProto$1 = Function.prototype,
        objectProto$3 = Object.prototype;
    /** Used to resolve the decompiled source of functions. */

    var funcToString$1 = funcProto$1.toString;
    /** Used to check objects for own properties. */

    var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
    /** Used to detect if a method is native. */

    var reIsNative = RegExp(
        '^' +
            funcToString$1
                .call(hasOwnProperty$2)
                .replace(reRegExpChar, '\\$&')
                .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?'
                ) +
            '$'
    );
    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */

    function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
            return false;
        }

        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
    }

    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
        return object == null ? undefined : object[key];
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */

    function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
    }

    /* Built-in method references that are verified to be native. */

    var nativeCreate = getNative(Object, 'create');

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */

    function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
    }

    /** Used to stand-in for `undefined` hash values. */

    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /** Used for built-in method references. */

    var objectProto$4 = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */

    function hashGet(key) {
        var data = this.__data__;

        if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
        }

        return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
    }

    /** Used for built-in method references. */

    var objectProto$5 = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */

    function hashHas(key) {
        var data = this.__data__;
        return nativeCreate
            ? data[key] !== undefined
            : hasOwnProperty$4.call(data, key);
    }

    /** Used to stand-in for `undefined` hash values. */

    var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */

    function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] =
            nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
        return this;
    }

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function Hash(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;
        this.clear();

        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    } // Add methods to `Hash`.

    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
        return value === other || (value !== value && other !== other);
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */

    function assocIndexOf(array, key) {
        var length = array.length;

        while (length--) {
            if (eq(array[length][0], key)) {
                return length;
            }
        }

        return -1;
    }

    /** Used for built-in method references. */

    var arrayProto = Array.prototype;
    /** Built-in value references. */

    var splice = arrayProto.splice;
    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */

    function listCacheDelete(key) {
        var data = this.__data__,
            index = assocIndexOf(data, key);

        if (index < 0) {
            return false;
        }

        var lastIndex = data.length - 1;

        if (index == lastIndex) {
            data.pop();
        } else {
            splice.call(data, index, 1);
        }

        --this.size;
        return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */

    function listCacheGet(key) {
        var data = this.__data__,
            index = assocIndexOf(data, key);
        return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */

    function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */

    function listCacheSet(key, value) {
        var data = this.__data__,
            index = assocIndexOf(data, key);

        if (index < 0) {
            ++this.size;
            data.push([key, value]);
        } else {
            data[index][1] = value;
        }

        return this;
    }

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function ListCache(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;
        this.clear();

        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    } // Add methods to `ListCache`.

    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /* Built-in method references that are verified to be native. */

    var Map$1 = getNative(root, 'Map');

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */

    function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
            hash: new Hash(),
            map: new (Map$1 || ListCache)(),
            string: new Hash(),
        };
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
        var type = typeof value;
        return type == 'string' ||
            type == 'number' ||
            type == 'symbol' ||
            type == 'boolean'
            ? value !== '__proto__'
            : value === null;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */

    function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key)
            ? data[typeof key == 'string' ? 'string' : 'hash']
            : data.map;
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */

    function mapCacheDelete(key) {
        var result = getMapData(this, key)['delete'](key);
        this.size -= result ? 1 : 0;
        return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */

    function mapCacheGet(key) {
        return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */

    function mapCacheHas(key) {
        return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */

    function mapCacheSet(key, value) {
        var data = getMapData(this, key),
            size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
    }

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function MapCache(entries) {
        var index = -1,
            length = entries == null ? 0 : entries.length;
        this.clear();

        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    } // Add methods to `MapCache`.

    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /** Error message constants. */

    var FUNC_ERROR_TEXT = 'Expected a function';
    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */

    function memoize(func, resolver) {
        if (
            typeof func != 'function' ||
            (resolver != null && typeof resolver != 'function')
        ) {
            throw new TypeError(FUNC_ERROR_TEXT);
        }

        var memoized = function () {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

            if (cache.has(key)) {
                return cache.get(key);
            }

            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result) || cache;
            return result;
        };

        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
    } // Expose `MapCache`.

    memoize.Cache = MapCache;

    /** Used as the maximum memoize cache size. */

    var MAX_MEMOIZE_SIZE = 500;
    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */

    function memoizeCapped(func) {
        var result = memoize(func, function (key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
            }

            return key;
        });
        var cache = result.cache;
        return result;
    }

    /** Used to match property names within property paths. */

    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    /** Used to match backslashes in property paths. */

    var reEscapeChar = /\\(\\)?/g;
    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */

    var stringToPath = memoizeCapped(function (string) {
        var result = [];

        if (
            string.charCodeAt(0) === 46
            /* . */
        ) {
            result.push('');
        }

        string.replace(rePropName, function (match, number, quote, subString) {
            result.push(
                quote ? subString.replace(reEscapeChar, '$1') : number || match
            );
        });
        return result;
    });

    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length,
            result = Array(length);

        while (++index < length) {
            result[index] = iteratee(array[index], index, array);
        }

        return result;
    }

    /** Used as references for various `Number` constants. */

    var INFINITY = 1 / 0;
    /** Used to convert symbols to primitives and strings. */

    var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;
    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */

    function baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == 'string') {
            return value;
        }

        if (isArray(value)) {
            // Recursively convert values (susceptible to call stack limits).
            return arrayMap(value, baseToString) + '';
        }

        if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
        }

        var result = value + '';
        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */

    function toString(value) {
        return value == null ? '' : baseToString(value);
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */

    function castPath(value, object) {
        if (isArray(value)) {
            return value;
        }

        return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /** `Object#toString` result references. */

    var argsTag = '[object Arguments]';
    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */

    function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /** Used for built-in method references. */

    var objectProto$6 = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
    /** Built-in value references. */

    var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */

    var isArguments = baseIsArguments(
        (function () {
            return arguments;
        })()
    )
        ? baseIsArguments
        : function (value) {
              return (
                  isObjectLike(value) &&
                  hasOwnProperty$5.call(value, 'callee') &&
                  !propertyIsEnumerable.call(value, 'callee')
              );
          };

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;
    /** Used to detect unsigned integer values. */

    var reIsUint = /^(?:0|[1-9]\d*)$/;
    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */

    function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return (
            !!length &&
            (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
            value > -1 &&
            value % 1 == 0 &&
            value < length
        );
    }

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER$1 = 9007199254740991;
    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */

    function isLength(value) {
        return (
            typeof value == 'number' &&
            value > -1 &&
            value % 1 == 0 &&
            value <= MAX_SAFE_INTEGER$1
        );
    }

    /** Used as references for various `Number` constants. */

    var INFINITY$1 = 1 / 0;
    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */

    function toKey(value) {
        if (typeof value == 'string' || isSymbol(value)) {
            return value;
        }

        var result = value + '';
        return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */

    function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1,
            length = path.length,
            result = false;

        while (++index < length) {
            var key = toKey(path[index]);

            if (!(result = object != null && hasFunc(object, key))) {
                break;
            }

            object = object[key];
        }

        if (result || ++index != length) {
            return result;
        }

        length = object == null ? 0 : object.length;
        return (
            !!length &&
            isLength(length) &&
            isIndex(key, length) &&
            (isArray(object) || isArguments(object))
        );
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */

    function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */

    function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
        var data = this.__data__,
            result = data['delete'](key);
        this.size = data.size;
        return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
        return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
        return this.__data__.has(key);
    }

    /** Used as the size to enable large array optimizations. */

    var LARGE_ARRAY_SIZE = 200;
    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */

    function stackSet(key, value) {
        var data = this.__data__;

        if (data instanceof ListCache) {
            var pairs = data.__data__;

            if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
            }

            data = this.__data__ = new MapCache(pairs);
        }

        data.set(key, value);
        this.size = data.size;
        return this;
    }

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function Stack(entries) {
        var data = (this.__data__ = new ListCache(entries));
        this.size = data.size;
    } // Add methods to `Stack`.

    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length;

        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }

        return array;
    }

    var defineProperty = (function () {
        try {
            var func = getNative(Object, 'defineProperty');
            func({}, '', {});
            return func;
        } catch (e) {}
    })();

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */

    function baseAssignValue(object, key, value) {
        if (key == '__proto__' && defineProperty) {
            defineProperty(object, key, {
                configurable: true,
                enumerable: true,
                value: value,
                writable: true,
            });
        } else {
            object[key] = value;
        }
    }

    /** Used for built-in method references. */

    var objectProto$7 = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */

    function assignValue(object, key, value) {
        var objValue = object[key];

        if (
            !(hasOwnProperty$6.call(object, key) && eq(objValue, value)) ||
            (value === undefined && !(key in object))
        ) {
            baseAssignValue(object, key, value);
        }
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */

    function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1,
            length = props.length;

        while (++index < length) {
            var key = props[index];
            var newValue = customizer
                ? customizer(object[key], source[key], key, object, source)
                : undefined;

            if (newValue === undefined) {
                newValue = source[key];
            }

            if (isNew) {
                baseAssignValue(object, key, newValue);
            } else {
                assignValue(object, key, newValue);
            }
        }

        return object;
    }

    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);

        while (++index < n) {
            result[index] = iteratee(index);
        }

        return result;
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
        return false;
    }

    /** Detect free variable `exports`. */

    var freeExports =
        typeof exports == 'object' && exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule =
        freeExports &&
        typeof module == 'object' &&
        module &&
        !module.nodeType &&
        module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Built-in value references. */

    var Buffer = moduleExports ? root.Buffer : undefined;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */

    var isBuffer = nativeIsBuffer || stubFalse;

    /** `Object#toString` result references. */

    var argsTag$1 = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag$1 = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';
    /** Used to identify `toStringTag` values of typed arrays. */

    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[
        int8Tag
    ] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[
        uint8Tag
    ] = typedArrayTags[uint8ClampedTag] = typedArrayTags[
        uint16Tag
    ] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[
        arrayBufferTag
    ] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[
        dateTag
    ] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[
        mapTag
    ] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[
        regexpTag
    ] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[
        weakMapTag
    ] = false;
    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */

    function baseIsTypedArray(value) {
        return (
            isObjectLike(value) &&
            isLength(value.length) &&
            !!typedArrayTags[baseGetTag(value)]
        );
    }

    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */
    function baseUnary(func) {
        return function (value) {
            return func(value);
        };
    }

    /** Detect free variable `exports`. */

    var freeExports$1 =
        typeof exports == 'object' && exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule$1 =
        freeExports$1 &&
        typeof module == 'object' &&
        module &&
        !module.nodeType &&
        module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports$1 =
        freeModule$1 && freeModule$1.exports === freeExports$1;
    /** Detect free variable `process` from Node.js. */

    var freeProcess = moduleExports$1 && freeGlobal.process;
    /** Used to access faster Node.js helpers. */

    var nodeUtil = (function () {
        try {
            // Use `util.types` for Node.js 10+.
            var types =
                freeModule$1 &&
                freeModule$1.require &&
                freeModule$1.require('util').types;

            if (types) {
                return types;
            } // Legacy `process.binding('util')` for Node.js < 10.

            return (
                freeProcess &&
                freeProcess.binding &&
                freeProcess.binding('util')
            );
        } catch (e) {}
    })();

    /* Node.js helper references. */

    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */

    var isTypedArray = nodeIsTypedArray
        ? baseUnary(nodeIsTypedArray)
        : baseIsTypedArray;

    /** Used for built-in method references. */

    var objectProto$8 = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */

    function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
            isArg = !isArr && isArguments(value),
            isBuff = !isArr && !isArg && isBuffer(value),
            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes ? baseTimes(value.length, String) : [],
            length = result.length;

        for (var key in value) {
            if (
                (inherited || hasOwnProperty$7.call(value, key)) &&
                !(
                    skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
                    (key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
                        (isBuff && (key == 'offset' || key == 'parent')) || // PhantomJS 2 has enumerable non-index properties on typed arrays.
                        (isType &&
                            (key == 'buffer' ||
                                key == 'byteLength' ||
                                key == 'byteOffset')) || // Skip index properties.
                        isIndex(key, length))
                )
            ) {
                result.push(key);
            }
        }

        return result;
    }

    /** Used for built-in method references. */
    var objectProto$9 = Object.prototype;
    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */

    function isPrototype(value) {
        var Ctor = value && value.constructor,
            proto =
                (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;
        return value === proto;
    }

    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
        return function (arg) {
            return func(transform(arg));
        };
    }

    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeKeys = overArg(Object.keys, Object);

    /** Used for built-in method references. */

    var objectProto$a = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */

    function baseKeys(object) {
        if (!isPrototype(object)) {
            return nativeKeys(object);
        }

        var result = [];

        for (var key in Object(object)) {
            if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
                result.push(key);
            }
        }

        return result;
    }

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */

    function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */

    function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */

    function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
        var result = [];

        if (object != null) {
            for (var key in Object(object)) {
                result.push(key);
            }
        }

        return result;
    }

    /** Used for built-in method references. */

    var objectProto$b = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */

    function baseKeysIn(object) {
        if (!isObject(object)) {
            return nativeKeysIn(object);
        }

        var isProto = isPrototype(object),
            result = [];

        for (var key in object) {
            if (
                !(
                    key == 'constructor' &&
                    (isProto || !hasOwnProperty$9.call(object, key))
                )
            ) {
                result.push(key);
            }
        }

        return result;
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */

    function keysIn$1(object) {
        return isArrayLike(object)
            ? arrayLikeKeys(object, true)
            : baseKeysIn(object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */

    function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn$1(source), object);
    }

    /** Detect free variable `exports`. */

    var freeExports$2 =
        typeof exports == 'object' && exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule$2 =
        freeExports$2 &&
        typeof module == 'object' &&
        module &&
        !module.nodeType &&
        module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports$2 =
        freeModule$2 && freeModule$2.exports === freeExports$2;
    /** Built-in value references. */

    var Buffer$1 = moduleExports$2 ? root.Buffer : undefined,
        allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;
    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */

    function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
            return buffer.slice();
        }

        var length = buffer.length,
            result = allocUnsafe
                ? allocUnsafe(length)
                : new buffer.constructor(length);
        buffer.copy(result);
        return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
        var index = -1,
            length = source.length;
        array || (array = Array(length));

        while (++index < length) {
            array[index] = source[index];
        }

        return array;
    }

    /**
     * A specialized version of `_.filter` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length,
            resIndex = 0,
            result = [];

        while (++index < length) {
            var value = array[index];

            if (predicate(value, index, array)) {
                result[resIndex++] = value;
            }
        }

        return result;
    }

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
        return [];
    }

    /** Used for built-in method references. */

    var objectProto$c = Object.prototype;
    /** Built-in value references. */

    var propertyIsEnumerable$1 = objectProto$c.propertyIsEnumerable;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeGetSymbols = Object.getOwnPropertySymbols;
    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */

    var getSymbols = !nativeGetSymbols
        ? stubArray
        : function (object) {
              if (object == null) {
                  return [];
              }

              object = Object(object);
              return arrayFilter(nativeGetSymbols(object), function (symbol) {
                  return propertyIsEnumerable$1.call(object, symbol);
              });
          };

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */

    function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
    }

    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;

        while (++index < length) {
            array[offset + index] = values[index];
        }

        return array;
    }

    /** Built-in value references. */

    var getPrototype = overArg(Object.getPrototypeOf, Object);

    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */

    var getSymbolsIn = !nativeGetSymbols$1
        ? stubArray
        : function (object) {
              var result = [];

              while (object) {
                  arrayPush(result, getSymbols(object));
                  object = getPrototype(object);
              }

              return result;
          };

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */

    function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */

    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object)
            ? result
            : arrayPush(result, symbolsFunc(object));
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */

    function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */

    function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
    }

    /* Built-in method references that are verified to be native. */

    var DataView = getNative(root, 'DataView');

    /* Built-in method references that are verified to be native. */

    var Promise$1 = getNative(root, 'Promise');

    /* Built-in method references that are verified to be native. */

    var Set$1 = getNative(root, 'Set');

    /* Built-in method references that are verified to be native. */

    var WeakMap = getNative(root, 'WeakMap');

    /** `Object#toString` result references. */

    var mapTag$1 = '[object Map]',
        objectTag$1 = '[object Object]',
        promiseTag = '[object Promise]',
        setTag$1 = '[object Set]',
        weakMapTag$1 = '[object WeakMap]';
    var dataViewTag$1 = '[object DataView]';
    /** Used to detect maps, sets, and weakmaps. */

    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map$1),
        promiseCtorString = toSource(Promise$1),
        setCtorString = toSource(Set$1),
        weakMapCtorString = toSource(WeakMap);
    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

    if (
        (DataView &&
            getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
        (Map$1 && getTag(new Map$1()) != mapTag$1) ||
        (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
        (Set$1 && getTag(new Set$1()) != setTag$1) ||
        (WeakMap && getTag(new WeakMap()) != weakMapTag$1)
    ) {
        getTag = function (value) {
            var result = baseGetTag(value),
                Ctor = result == objectTag$1 ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : '';

            if (ctorString) {
                switch (ctorString) {
                    case dataViewCtorString:
                        return dataViewTag$1;

                    case mapCtorString:
                        return mapTag$1;

                    case promiseCtorString:
                        return promiseTag;

                    case setCtorString:
                        return setTag$1;

                    case weakMapCtorString:
                        return weakMapTag$1;
                }
            }

            return result;
        };
    }

    var getTag$1 = getTag;

    /** Used for built-in method references. */
    var objectProto$d = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$a = objectProto$d.hasOwnProperty;
    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */

    function initCloneArray(array) {
        var length = array.length,
            result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

        if (
            length &&
            typeof array[0] == 'string' &&
            hasOwnProperty$a.call(array, 'index')
        ) {
            result.index = array.index;
            result.input = array.input;
        }

        return result;
    }

    /** Built-in value references. */

    var Uint8Array = root.Uint8Array;

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */

    function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result).set(new Uint8Array(arrayBuffer));
        return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */

    function cloneDataView(dataView, isDeep) {
        var buffer = isDeep
            ? cloneArrayBuffer(dataView.buffer)
            : dataView.buffer;
        return new dataView.constructor(
            buffer,
            dataView.byteOffset,
            dataView.byteLength
        );
    }

    /** Used to match `RegExp` flags from their coerced string values. */
    var reFlags = /\w*$/;
    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */

    function cloneRegExp(regexp) {
        var result = new regexp.constructor(
            regexp.source,
            reFlags.exec(regexp)
        );
        result.lastIndex = regexp.lastIndex;
        return result;
    }

    /** Used to convert symbols to primitives and strings. */

    var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
        symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */

    function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */

    function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep
            ? cloneArrayBuffer(typedArray.buffer)
            : typedArray.buffer;
        return new typedArray.constructor(
            buffer,
            typedArray.byteOffset,
            typedArray.length
        );
    }

    /** `Object#toString` result references. */

    var boolTag$1 = '[object Boolean]',
        dateTag$1 = '[object Date]',
        mapTag$2 = '[object Map]',
        numberTag$1 = '[object Number]',
        regexpTag$1 = '[object RegExp]',
        setTag$2 = '[object Set]',
        stringTag$1 = '[object String]',
        symbolTag$1 = '[object Symbol]';
    var arrayBufferTag$1 = '[object ArrayBuffer]',
        dataViewTag$2 = '[object DataView]',
        float32Tag$1 = '[object Float32Array]',
        float64Tag$1 = '[object Float64Array]',
        int8Tag$1 = '[object Int8Array]',
        int16Tag$1 = '[object Int16Array]',
        int32Tag$1 = '[object Int32Array]',
        uint8Tag$1 = '[object Uint8Array]',
        uint8ClampedTag$1 = '[object Uint8ClampedArray]',
        uint16Tag$1 = '[object Uint16Array]',
        uint32Tag$1 = '[object Uint32Array]';
    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */

    function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;

        switch (tag) {
            case arrayBufferTag$1:
                return cloneArrayBuffer(object);

            case boolTag$1:
            case dateTag$1:
                return new Ctor(+object);

            case dataViewTag$2:
                return cloneDataView(object, isDeep);

            case float32Tag$1:
            case float64Tag$1:
            case int8Tag$1:
            case int16Tag$1:
            case int32Tag$1:
            case uint8Tag$1:
            case uint8ClampedTag$1:
            case uint16Tag$1:
            case uint32Tag$1:
                return cloneTypedArray(object, isDeep);

            case mapTag$2:
                return new Ctor();

            case numberTag$1:
            case stringTag$1:
                return new Ctor(object);

            case regexpTag$1:
                return cloneRegExp(object);

            case setTag$2:
                return new Ctor();

            case symbolTag$1:
                return cloneSymbol(object);
        }
    }

    /** Built-in value references. */

    var objectCreate = Object.create;
    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */

    var baseCreate = (function () {
        function object() {}

        return function (proto) {
            if (!isObject(proto)) {
                return {};
            }

            if (objectCreate) {
                return objectCreate(proto);
            }

            object.prototype = proto;
            var result = new object();
            object.prototype = undefined;
            return result;
        };
    })();

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */

    function initCloneObject(object) {
        return typeof object.constructor == 'function' && !isPrototype(object)
            ? baseCreate(getPrototype(object))
            : {};
    }

    /** `Object#toString` result references. */

    var mapTag$3 = '[object Map]';
    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */

    function baseIsMap(value) {
        return isObjectLike(value) && getTag$1(value) == mapTag$3;
    }

    /* Node.js helper references. */

    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */

    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /** `Object#toString` result references. */

    var setTag$3 = '[object Set]';
    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */

    function baseIsSet(value) {
        return isObjectLike(value) && getTag$1(value) == setTag$3;
    }

    /* Node.js helper references. */

    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */

    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /** Used to compose bitmasks for cloning. */

    var CLONE_DEEP_FLAG = 1,
        CLONE_FLAT_FLAG = 2,
        CLONE_SYMBOLS_FLAG = 4;
    /** `Object#toString` result references. */

    var argsTag$2 = '[object Arguments]',
        arrayTag$1 = '[object Array]',
        boolTag$2 = '[object Boolean]',
        dateTag$2 = '[object Date]',
        errorTag$1 = '[object Error]',
        funcTag$2 = '[object Function]',
        genTag$1 = '[object GeneratorFunction]',
        mapTag$4 = '[object Map]',
        numberTag$2 = '[object Number]',
        objectTag$2 = '[object Object]',
        regexpTag$2 = '[object RegExp]',
        setTag$4 = '[object Set]',
        stringTag$2 = '[object String]',
        symbolTag$2 = '[object Symbol]',
        weakMapTag$2 = '[object WeakMap]';
    var arrayBufferTag$2 = '[object ArrayBuffer]',
        dataViewTag$3 = '[object DataView]',
        float32Tag$2 = '[object Float32Array]',
        float64Tag$2 = '[object Float64Array]',
        int8Tag$2 = '[object Int8Array]',
        int16Tag$2 = '[object Int16Array]',
        int32Tag$2 = '[object Int32Array]',
        uint8Tag$2 = '[object Uint8Array]',
        uint8ClampedTag$2 = '[object Uint8ClampedArray]',
        uint16Tag$2 = '[object Uint16Array]',
        uint32Tag$2 = '[object Uint32Array]';
    /** Used to identify `toStringTag` values supported by `_.clone`. */

    var cloneableTags = {};
    cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] = cloneableTags[
        arrayBufferTag$2
    ] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[
        dateTag$2
    ] = cloneableTags[float32Tag$2] = cloneableTags[
        float64Tag$2
    ] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[
        int32Tag$2
    ] = cloneableTags[mapTag$4] = cloneableTags[numberTag$2] = cloneableTags[
        objectTag$2
    ] = cloneableTags[regexpTag$2] = cloneableTags[setTag$4] = cloneableTags[
        stringTag$2
    ] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$2] = cloneableTags[
        uint8ClampedTag$2
    ] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
    cloneableTags[errorTag$1] = cloneableTags[funcTag$2] = cloneableTags[
        weakMapTag$2
    ] = false;
    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */

    function baseClone(value, bitmask, customizer, key, object, stack) {
        var result,
            isDeep = bitmask & CLONE_DEEP_FLAG,
            isFlat = bitmask & CLONE_FLAT_FLAG,
            isFull = bitmask & CLONE_SYMBOLS_FLAG;

        if (customizer) {
            result = object
                ? customizer(value, key, object, stack)
                : customizer(value);
        }

        if (result !== undefined) {
            return result;
        }

        if (!isObject(value)) {
            return value;
        }

        var isArr = isArray(value);

        if (isArr) {
            result = initCloneArray(value);

            if (!isDeep) {
                return copyArray(value, result);
            }
        } else {
            var tag = getTag$1(value),
                isFunc = tag == funcTag$2 || tag == genTag$1;

            if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
            }

            if (tag == objectTag$2 || tag == argsTag$2 || (isFunc && !object)) {
                result = isFlat || isFunc ? {} : initCloneObject(value);

                if (!isDeep) {
                    return isFlat
                        ? copySymbolsIn(value, baseAssignIn(result, value))
                        : copySymbols(value, baseAssign(result, value));
                }
            } else {
                if (!cloneableTags[tag]) {
                    return object ? value : {};
                }

                result = initCloneByTag(value, tag, isDeep);
            }
        } // Check for circular references and return its corresponding clone.

        stack || (stack = new Stack());
        var stacked = stack.get(value);

        if (stacked) {
            return stacked;
        }

        stack.set(value, result);

        if (isSet(value)) {
            value.forEach(function (subValue) {
                result.add(
                    baseClone(
                        subValue,
                        bitmask,
                        customizer,
                        subValue,
                        value,
                        stack
                    )
                );
            });
        } else if (isMap(value)) {
            value.forEach(function (subValue, key) {
                result.set(
                    key,
                    baseClone(subValue, bitmask, customizer, key, value, stack)
                );
            });
        }

        var keysFunc = isFull
            ? isFlat
                ? getAllKeysIn
                : getAllKeys
            : isFlat
            ? keysIn
            : keys;
        var props = isArr ? undefined : keysFunc(value);
        arrayEach(props || value, function (subValue, key) {
            if (props) {
                key = subValue;
                subValue = value[key];
            } // Recursively populate clone (susceptible to call stack limits).

            assignValue(
                result,
                key,
                baseClone(subValue, bitmask, customizer, key, value, stack)
            );
        });
        return result;
    }

    /** Used to compose bitmasks for cloning. */

    var CLONE_DEEP_FLAG$1 = 1,
        CLONE_SYMBOLS_FLAG$1 = 4;
    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */

    function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == 'function' ? customizer : undefined;
        return baseClone(
            value,
            CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1,
            customizer
        );
    }

    /** `Object#toString` result references. */

    var stringTag$3 = '[object String]';
    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */

    function isString(value) {
        return (
            typeof value == 'string' ||
            (!isArray(value) &&
                isObjectLike(value) &&
                baseGetTag(value) == stringTag$3)
        );
    }

    /**
     * Converts `iterator` to an array.
     *
     * @private
     * @param {Object} iterator The iterator to convert.
     * @returns {Array} Returns the converted array.
     */
    function iteratorToArray(iterator) {
        var data,
            result = [];

        while (!(data = iterator.next()).done) {
            result.push(data.value);
        }

        return result;
    }

    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */
    function mapToArray(map) {
        var index = -1,
            result = Array(map.size);
        map.forEach(function (value, key) {
            result[++index] = [key, value];
        });
        return result;
    }

    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function (value) {
            result[++index] = value;
        });
        return result;
    }

    /**
     * Converts an ASCII `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
    function asciiToArray(string) {
        return string.split('');
    }

    /** Used to compose unicode character classes. */
    var rsAstralRange = '\\ud800-\\udfff',
        rsComboMarksRange = '\\u0300-\\u036f',
        reComboHalfMarksRange = '\\ufe20-\\ufe2f',
        rsComboSymbolsRange = '\\u20d0-\\u20ff',
        rsComboRange =
            rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
        rsVarRange = '\\ufe0e\\ufe0f';
    /** Used to compose unicode capture groups. */

    var rsZWJ = '\\u200d';
    /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

    var reHasUnicode = RegExp(
        '[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']'
    );
    /**
     * Checks if `string` contains Unicode symbols.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {boolean} Returns `true` if a symbol is found, else `false`.
     */

    function hasUnicode(string) {
        return reHasUnicode.test(string);
    }

    /** Used to compose unicode character classes. */
    var rsAstralRange$1 = '\\ud800-\\udfff',
        rsComboMarksRange$1 = '\\u0300-\\u036f',
        reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
        rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
        rsComboRange$1 =
            rsComboMarksRange$1 +
            reComboHalfMarksRange$1 +
            rsComboSymbolsRange$1,
        rsVarRange$1 = '\\ufe0e\\ufe0f';
    /** Used to compose unicode capture groups. */

    var rsAstral = '[' + rsAstralRange$1 + ']',
        rsCombo = '[' + rsComboRange$1 + ']',
        rsFitz = '\\ud83c[\\udffb-\\udfff]',
        rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
        rsNonAstral = '[^' + rsAstralRange$1 + ']',
        rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        rsZWJ$1 = '\\u200d';
    /** Used to compose unicode regexes. */

    var reOptMod = rsModifier + '?',
        rsOptVar = '[' + rsVarRange$1 + ']?',
        rsOptJoin =
            '(?:' +
            rsZWJ$1 +
            '(?:' +
            [rsNonAstral, rsRegional, rsSurrPair].join('|') +
            ')' +
            rsOptVar +
            reOptMod +
            ')*',
        rsSeq = rsOptVar + reOptMod + rsOptJoin,
        rsSymbol =
            '(?:' +
            [
                rsNonAstral + rsCombo + '?',
                rsCombo,
                rsRegional,
                rsSurrPair,
                rsAstral,
            ].join('|') +
            ')';
    /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

    var reUnicode = RegExp(
        rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq,
        'g'
    );
    /**
     * Converts a Unicode `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */

    function unicodeToArray(string) {
        return string.match(reUnicode) || [];
    }

    /**
     * Converts `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */

    function stringToArray(string) {
        return hasUnicode(string)
            ? unicodeToArray(string)
            : asciiToArray(string);
    }

    /**
     * The base implementation of `_.values` and `_.valuesIn` which creates an
     * array of `object` property values corresponding to the property names
     * of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the array of property values.
     */

    function baseValues(object, props) {
        return arrayMap(props, function (key) {
            return object[key];
        });
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */

    function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
    }

    /** `Object#toString` result references. */

    var mapTag$5 = '[object Map]',
        setTag$5 = '[object Set]';
    /** Built-in value references. */

    var symIterator = Symbol$1 ? Symbol$1.iterator : undefined;
    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */

    function toArray(value) {
        if (!value) {
            return [];
        }

        if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
        }

        if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
        }

        var tag = getTag$1(value),
            func =
                tag == mapTag$5
                    ? mapToArray
                    : tag == setTag$5
                    ? setToArray
                    : values;
        return func(value);
    }

    var toString$1 = Object.prototype.toString;
    var errorToString = Error.prototype.toString;
    var regExpToString = RegExp.prototype.toString;
    var symbolToString$1 =
        typeof Symbol !== 'undefined'
            ? Symbol.prototype.toString
            : function () {
                  return '';
              };
    var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;

    function printNumber(val) {
        if (val != +val) return 'NaN';
        var isNegativeZero = val === 0 && 1 / val < 0;
        return isNegativeZero ? '-0' : '' + val;
    }

    function printSimpleValue(val, quoteStrings) {
        if (quoteStrings === void 0) {
            quoteStrings = false;
        }

        if (val == null || val === true || val === false) return '' + val;
        var typeOf = typeof val;
        if (typeOf === 'number') return printNumber(val);
        if (typeOf === 'string') return quoteStrings ? '"' + val + '"' : val;
        if (typeOf === 'function')
            return '[Function ' + (val.name || 'anonymous') + ']';
        if (typeOf === 'symbol')
            return symbolToString$1
                .call(val)
                .replace(SYMBOL_REGEXP, 'Symbol($1)');
        var tag = toString$1.call(val).slice(8, -1);
        if (tag === 'Date')
            return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
        if (tag === 'Error' || val instanceof Error)
            return '[' + errorToString.call(val) + ']';
        if (tag === 'RegExp') return regExpToString.call(val);
        return null;
    }

    function printValue(value, quoteStrings) {
        var result = printSimpleValue(value, quoteStrings);
        if (result !== null) return result;
        return JSON.stringify(
            value,
            function (key, value) {
                var result = printSimpleValue(this[key], quoteStrings);
                if (result !== null) return result;
                return value;
            },
            2
        );
    }

    var mixed = {
        default: '${path} is invalid',
        required: '${path} is a required field',
        oneOf: '${path} must be one of the following values: ${values}',
        notOneOf: '${path} must not be one of the following values: ${values}',
        notType: function notType(_ref) {
            var path = _ref.path,
                type = _ref.type,
                value = _ref.value,
                originalValue = _ref.originalValue;
            var isCast = originalValue != null && originalValue !== value;
            var msg =
                path +
                ' must be a `' +
                type +
                '` type, ' +
                ('but the final value was: `' + printValue(value, true) + '`') +
                (isCast
                    ? ' (cast from the value `' +
                      printValue(originalValue, true) +
                      '`).'
                    : '.');

            if (value === null) {
                msg +=
                    '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`';
            }

            return msg;
        },
        defined: '${path} must be defined',
    };
    var string = {
        length: '${path} must be exactly ${length} characters',
        min: '${path} must be at least ${min} characters',
        max: '${path} must be at most ${max} characters',
        matches: '${path} must match the following: "${regex}"',
        email: '${path} must be a valid email',
        url: '${path} must be a valid URL',
        uuid: '${path} must be a valid UUID',
        trim: '${path} must be a trimmed string',
        lowercase: '${path} must be a lowercase string',
        uppercase: '${path} must be a upper case string',
    };
    var number = {
        min: '${path} must be greater than or equal to ${min}',
        max: '${path} must be less than or equal to ${max}',
        lessThan: '${path} must be less than ${less}',
        moreThan: '${path} must be greater than ${more}',
        notEqual: '${path} must be not equal to ${notEqual}',
        positive: '${path} must be a positive number',
        negative: '${path} must be a negative number',
        integer: '${path} must be an integer',
    };
    var date = {
        min: '${path} field must be later than ${min}',
        max: '${path} field must be at earlier than ${max}',
    };
    var object = {
        noUnknown: '${path} field has unspecified keys: ${unknown}',
    };
    var array = {
        min: '${path} field must have at least ${min} items',
        max: '${path} field must have less than or equal to ${max} items',
    };

    var isSchema = function (obj) {
        return obj && obj.__isYupSchema__;
    };

    var Condition = /*#__PURE__*/ (function () {
        function Condition(refs, options) {
            this.refs = refs;

            if (typeof options === 'function') {
                this.fn = options;
                return;
            }

            if (!has(options, 'is'))
                throw new TypeError(
                    '`is:` is required for `when()` conditions'
                );
            if (!options.then && !options.otherwise)
                throw new TypeError(
                    'either `then:` or `otherwise:` is required for `when()` conditions'
                );
            var is = options.is,
                then = options.then,
                otherwise = options.otherwise;
            var check =
                typeof is === 'function'
                    ? is
                    : function () {
                          for (
                              var _len = arguments.length,
                                  values = new Array(_len),
                                  _key = 0;
                              _key < _len;
                              _key++
                          ) {
                              values[_key] = arguments[_key];
                          }

                          return values.every(function (value) {
                              return value === is;
                          });
                      };

            this.fn = function () {
                for (
                    var _len2 = arguments.length,
                        args = new Array(_len2),
                        _key2 = 0;
                    _key2 < _len2;
                    _key2++
                ) {
                    args[_key2] = arguments[_key2];
                }

                var options = args.pop();
                var schema = args.pop();
                var branch = check.apply(void 0, args) ? then : otherwise;
                if (!branch) return undefined;
                if (typeof branch === 'function') return branch(schema);
                return schema.concat(branch.resolve(options));
            };
        }

        var _proto = Condition.prototype;

        _proto.resolve = function resolve(base, options) {
            var values = this.refs.map(function (ref) {
                return ref.getValue(options);
            });
            var schema = this.fn.apply(base, values.concat(base, options));
            if (schema === undefined || schema === base) return base;
            if (!isSchema(schema))
                throw new TypeError('conditions must return a schema object');
            return schema.resolve(options);
        };

        return Condition;
    })();

    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;

        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }

        return target;
    }

    /* jshint node: true */

    function makeArrayFrom(obj) {
        return Array.prototype.slice.apply(obj);
    }

    var PENDING = 'pending',
        RESOLVED = 'resolved',
        REJECTED = 'rejected';

    function SynchronousPromise(handler) {
        this.status = PENDING;
        this._continuations = [];
        this._parent = null;
        this._paused = false;

        if (handler) {
            handler.call(
                this,
                this._continueWith.bind(this),
                this._failWith.bind(this)
            );
        }
    }

    function looksLikeAPromise(obj) {
        return obj && typeof obj.then === 'function';
    }

    function passThrough(value) {
        return value;
    }

    SynchronousPromise.prototype = {
        then: function (nextFn, catchFn) {
            var next = SynchronousPromise.unresolved()._setParent(this);

            if (this._isRejected()) {
                if (this._paused) {
                    this._continuations.push({
                        promise: next,
                        nextFn: nextFn,
                        catchFn: catchFn,
                    });

                    return next;
                }

                if (catchFn) {
                    try {
                        var catchResult = catchFn(this._error);

                        if (looksLikeAPromise(catchResult)) {
                            this._chainPromiseData(catchResult, next);

                            return next;
                        } else {
                            return SynchronousPromise.resolve(
                                catchResult
                            )._setParent(this);
                        }
                    } catch (e) {
                        return SynchronousPromise.reject(e)._setParent(this);
                    }
                }

                return SynchronousPromise.reject(this._error)._setParent(this);
            }

            this._continuations.push({
                promise: next,
                nextFn: nextFn,
                catchFn: catchFn,
            });

            this._runResolutions();

            return next;
        },
        catch: function (handler) {
            if (this._isResolved()) {
                return SynchronousPromise.resolve(this._data)._setParent(this);
            }

            var next = SynchronousPromise.unresolved()._setParent(this);

            this._continuations.push({
                promise: next,
                catchFn: handler,
            });

            this._runRejections();

            return next;
        },
        finally: function (callback) {
            var ran = false;

            function runFinally(result, err) {
                if (!ran) {
                    ran = true;

                    if (!callback) {
                        callback = passThrough;
                    }

                    var callbackResult = callback(result);

                    if (looksLikeAPromise(callbackResult)) {
                        return callbackResult.then(function () {
                            if (err) {
                                throw err;
                            }

                            return result;
                        });
                    } else {
                        return result;
                    }
                }
            }

            return this.then(function (result) {
                return runFinally(result);
            }).catch(function (err) {
                return runFinally(null, err);
            });
        },
        pause: function () {
            this._paused = true;
            return this;
        },
        resume: function () {
            var firstPaused = this._findFirstPaused();

            if (firstPaused) {
                firstPaused._paused = false;

                firstPaused._runResolutions();

                firstPaused._runRejections();
            }

            return this;
        },
        _findAncestry: function () {
            return this._continuations.reduce(function (acc, cur) {
                if (cur.promise) {
                    var node = {
                        promise: cur.promise,
                        children: cur.promise._findAncestry(),
                    };
                    acc.push(node);
                }

                return acc;
            }, []);
        },
        _setParent: function (parent) {
            if (this._parent) {
                throw new Error('parent already set');
            }

            this._parent = parent;
            return this;
        },
        _continueWith: function (data) {
            var firstPending = this._findFirstPending();

            if (firstPending) {
                firstPending._data = data;

                firstPending._setResolved();
            }
        },
        _findFirstPending: function () {
            return this._findFirstAncestor(function (test) {
                return test._isPending && test._isPending();
            });
        },
        _findFirstPaused: function () {
            return this._findFirstAncestor(function (test) {
                return test._paused;
            });
        },
        _findFirstAncestor: function (matching) {
            var test = this;
            var result;

            while (test) {
                if (matching(test)) {
                    result = test;
                }

                test = test._parent;
            }

            return result;
        },
        _failWith: function (error) {
            var firstRejected = this._findFirstPending();

            if (firstRejected) {
                firstRejected._error = error;

                firstRejected._setRejected();
            }
        },
        _takeContinuations: function () {
            return this._continuations.splice(0, this._continuations.length);
        },
        _runRejections: function () {
            if (this._paused || !this._isRejected()) {
                return;
            }

            var error = this._error,
                continuations = this._takeContinuations(),
                self = this;

            continuations.forEach(function (cont) {
                if (cont.catchFn) {
                    try {
                        var catchResult = cont.catchFn(error);

                        self._handleUserFunctionResult(
                            catchResult,
                            cont.promise
                        );
                    } catch (e) {
                        cont.promise.reject(e);
                    }
                } else {
                    cont.promise.reject(error);
                }
            });
        },
        _runResolutions: function () {
            if (this._paused || !this._isResolved() || this._isPending()) {
                return;
            }

            var continuations = this._takeContinuations();

            if (looksLikeAPromise(this._data)) {
                return this._handleWhenResolvedDataIsPromise(this._data);
            }

            var data = this._data;
            var self = this;
            continuations.forEach(function (cont) {
                if (cont.nextFn) {
                    try {
                        var result = cont.nextFn(data);

                        self._handleUserFunctionResult(result, cont.promise);
                    } catch (e) {
                        self._handleResolutionError(e, cont);
                    }
                } else if (cont.promise) {
                    cont.promise.resolve(data);
                }
            });
        },
        _handleResolutionError: function (e, continuation) {
            this._setRejected();

            if (continuation.catchFn) {
                try {
                    continuation.catchFn(e);
                    return;
                } catch (e2) {
                    e = e2;
                }
            }

            if (continuation.promise) {
                continuation.promise.reject(e);
            }
        },
        _handleWhenResolvedDataIsPromise: function (data) {
            var self = this;
            return data
                .then(function (result) {
                    self._data = result;

                    self._runResolutions();
                })
                .catch(function (error) {
                    self._error = error;

                    self._setRejected();

                    self._runRejections();
                });
        },
        _handleUserFunctionResult: function (data, nextSynchronousPromise) {
            if (looksLikeAPromise(data)) {
                this._chainPromiseData(data, nextSynchronousPromise);
            } else {
                nextSynchronousPromise.resolve(data);
            }
        },
        _chainPromiseData: function (promiseData, nextSynchronousPromise) {
            promiseData
                .then(function (newData) {
                    nextSynchronousPromise.resolve(newData);
                })
                .catch(function (newError) {
                    nextSynchronousPromise.reject(newError);
                });
        },
        _setResolved: function () {
            this.status = RESOLVED;

            if (!this._paused) {
                this._runResolutions();
            }
        },
        _setRejected: function () {
            this.status = REJECTED;

            if (!this._paused) {
                this._runRejections();
            }
        },
        _isPending: function () {
            return this.status === PENDING;
        },
        _isResolved: function () {
            return this.status === RESOLVED;
        },
        _isRejected: function () {
            return this.status === REJECTED;
        },
    };

    SynchronousPromise.resolve = function (result) {
        return new SynchronousPromise(function (resolve, reject) {
            if (looksLikeAPromise(result)) {
                result
                    .then(function (newResult) {
                        resolve(newResult);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            } else {
                resolve(result);
            }
        });
    };

    SynchronousPromise.reject = function (result) {
        return new SynchronousPromise(function (resolve, reject) {
            reject(result);
        });
    };

    SynchronousPromise.unresolved = function () {
        return new SynchronousPromise(function (resolve, reject) {
            this.resolve = resolve;
            this.reject = reject;
        });
    };

    SynchronousPromise.all = function () {
        var args = makeArrayFrom(arguments);

        if (Array.isArray(args[0])) {
            args = args[0];
        }

        if (!args.length) {
            return SynchronousPromise.resolve([]);
        }

        return new SynchronousPromise(function (resolve, reject) {
            var allData = [],
                numResolved = 0,
                doResolve = function () {
                    if (numResolved === args.length) {
                        resolve(allData);
                    }
                },
                rejected = false,
                doReject = function (err) {
                    if (rejected) {
                        return;
                    }

                    rejected = true;
                    reject(err);
                };

            args.forEach(function (arg, idx) {
                SynchronousPromise.resolve(arg)
                    .then(function (thisResult) {
                        allData[idx] = thisResult;
                        numResolved += 1;
                        doResolve();
                    })
                    .catch(function (err) {
                        doReject(err);
                    });
            });
        });
    };
    /* jshint ignore:start */

    if (Promise === SynchronousPromise) {
        throw new Error(
            'Please use SynchronousPromise.installGlobally() to install globally'
        );
    }

    var RealPromise = Promise;

    SynchronousPromise.installGlobally = function (__awaiter) {
        if (Promise === SynchronousPromise) {
            return __awaiter;
        }

        var result = patchAwaiterIfRequired(__awaiter);
        Promise = SynchronousPromise;
        return result;
    };

    SynchronousPromise.uninstallGlobally = function () {
        if (Promise === SynchronousPromise) {
            Promise = RealPromise;
        }
    };

    function patchAwaiterIfRequired(__awaiter) {
        if (typeof __awaiter === 'undefined' || __awaiter.__patched) {
            return __awaiter;
        }

        var originalAwaiter = __awaiter;

        __awaiter = function () {
            originalAwaiter.apply(this, makeArrayFrom(arguments));
        };

        __awaiter.__patched = true;
        return __awaiter;
    }
    /* jshint ignore:end */

    var synchronousPromise = {
        SynchronousPromise: SynchronousPromise,
    };

    var strReg = /\$\{\s*(\w+)\s*\}/g;

    var replace = function replace(str) {
        return function (params) {
            return str.replace(strReg, function (_, key) {
                return printValue(params[key]);
            });
        };
    };

    function ValidationError(errors, value, field, type) {
        var _this = this;

        this.name = 'ValidationError';
        this.value = value;
        this.path = field;
        this.type = type;
        this.errors = [];
        this.inner = [];
        if (errors)
            [].concat(errors).forEach(function (err) {
                _this.errors = _this.errors.concat(err.errors || err);
                if (err.inner)
                    _this.inner = _this.inner.concat(
                        err.inner.length ? err.inner : err
                    );
            });
        this.message =
            this.errors.length > 1
                ? this.errors.length + ' errors occurred'
                : this.errors[0];
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, ValidationError);
    }
    ValidationError.prototype = Object.create(Error.prototype);
    ValidationError.prototype.constructor = ValidationError;

    ValidationError.isError = function (err) {
        return err && err.name === 'ValidationError';
    };

    ValidationError.formatError = function (message, params) {
        if (typeof message === 'string') message = replace(message);

        var fn = function fn(params) {
            params.path = params.label || params.path || 'this';
            return typeof message === 'function' ? message(params) : message;
        };

        return arguments.length === 1 ? fn : fn(params);
    };

    var promise = function promise(sync) {
        return sync ? synchronousPromise.SynchronousPromise : Promise;
    };

    var unwrapError = function unwrapError(errors) {
        if (errors === void 0) {
            errors = [];
        }

        return errors.inner && errors.inner.length
            ? errors.inner
            : [].concat(errors);
    };

    function scopeToValue(promises, value, sync) {
        //console.log('scopeToValue', promises, value)
        var p = promise(sync).all(promises); //console.log('scopeToValue B', p)

        var b = p.catch(function (err) {
            if (err.name === 'ValidationError') err.value = value;
            throw err;
        }); //console.log('scopeToValue c', b)

        var c = b.then(function () {
            return value;
        }); //console.log('scopeToValue d', c)

        return c;
    }
    /**
     * If not failing on the first error, catch the errors
     * and collect them in an array
     */

    function propagateErrors(endEarly, errors) {
        return endEarly
            ? null
            : function (err) {
                  errors.push(err);
                  return err.value;
              };
    }
    function settled(promises, sync) {
        var Promise = promise(sync);
        return Promise.all(
            promises.map(function (p) {
                return Promise.resolve(p).then(
                    function (value) {
                        return {
                            fulfilled: true,
                            value: value,
                        };
                    },
                    function (value) {
                        return {
                            fulfilled: false,
                            value: value,
                        };
                    }
                );
            })
        );
    }
    function collectErrors(_ref) {
        var validations = _ref.validations,
            value = _ref.value,
            path = _ref.path,
            sync = _ref.sync,
            errors = _ref.errors,
            sort = _ref.sort;
        errors = unwrapError(errors);
        return settled(validations, sync).then(function (results) {
            var nestedErrors = results
                .filter(function (r) {
                    return !r.fulfilled;
                })
                .reduce(function (arr, _ref2) {
                    var error = _ref2.value; // we are only collecting validation errors

                    if (!ValidationError.isError(error)) {
                        throw error;
                    }

                    return arr.concat(error);
                }, []);
            if (sort) nestedErrors.sort(sort); //show parent errors after the nested ones: name.first, name

            errors = nestedErrors.concat(errors);
            if (errors.length) throw new ValidationError(errors, value, path);
            return value;
        });
    }
    function runValidations(_ref3) {
        var endEarly = _ref3.endEarly,
            options = _objectWithoutPropertiesLoose(_ref3, ['endEarly']);

        if (endEarly)
            return scopeToValue(
                options.validations,
                options.value,
                options.sync
            );
        return collectErrors(options);
    }

    var isObject$1 = function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    function prependDeep(target, source) {
        for (var key in source) {
            if (has(source, key)) {
                var sourceVal = source[key],
                    targetVal = target[key];

                if (targetVal === undefined) {
                    target[key] = sourceVal;
                } else if (targetVal === sourceVal) {
                    continue;
                } else if (isSchema(targetVal)) {
                    if (isSchema(sourceVal))
                        target[key] = sourceVal.concat(targetVal);
                } else if (isObject$1(targetVal)) {
                    if (isObject$1(sourceVal))
                        target[key] = prependDeep(targetVal, sourceVal);
                } else if (Array.isArray(targetVal)) {
                    if (Array.isArray(sourceVal))
                        target[key] = sourceVal.concat(targetVal);
                }
            }
        }

        return target;
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
        return function (object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;

            while (length--) {
                var key = props[fromRight ? length : ++index];

                if (iteratee(iterable[key], key, iterable) === false) {
                    break;
                }
            }

            return object;
        };
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */

    var baseFor = createBaseFor();

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */

    function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
    }

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */

    function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED$2);

        return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
        return this.__data__.has(value);
    }

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */

    function SetCache(values) {
        var index = -1,
            length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();

        while (++index < length) {
            this.add(values[index]);
        }
    } // Add methods to `SetCache`.

    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length;

        while (++index < length) {
            if (predicate(array[index], index, array)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Checks if a `cache` value for `key` exists.
     *
     * @private
     * @param {Object} cache The cache to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function cacheHas(cache, key) {
        return cache.has(key);
    }

    /** Used to compose bitmasks for value comparisons. */

    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */

    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
            arrLength = array.length,
            othLength = other.length;

        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
        } // Assume cyclic values are equal.

        var stacked = stack.get(array);

        if (stacked && stack.get(other)) {
            return stacked == other;
        }

        var index = -1,
            result = true,
            seen =
                bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
        stack.set(array, other);
        stack.set(other, array); // Ignore non-index properties.

        while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];

            if (customizer) {
                var compared = isPartial
                    ? customizer(othValue, arrValue, index, other, array, stack)
                    : customizer(
                          arrValue,
                          othValue,
                          index,
                          array,
                          other,
                          stack
                      );
            }

            if (compared !== undefined) {
                if (compared) {
                    continue;
                }

                result = false;
                break;
            } // Recursively compare arrays (susceptible to call stack limits).

            if (seen) {
                if (
                    !arraySome(other, function (othValue, othIndex) {
                        if (
                            !cacheHas(seen, othIndex) &&
                            (arrValue === othValue ||
                                equalFunc(
                                    arrValue,
                                    othValue,
                                    bitmask,
                                    customizer,
                                    stack
                                ))
                        ) {
                            return seen.push(othIndex);
                        }
                    })
                ) {
                    result = false;
                    break;
                }
            } else if (
                !(
                    arrValue === othValue ||
                    equalFunc(arrValue, othValue, bitmask, customizer, stack)
                )
            ) {
                result = false;
                break;
            }
        }

        stack['delete'](array);
        stack['delete'](other);
        return result;
    }

    /** Used to compose bitmasks for value comparisons. */

    var COMPARE_PARTIAL_FLAG$1 = 1,
        COMPARE_UNORDERED_FLAG$1 = 2;
    /** `Object#toString` result references. */

    var boolTag$3 = '[object Boolean]',
        dateTag$3 = '[object Date]',
        errorTag$2 = '[object Error]',
        mapTag$6 = '[object Map]',
        numberTag$3 = '[object Number]',
        regexpTag$3 = '[object RegExp]',
        setTag$6 = '[object Set]',
        stringTag$4 = '[object String]',
        symbolTag$3 = '[object Symbol]';
    var arrayBufferTag$3 = '[object ArrayBuffer]',
        dataViewTag$4 = '[object DataView]';
    /** Used to convert symbols to primitives and strings. */

    var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : undefined,
        symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;
    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */

    function equalByTag(
        object,
        other,
        tag,
        bitmask,
        customizer,
        equalFunc,
        stack
    ) {
        switch (tag) {
            case dataViewTag$4:
                if (
                    object.byteLength != other.byteLength ||
                    object.byteOffset != other.byteOffset
                ) {
                    return false;
                }

                object = object.buffer;
                other = other.buffer;

            case arrayBufferTag$3:
                if (
                    object.byteLength != other.byteLength ||
                    !equalFunc(new Uint8Array(object), new Uint8Array(other))
                ) {
                    return false;
                }

                return true;

            case boolTag$3:
            case dateTag$3:
            case numberTag$3:
                // Coerce booleans to `1` or `0` and dates to milliseconds.
                // Invalid dates are coerced to `NaN`.
                return eq(+object, +other);

            case errorTag$2:
                return (
                    object.name == other.name && object.message == other.message
                );

            case regexpTag$3:
            case stringTag$4:
                // Coerce regexes to strings and treat strings, primitives and objects,
                // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                // for more details.
                return object == other + '';

            case mapTag$6:
                var convert = mapToArray;

            case setTag$6:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
                convert || (convert = setToArray);

                if (object.size != other.size && !isPartial) {
                    return false;
                } // Assume cyclic values are equal.

                var stacked = stack.get(object);

                if (stacked) {
                    return stacked == other;
                }

                bitmask |= COMPARE_UNORDERED_FLAG$1; // Recursively compare objects (susceptible to call stack limits).

                stack.set(object, other);
                var result = equalArrays(
                    convert(object),
                    convert(other),
                    bitmask,
                    customizer,
                    equalFunc,
                    stack
                );
                stack['delete'](object);
                return result;

            case symbolTag$3:
                if (symbolValueOf$1) {
                    return (
                        symbolValueOf$1.call(object) ==
                        symbolValueOf$1.call(other)
                    );
                }
        }

        return false;
    }

    /** Used to compose bitmasks for value comparisons. */

    var COMPARE_PARTIAL_FLAG$2 = 1;
    /** Used for built-in method references. */

    var objectProto$e = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$b = objectProto$e.hasOwnProperty;
    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */

    function equalObjects(
        object,
        other,
        bitmask,
        customizer,
        equalFunc,
        stack
    ) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
            objProps = getAllKeys(object),
            objLength = objProps.length,
            othProps = getAllKeys(other),
            othLength = othProps.length;

        if (objLength != othLength && !isPartial) {
            return false;
        }

        var index = objLength;

        while (index--) {
            var key = objProps[index];

            if (
                !(isPartial ? key in other : hasOwnProperty$b.call(other, key))
            ) {
                return false;
            }
        } // Assume cyclic values are equal.

        var stacked = stack.get(object);

        if (stacked && stack.get(other)) {
            return stacked == other;
        }

        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;

        while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];

            if (customizer) {
                var compared = isPartial
                    ? customizer(othValue, objValue, key, other, object, stack)
                    : customizer(objValue, othValue, key, object, other, stack);
            } // Recursively compare objects (susceptible to call stack limits).

            if (
                !(compared === undefined
                    ? objValue === othValue ||
                      equalFunc(objValue, othValue, bitmask, customizer, stack)
                    : compared)
            ) {
                result = false;
                break;
            }

            skipCtor || (skipCtor = key == 'constructor');
        }

        if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

            if (
                objCtor != othCtor &&
                'constructor' in object &&
                'constructor' in other &&
                !(
                    typeof objCtor == 'function' &&
                    objCtor instanceof objCtor &&
                    typeof othCtor == 'function' &&
                    othCtor instanceof othCtor
                )
            ) {
                result = false;
            }
        }

        stack['delete'](object);
        stack['delete'](other);
        return result;
    }

    /** Used to compose bitmasks for value comparisons. */

    var COMPARE_PARTIAL_FLAG$3 = 1;
    /** `Object#toString` result references. */

    var argsTag$3 = '[object Arguments]',
        arrayTag$2 = '[object Array]',
        objectTag$3 = '[object Object]';
    /** Used for built-in method references. */

    var objectProto$f = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty$c = objectProto$f.hasOwnProperty;
    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */

    function baseIsEqualDeep(
        object,
        other,
        bitmask,
        customizer,
        equalFunc,
        stack
    ) {
        var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = objIsArr ? arrayTag$2 : getTag$1(object),
            othTag = othIsArr ? arrayTag$2 : getTag$1(other);
        objTag = objTag == argsTag$3 ? objectTag$3 : objTag;
        othTag = othTag == argsTag$3 ? objectTag$3 : othTag;
        var objIsObj = objTag == objectTag$3,
            othIsObj = othTag == objectTag$3,
            isSameTag = objTag == othTag;

        if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
                return false;
            }

            objIsArr = true;
            objIsObj = false;
        }

        if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object)
                ? equalArrays(
                      object,
                      other,
                      bitmask,
                      customizer,
                      equalFunc,
                      stack
                  )
                : equalByTag(
                      object,
                      other,
                      objTag,
                      bitmask,
                      customizer,
                      equalFunc,
                      stack
                  );
        }

        if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
            var objIsWrapped =
                    objIsObj && hasOwnProperty$c.call(object, '__wrapped__'),
                othIsWrapped =
                    othIsObj && hasOwnProperty$c.call(other, '__wrapped__');

            if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object,
                    othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(
                    objUnwrapped,
                    othUnwrapped,
                    bitmask,
                    customizer,
                    stack
                );
            }
        }

        if (!isSameTag) {
            return false;
        }

        stack || (stack = new Stack());
        return equalObjects(
            object,
            other,
            bitmask,
            customizer,
            equalFunc,
            stack
        );
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */

    function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
            return true;
        }

        if (
            value == null ||
            other == null ||
            (!isObjectLike(value) && !isObjectLike(other))
        ) {
            return value !== value && other !== other;
        }

        return baseIsEqualDeep(
            value,
            other,
            bitmask,
            customizer,
            baseIsEqual,
            stack
        );
    }

    /** Used to compose bitmasks for value comparisons. */

    var COMPARE_PARTIAL_FLAG$4 = 1,
        COMPARE_UNORDERED_FLAG$2 = 2;
    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */

    function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length,
            length = index,
            noCustomizer = !customizer;

        if (object == null) {
            return !length;
        }

        object = Object(object);

        while (index--) {
            var data = matchData[index];

            if (
                noCustomizer && data[2]
                    ? data[1] !== object[data[0]]
                    : !(data[0] in object)
            ) {
                return false;
            }
        }

        while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];

            if (noCustomizer && data[2]) {
                if (objValue === undefined && !(key in object)) {
                    return false;
                }
            } else {
                var stack = new Stack();

                if (customizer) {
                    var result = customizer(
                        objValue,
                        srcValue,
                        key,
                        object,
                        source,
                        stack
                    );
                }

                if (
                    !(result === undefined
                        ? baseIsEqual(
                              srcValue,
                              objValue,
                              COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2,
                              customizer,
                              stack
                          )
                        : result)
                ) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */

    function isStrictComparable(value) {
        return value === value && !isObject(value);
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */

    function getMatchData(object) {
        var result = keys(object),
            length = result.length;

        while (length--) {
            var key = result[length],
                value = object[key];
            result[length] = [key, value, isStrictComparable(value)];
        }

        return result;
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
        return function (object) {
            if (object == null) {
                return false;
            }

            return (
                object[key] === srcValue &&
                (srcValue !== undefined || key in Object(object))
            );
        };
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */

    function baseMatches(source) {
        var matchData = getMatchData(source);

        if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }

        return function (object) {
            return object === source || baseIsMatch(object, source, matchData);
        };
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */

    function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0,
            length = path.length;

        while (object != null && index < length) {
            object = object[toKey(path[index++])];
        }

        return index && index == length ? object : undefined;
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */

    function get(object, path, defaultValue) {
        var result = object == null ? undefined : baseGet(object, path);
        return result === undefined ? defaultValue : result;
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
        return object != null && key in Object(object);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */

    function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
    }

    /** Used to compose bitmasks for value comparisons. */

    var COMPARE_PARTIAL_FLAG$5 = 1,
        COMPARE_UNORDERED_FLAG$3 = 2;
    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */

    function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
        }

        return function (object) {
            var objValue = get(object, path);
            return objValue === undefined && objValue === srcValue
                ? hasIn(object, path)
                : baseIsEqual(
                      srcValue,
                      objValue,
                      COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3
                  );
        };
    }

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
        return value;
    }

    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function baseProperty(key) {
        return function (object) {
            return object == null ? undefined : object[key];
        };
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */

    function basePropertyDeep(path) {
        return function (object) {
            return baseGet(object, path);
        };
    }

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */

    function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */

    function baseIteratee(value) {
        // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
        // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
        if (typeof value == 'function') {
            return value;
        }

        if (value == null) {
            return identity;
        }

        if (typeof value == 'object') {
            return isArray(value)
                ? baseMatchesProperty(value[0], value[1])
                : baseMatches(value);
        }

        return property(value);
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */

    function mapValues(object, iteratee) {
        var result = {};
        iteratee = baseIteratee(iteratee);
        baseForOwn(object, function (value, key, object) {
            baseAssignValue(result, key, iteratee(value, key, object));
        });
        return result;
    }

    /**
     * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
     */

    function Cache(maxSize) {
        this._maxSize = maxSize;
        this.clear();
    }

    Cache.prototype.clear = function () {
        this._size = 0;
        this._values = Object.create(null);
    };

    Cache.prototype.get = function (key) {
        return this._values[key];
    };

    Cache.prototype.set = function (key, value) {
        this._size >= this._maxSize && this.clear();
        if (!(key in this._values)) this._size++;
        return (this._values[key] = value);
    };

    var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
        DIGIT_REGEX = /^\d+$/,
        LEAD_DIGIT_REGEX = /^\d/,
        SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
        CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/,
        MAX_CACHE_SIZE = 512;
    var pathCache = new Cache(MAX_CACHE_SIZE),
        setCache = new Cache(MAX_CACHE_SIZE),
        getCache = new Cache(MAX_CACHE_SIZE);
    var propertyExpr = {
        Cache: Cache,
        split: split,
        normalizePath: normalizePath,
        setter: function (path) {
            var parts = normalizePath(path);
            return (
                setCache.get(path) ||
                setCache.set(path, function setter(obj, value) {
                    var index = 0;
                    var len = parts.length;
                    var data = obj;

                    while (index < len - 1) {
                        var part = parts[index];

                        if (
                            part === '__proto__' ||
                            part === 'constructor' ||
                            part === 'prototype'
                        ) {
                            return obj;
                        }

                        data = data[parts[index++]];
                    }

                    data[parts[index]] = value;
                })
            );
        },
        getter: function (path, safe) {
            var parts = normalizePath(path);
            return (
                getCache.get(path) ||
                getCache.set(path, function getter(data) {
                    var index = 0,
                        len = parts.length;

                    while (index < len) {
                        if (data != null || !safe) data = data[parts[index++]];
                        else return;
                    }

                    return data;
                })
            );
        },
        join: function (segments) {
            return segments.reduce(function (path, part) {
                return (
                    path +
                    (isQuoted(part) || DIGIT_REGEX.test(part)
                        ? '[' + part + ']'
                        : (path ? '.' : '') + part)
                );
            }, '');
        },
        forEach: function (path, cb, thisArg) {
            forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
        },
    };

    function normalizePath(path) {
        return (
            pathCache.get(path) ||
            pathCache.set(
                path,
                split(path).map(function (part) {
                    return part.replace(CLEAN_QUOTES_REGEX, '$2');
                })
            )
        );
    }

    function split(path) {
        return path.match(SPLIT_REGEX);
    }

    function forEach(parts, iter, thisArg) {
        var len = parts.length,
            part,
            idx,
            isArray,
            isBracket;

        for (idx = 0; idx < len; idx++) {
            part = parts[idx];

            if (part) {
                if (shouldBeQuoted(part)) {
                    part = '"' + part + '"';
                }

                isBracket = isQuoted(part);
                isArray = !isBracket && /^\d+$/.test(part);
                iter.call(thisArg, part, isBracket, isArray, idx, parts);
            }
        }
    }

    function isQuoted(str) {
        return (
            typeof str === 'string' &&
            str &&
            ["'", '"'].indexOf(str.charAt(0)) !== -1
        );
    }

    function hasLeadingNumber(part) {
        return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
    }

    function hasSpecialChars(part) {
        return SPEC_CHAR_REGEX.test(part);
    }

    function shouldBeQuoted(part) {
        return (
            !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part))
        );
    }

    var prefixes = {
        context: '$',
        value: '.',
    };

    var Reference = /*#__PURE__*/ (function () {
        function Reference(key, options) {
            if (options === void 0) {
                options = {};
            }

            if (typeof key !== 'string')
                throw new TypeError('ref must be a string, got: ' + key);
            this.key = key.trim();
            if (key === '')
                throw new TypeError('ref must be a non-empty string');
            this.isContext = this.key[0] === prefixes.context;
            this.isValue = this.key[0] === prefixes.value;
            this.isSibling = !this.isContext && !this.isValue;
            var prefix = this.isContext
                ? prefixes.context
                : this.isValue
                ? prefixes.value
                : '';
            this.path = this.key.slice(prefix.length);
            this.getter = this.path && propertyExpr.getter(this.path, true);
            this.map = options.map;
        }

        var _proto = Reference.prototype;

        _proto.getValue = function getValue(options) {
            var result = this.isContext
                ? options.context
                : this.isValue
                ? options.value
                : options.parent;
            if (this.getter) result = this.getter(result || {});
            if (this.map) result = this.map(result);
            return result;
        };

        _proto.cast = function cast(value, options) {
            return this.getValue(
                _extends({}, options, {
                    value: value,
                })
            );
        };

        _proto.resolve = function resolve() {
            return this;
        };

        _proto.describe = function describe() {
            return {
                type: 'ref',
                key: this.key,
            };
        };

        _proto.toString = function toString() {
            return 'Ref(' + this.key + ')';
        };

        Reference.isRef = function isRef(value) {
            return value && value.__isYupRef;
        };

        return Reference;
    })();
    Reference.prototype.__isYupRef = true;

    var formatError = ValidationError.formatError;

    var thenable = function thenable(p) {
        return (
            p && typeof p.then === 'function' && typeof p.catch === 'function'
        );
    };

    function runTest(testFn, ctx, value, sync) {
        var result = testFn.call(ctx, value);
        if (!sync) return Promise.resolve(result);

        if (thenable(result)) {
            throw new Error(
                'Validation test of type: "' +
                    ctx.type +
                    '" returned a Promise during a synchronous validate. ' +
                    'This test will finish after the validate call has returned'
            );
        }

        return synchronousPromise.SynchronousPromise.resolve(result);
    }

    function resolveParams(oldParams, newParams, resolve) {
        return mapValues(_extends({}, oldParams, newParams), resolve);
    }

    function createErrorFactory(_ref) {
        var value = _ref.value,
            label = _ref.label,
            resolve = _ref.resolve,
            originalValue = _ref.originalValue,
            opts = _objectWithoutPropertiesLoose(_ref, [
                'value',
                'label',
                'resolve',
                'originalValue',
            ]);

        return function createError(_temp) {
            var _ref2 = _temp === void 0 ? {} : _temp,
                _ref2$path = _ref2.path,
                path = _ref2$path === void 0 ? opts.path : _ref2$path,
                _ref2$message = _ref2.message,
                message =
                    _ref2$message === void 0 ? opts.message : _ref2$message,
                _ref2$type = _ref2.type,
                type = _ref2$type === void 0 ? opts.name : _ref2$type,
                params = _ref2.params;

            params = _extends(
                {
                    path: path,
                    value: value,
                    originalValue: originalValue,
                    label: label,
                },
                resolveParams(opts.params, params, resolve)
            );
            return _extends(
                new ValidationError(
                    formatError(message, params),
                    value,
                    path,
                    type
                ),
                {
                    params: params,
                }
            );
        };
    }
    function createValidation(options) {
        var name = options.name,
            message = options.message,
            test = options.test,
            params = options.params;

        function validate(_ref3) {
            var value = _ref3.value,
                path = _ref3.path,
                label = _ref3.label,
                options = _ref3.options,
                originalValue = _ref3.originalValue,
                sync = _ref3.sync,
                rest = _objectWithoutPropertiesLoose(_ref3, [
                    'value',
                    'path',
                    'label',
                    'options',
                    'originalValue',
                    'sync',
                ]);

            var parent = options.parent;

            var resolve = function resolve(item) {
                return Reference.isRef(item)
                    ? item.getValue({
                          value: value,
                          parent: parent,
                          context: options.context,
                      })
                    : item;
            };

            var createError = createErrorFactory({
                message: message,
                path: path,
                value: value,
                originalValue: originalValue,
                params: params,
                label: label,
                resolve: resolve,
                name: name,
            });

            var ctx = _extends(
                {
                    path: path,
                    parent: parent,
                    type: name,
                    createError: createError,
                    resolve: resolve,
                    options: options,
                },
                rest
            );

            return runTest(test, ctx, value, sync).then(function (
                validOrError
            ) {
                if (ValidationError.isError(validOrError)) throw validOrError;
                else if (!validOrError) throw createError();
            });
        }

        validate.OPTIONS = options;
        return validate;
    }

    var trim = function trim(part) {
        return part.substr(0, part.length - 1).substr(1);
    };

    function getIn(schema, path, value, context) {
        if (context === void 0) {
            context = value;
        }

        var parent, lastPart, lastPartDebug; // root path: ''

        if (!path)
            return {
                parent: parent,
                parentPath: path,
                schema: schema,
            };
        propertyExpr.forEach(path, function (_part, isBracket, isArray) {
            var part = isBracket ? trim(_part) : _part;
            schema = schema.resolve({
                context: context,
                parent: parent,
                value: value,
            });

            if (schema.innerType) {
                var idx = isArray ? parseInt(part, 10) : 0;

                if (value && idx >= value.length) {
                    throw new Error(
                        'Yup.reach cannot resolve an array item at index: ' +
                            _part +
                            ', in the path: ' +
                            path +
                            '. ' +
                            'because there is no value at that index. '
                    );
                }

                parent = value;
                value = value && value[idx];
                schema = schema.innerType;
            } // sometimes the array index part of a path doesn't exist: "nested.arr.child"
            // in these cases the current part is the next schema and should be processed
            // in this iteration. For cases where the index signature is included this
            // check will fail and we'll handle the `child` part on the next iteration like normal

            if (!isArray) {
                if (!schema.fields || !schema.fields[part])
                    throw new Error(
                        'The schema does not contain the path: ' +
                            path +
                            '. ' +
                            ('(failed at: ' +
                                lastPartDebug +
                                ' which is a type: "' +
                                schema._type +
                                '")')
                    );
                parent = value;
                value = value && value[part];
                schema = schema.fields[part];
            }

            lastPart = part;
            lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
        });
        return {
            schema: schema,
            parent: parent,
            parentPath: lastPart,
        };
    }

    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it;

        if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
            if (
                Array.isArray(o) ||
                (it = _unsupportedIterableToArray(o)) ||
                (allowArrayLike && o && typeof o.length === 'number')
            ) {
                if (it) o = it;
                var i = 0;
                return function () {
                    if (i >= o.length)
                        return {
                            done: true,
                        };
                    return {
                        done: false,
                        value: o[i++],
                    };
                };
            }

            throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
        }

        it = o[Symbol.iterator]();
        return it.next.bind(it);
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === 'Object' && o.constructor) n = o.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(o);
        if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
            return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
        }

        return arr2;
    }

    var RefSet = /*#__PURE__*/ (function () {
        function RefSet() {
            this.list = new Set();
            this.refs = new Map();
        }

        var _proto = RefSet.prototype;

        _proto.describe = function describe() {
            var description = [];

            for (
                var _iterator = _createForOfIteratorHelperLoose(this.list),
                    _step;
                !(_step = _iterator()).done;

            ) {
                var item = _step.value;
                description.push(item);
            }

            for (
                var _iterator2 = _createForOfIteratorHelperLoose(this.refs),
                    _step2;
                !(_step2 = _iterator2()).done;

            ) {
                var _step2$value = _step2.value,
                    ref = _step2$value[1];
                description.push(ref.describe());
            }

            return description;
        };

        _proto.toArray = function toArray$1() {
            return toArray(this.list).concat(toArray(this.refs.values()));
        };

        _proto.add = function add(value) {
            Reference.isRef(value)
                ? this.refs.set(value.key, value)
                : this.list.add(value);
        };

        _proto.delete = function _delete(value) {
            Reference.isRef(value)
                ? this.refs.delete(value.key)
                : this.list.delete(value);
        };

        _proto.has = function has(value, resolve) {
            if (this.list.has(value)) return true;
            var item,
                values = this.refs.values();

            while (((item = values.next()), !item.done)) {
                if (resolve(item.value) === value) return true;
            }

            return false;
        };

        _proto.clone = function clone() {
            var next = new RefSet();
            next.list = new Set(this.list);
            next.refs = new Map(this.refs);
            return next;
        };

        _proto.merge = function merge(newItems, removeItems) {
            var next = this.clone();
            newItems.list.forEach(function (value) {
                return next.add(value);
            });
            newItems.refs.forEach(function (value) {
                return next.add(value);
            });
            removeItems.list.forEach(function (value) {
                return next.delete(value);
            });
            removeItems.refs.forEach(function (value) {
                return next.delete(value);
            });
            return next;
        };

        _createClass(RefSet, [
            {
                key: 'size',
                get: function get() {
                    return this.list.size + this.refs.size;
                },
            },
        ]);

        return RefSet;
    })();

    function SchemaType(options) {
        var _this = this;

        if (options === void 0) {
            options = {};
        }

        if (!(this instanceof SchemaType)) return new SchemaType();
        this._deps = [];
        this._conditions = [];
        this._options = {
            abortEarly: true,
            recursive: true,
        };
        this._exclusive = Object.create(null);
        this._whitelist = new RefSet();
        this._blacklist = new RefSet();
        this.tests = [];
        this.transforms = [];
        this.withMutation(function () {
            _this.typeError(mixed.notType);
        });
        if (has(options, 'default')) this._defaultDefault = options.default;
        this.type = options.type || 'mixed'; // TODO: remove

        this._type = options.type || 'mixed';
    }
    var proto = (SchemaType.prototype = {
        __isYupSchema__: true,
        constructor: SchemaType,
        clone: function clone() {
            var _this2 = this;

            if (this._mutate) return this; // if the nested value is a schema we can skip cloning, since
            // they are already immutable

            return cloneDeepWith(this, function (value) {
                if (isSchema(value) && value !== _this2) return value;
            });
        },
        label: function label(_label) {
            var next = this.clone();
            next._label = _label;
            return next;
        },
        meta: function meta(obj) {
            if (arguments.length === 0) return this._meta;
            var next = this.clone();
            next._meta = _extends(next._meta || {}, obj);
            return next;
        },
        withMutation: function withMutation(fn) {
            var before = this._mutate;
            this._mutate = true;
            var result = fn(this);
            this._mutate = before;
            return result;
        },
        concat: function concat(schema) {
            if (!schema || schema === this) return this;
            if (schema._type !== this._type && this._type !== 'mixed')
                throw new TypeError(
                    "You cannot `concat()` schema's of different types: " +
                        this._type +
                        ' and ' +
                        schema._type
                );
            var next = prependDeep(schema.clone(), this); // new undefined default is overridden by old non-undefined one, revert

            if (has(schema, '_default')) next._default = schema._default;
            next.tests = this.tests;
            next._exclusive = this._exclusive; // manually merge the blacklist/whitelist (the other `schema` takes
            // precedence in case of conflicts)

            next._whitelist = this._whitelist.merge(
                schema._whitelist,
                schema._blacklist
            );
            next._blacklist = this._blacklist.merge(
                schema._blacklist,
                schema._whitelist
            ); // manually add the new tests to ensure
            // the deduping logic is consistent

            next.withMutation(function (next) {
                schema.tests.forEach(function (fn) {
                    next.test(fn.OPTIONS);
                });
            });
            return next;
        },
        isType: function isType(v) {
            if (this._nullable && v === null) return true;
            return !this._typeCheck || this._typeCheck(v);
        },
        resolve: function resolve(options) {
            var schema = this;

            if (schema._conditions.length) {
                var conditions = schema._conditions;
                schema = schema.clone();
                schema._conditions = [];
                schema = conditions.reduce(function (schema, condition) {
                    return condition.resolve(schema, options);
                }, schema);
                schema = schema.resolve(options);
            }

            return schema;
        },
        cast: function cast(value, options) {
            if (options === void 0) {
                options = {};
            }

            var resolvedSchema = this.resolve(
                _extends({}, options, {
                    value: value,
                })
            );

            var result = resolvedSchema._cast(value, options);

            if (
                value !== undefined &&
                options.assert !== false &&
                resolvedSchema.isType(result) !== true
            ) {
                var formattedValue = printValue(value);
                var formattedResult = printValue(result);
                throw new TypeError(
                    'The value of ' +
                        (options.path || 'field') +
                        ' could not be cast to a value ' +
                        ('that satisfies the schema type: "' +
                            resolvedSchema._type +
                            '". \n\n') +
                        ('attempted value: ' + formattedValue + ' \n') +
                        (formattedResult !== formattedValue
                            ? 'result of cast: ' + formattedResult
                            : '')
                );
            }

            return result;
        },
        _cast: function _cast(rawValue) {
            var _this3 = this;

            var value =
                rawValue === undefined
                    ? rawValue
                    : this.transforms.reduce(function (value, fn) {
                          return fn.call(_this3, value, rawValue);
                      }, rawValue);

            if (value === undefined && has(this, '_default')) {
                value = this.default();
            }

            return value;
        },
        _validate: function _validate(_value, options) {
            var _this4 = this;

            if (options === void 0) {
                options = {};
            }

            var value = _value;
            var originalValue =
                options.originalValue != null ? options.originalValue : _value;

            var isStrict = this._option('strict', options);

            var endEarly = this._option('abortEarly', options);

            var sync = options.sync;
            var path = options.path;
            var label = this._label;

            if (!isStrict) {
                value = this._cast(
                    value,
                    _extends(
                        {
                            assert: false,
                        },
                        options
                    )
                );
            } // value is cast, we can check if it meets type requirements

            var validationParams = {
                value: value,
                path: path,
                schema: this,
                options: options,
                label: label,
                originalValue: originalValue,
                sync: sync,
            };

            if (options.from) {
                validationParams.from = options.from;
            }

            var initialTests = [];
            if (this._typeError)
                initialTests.push(this._typeError(validationParams));
            if (this._whitelistError)
                initialTests.push(this._whitelistError(validationParams));
            if (this._blacklistError)
                initialTests.push(this._blacklistError(validationParams));
            return runValidations({
                validations: initialTests,
                endEarly: endEarly,
                value: value,
                path: path,
                sync: sync,
            }).then(function (value) {
                return runValidations({
                    path: path,
                    sync: sync,
                    value: value,
                    endEarly: endEarly,
                    validations: _this4.tests.map(function (fn) {
                        return fn(validationParams);
                    }),
                });
            });
        },
        validate: function validate(value, options) {
            if (options === void 0) {
                options = {};
            }

            var schema = this.resolve(
                _extends({}, options, {
                    value: value,
                })
            );
            return schema._validate(value, options);
        },
        validateSync: function validateSync(value, options) {
            if (options === void 0) {
                options = {};
            }

            var schema = this.resolve(
                _extends({}, options, {
                    value: value,
                })
            );
            var result, err;

            schema
                ._validate(
                    value,
                    _extends({}, options, {
                        sync: true,
                    })
                )
                .then(function (r) {
                    return (result = r);
                })
                .catch(function (e) {
                    return (err = e);
                });

            if (err) throw err;
            return result;
        },
        isValid: function isValid(value, options) {
            return this.validate(value, options)
                .then(function () {
                    return true;
                })
                .catch(function (err) {
                    if (err.name === 'ValidationError') return false;
                    throw err;
                });
        },
        isValidSync: function isValidSync(value, options) {
            try {
                this.validateSync(value, options);
                return true;
            } catch (err) {
                if (err.name === 'ValidationError') return false;
                throw err;
            }
        },
        getDefault: function getDefault(options) {
            if (options === void 0) {
                options = {};
            }

            var schema = this.resolve(options);
            return schema.default();
        },
        default: function _default(def) {
            if (arguments.length === 0) {
                var defaultValue = has(this, '_default')
                    ? this._default
                    : this._defaultDefault;
                return typeof defaultValue === 'function'
                    ? defaultValue.call(this)
                    : cloneDeepWith(defaultValue);
            }

            var next = this.clone();
            next._default = def;
            return next;
        },
        strict: function strict(isStrict) {
            if (isStrict === void 0) {
                isStrict = true;
            }

            var next = this.clone();
            next._options.strict = isStrict;
            return next;
        },
        _isPresent: function _isPresent(value) {
            return value != null;
        },
        required: function required(message) {
            if (message === void 0) {
                message = mixed.required;
            }

            return this.test({
                message: message,
                name: 'required',
                exclusive: true,
                test: function test(value) {
                    return this.schema._isPresent(value);
                },
            });
        },
        notRequired: function notRequired() {
            var next = this.clone();
            next.tests = next.tests.filter(function (test) {
                return test.OPTIONS.name !== 'required';
            });
            return next;
        },
        nullable: function nullable(isNullable) {
            if (isNullable === void 0) {
                isNullable = true;
            }

            var next = this.clone();
            next._nullable = isNullable;
            return next;
        },
        transform: function transform(fn) {
            var next = this.clone();
            next.transforms.push(fn);
            return next;
        },

        /**
         * Adds a test function to the schema's queue of tests.
         * tests can be exclusive or non-exclusive.
         *
         * - exclusive tests, will replace any existing tests of the same name.
         * - non-exclusive: can be stacked
         *
         * If a non-exclusive test is added to a schema with an exclusive test of the same name
         * the exclusive test is removed and further tests of the same name will be stacked.
         *
         * If an exclusive test is added to a schema with non-exclusive tests of the same name
         * the previous tests are removed and further tests of the same name will replace each other.
         */
        test: function test() {
            var opts;

            if (arguments.length === 1) {
                if (
                    typeof (arguments.length <= 0
                        ? undefined
                        : arguments[0]) === 'function'
                ) {
                    opts = {
                        test: arguments.length <= 0 ? undefined : arguments[0],
                    };
                } else {
                    opts = arguments.length <= 0 ? undefined : arguments[0];
                }
            } else if (arguments.length === 2) {
                opts = {
                    name: arguments.length <= 0 ? undefined : arguments[0],
                    test: arguments.length <= 1 ? undefined : arguments[1],
                };
            } else {
                opts = {
                    name: arguments.length <= 0 ? undefined : arguments[0],
                    message: arguments.length <= 1 ? undefined : arguments[1],
                    test: arguments.length <= 2 ? undefined : arguments[2],
                };
            }

            if (opts.message === undefined) opts.message = mixed.default;
            if (typeof opts.test !== 'function')
                throw new TypeError('`test` is a required parameters');
            var next = this.clone();
            var validate = createValidation(opts);
            var isExclusive =
                opts.exclusive ||
                (opts.name && next._exclusive[opts.name] === true);

            if (opts.exclusive && !opts.name) {
                throw new TypeError(
                    'Exclusive tests must provide a unique `name` identifying the test'
                );
            }

            next._exclusive[opts.name] = !!opts.exclusive;
            next.tests = next.tests.filter(function (fn) {
                if (fn.OPTIONS.name === opts.name) {
                    if (isExclusive) return false;
                    if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
                }

                return true;
            });
            next.tests.push(validate);
            return next;
        },
        when: function when(keys, options) {
            if (arguments.length === 1) {
                options = keys;
                keys = '.';
            }

            var next = this.clone(),
                deps = [].concat(keys).map(function (key) {
                    return new Reference(key);
                });
            deps.forEach(function (dep) {
                if (dep.isSibling) next._deps.push(dep.key);
            });

            next._conditions.push(new Condition(deps, options));

            return next;
        },
        typeError: function typeError(message) {
            var next = this.clone();
            next._typeError = createValidation({
                message: message,
                name: 'typeError',
                test: function test(value) {
                    if (value !== undefined && !this.schema.isType(value))
                        return this.createError({
                            params: {
                                type: this.schema._type,
                            },
                        });
                    return true;
                },
            });
            return next;
        },
        oneOf: function oneOf(enums, message) {
            if (message === void 0) {
                message = mixed.oneOf;
            }

            var next = this.clone();
            enums.forEach(function (val) {
                next._whitelist.add(val);

                next._blacklist.delete(val);
            });
            next._whitelistError = createValidation({
                message: message,
                name: 'oneOf',
                test: function test(value) {
                    if (value === undefined) return true;
                    var valids = this.schema._whitelist;
                    return valids.has(value, this.resolve)
                        ? true
                        : this.createError({
                              params: {
                                  values: valids.toArray().join(', '),
                              },
                          });
                },
            });
            return next;
        },
        notOneOf: function notOneOf(enums, message) {
            if (message === void 0) {
                message = mixed.notOneOf;
            }

            var next = this.clone();
            enums.forEach(function (val) {
                next._blacklist.add(val);

                next._whitelist.delete(val);
            });
            next._blacklistError = createValidation({
                message: message,
                name: 'notOneOf',
                test: function test(value) {
                    var invalids = this.schema._blacklist;
                    if (invalids.has(value, this.resolve))
                        return this.createError({
                            params: {
                                values: invalids.toArray().join(', '),
                            },
                        });
                    return true;
                },
            });
            return next;
        },
        strip: function strip(_strip) {
            if (_strip === void 0) {
                _strip = true;
            }

            var next = this.clone();
            next._strip = _strip;
            return next;
        },
        _option: function _option(key, overrides) {
            return has(overrides, key) ? overrides[key] : this._options[key];
        },
        describe: function describe() {
            var next = this.clone();
            var description = {
                type: next._type,
                meta: next._meta,
                label: next._label,
                tests: next.tests
                    .map(function (fn) {
                        return {
                            name: fn.OPTIONS.name,
                            params: fn.OPTIONS.params,
                        };
                    })
                    .filter(function (n, idx, list) {
                        return (
                            list.findIndex(function (c) {
                                return c.name === n.name;
                            }) === idx
                        );
                    }),
            };
            if (next._whitelist.size)
                description.oneOf = next._whitelist.describe();
            if (next._blacklist.size)
                description.notOneOf = next._blacklist.describe();
            return description;
        },
        defined: function defined(message) {
            if (message === void 0) {
                message = mixed.defined;
            }

            return this.nullable().test({
                message: message,
                name: 'defined',
                exclusive: true,
                test: function test(value) {
                    return value !== undefined;
                },
            });
        },
    });

    var _loop = function _loop() {
        var method = _arr[_i];

        proto[method + 'At'] = function (path, value, options) {
            if (options === void 0) {
                options = {};
            }

            var _getIn = getIn(this, path, value, options.context),
                parent = _getIn.parent,
                parentPath = _getIn.parentPath,
                schema = _getIn.schema;

            return schema[method](
                parent && parent[parentPath],
                _extends({}, options, {
                    parent: parent,
                    path: path,
                })
            );
        };
    };

    for (
        var _i = 0, _arr = ['validate', 'validateSync'];
        _i < _arr.length;
        _i++
    ) {
        _loop();
    }

    for (var _i2 = 0, _arr2 = ['equals', 'is']; _i2 < _arr2.length; _i2++) {
        var alias = _arr2[_i2];
        proto[alias] = proto.oneOf;
    }

    for (var _i3 = 0, _arr3 = ['not', 'nope']; _i3 < _arr3.length; _i3++) {
        var _alias = _arr3[_i3];
        proto[_alias] = proto.notOneOf;
    }

    proto.optional = proto.notRequired;

    function inherits(ctor, superCtor, spec) {
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true,
            },
        });

        _extends(ctor.prototype, spec);
    }

    function BooleanSchema() {
        var _this = this;

        if (!(this instanceof BooleanSchema)) return new BooleanSchema();
        SchemaType.call(this, {
            type: 'boolean',
        });
        this.withMutation(function () {
            _this.transform(function (value) {
                if (!this.isType(value)) {
                    if (/^(true|1)$/i.test(value)) return true;
                    if (/^(false|0)$/i.test(value)) return false;
                }

                return value;
            });
        });
    }

    inherits(BooleanSchema, SchemaType, {
        _typeCheck: function _typeCheck(v) {
            if (v instanceof Boolean) v = v.valueOf();
            return typeof v === 'boolean';
        },
    });

    var isAbsent = function (value) {
        return value == null;
    };

    var rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; // eslint-disable-next-line

    var rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i; // eslint-disable-next-line

    var rUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    var isTrimmed = function isTrimmed(value) {
        return isAbsent(value) || value === value.trim();
    };

    function StringSchema() {
        var _this = this;

        if (!(this instanceof StringSchema)) return new StringSchema();
        SchemaType.call(this, {
            type: 'string',
        });
        this.withMutation(function () {
            _this.transform(function (value) {
                if (this.isType(value)) return value;
                return value != null && value.toString
                    ? value.toString()
                    : value;
            });
        });
    }
    inherits(StringSchema, SchemaType, {
        _typeCheck: function _typeCheck(value) {
            if (value instanceof String) value = value.valueOf();
            return typeof value === 'string';
        },
        _isPresent: function _isPresent(value) {
            return (
                SchemaType.prototype._isPresent.call(this, value) &&
                value.length > 0
            );
        },
        length: function length(_length, message) {
            if (message === void 0) {
                message = string.length;
            }

            return this.test({
                message: message,
                name: 'length',
                exclusive: true,
                params: {
                    length: _length,
                },
                test: function test(value) {
                    return (
                        isAbsent(value) ||
                        value.length === this.resolve(_length)
                    );
                },
            });
        },
        min: function min(_min, message) {
            if (message === void 0) {
                message = string.min;
            }

            return this.test({
                message: message,
                name: 'min',
                exclusive: true,
                params: {
                    min: _min,
                },
                test: function test(value) {
                    return (
                        isAbsent(value) || value.length >= this.resolve(_min)
                    );
                },
            });
        },
        max: function max(_max, message) {
            if (message === void 0) {
                message = string.max;
            }

            return this.test({
                name: 'max',
                exclusive: true,
                message: message,
                params: {
                    max: _max,
                },
                test: function test(value) {
                    return (
                        isAbsent(value) || value.length <= this.resolve(_max)
                    );
                },
            });
        },
        matches: function matches(regex, options) {
            var excludeEmptyString = false;
            var message;
            var name;

            if (options) {
                if (typeof options === 'object') {
                    excludeEmptyString = options.excludeEmptyString;
                    message = options.message;
                    name = options.name;
                } else {
                    message = options;
                }
            }

            return this.test({
                name: name || 'matches',
                message: message || string.matches,
                params: {
                    regex: regex,
                },
                test: function test(value) {
                    return (
                        isAbsent(value) ||
                        (value === '' && excludeEmptyString) ||
                        value.search(regex) !== -1
                    );
                },
            });
        },
        email: function email(message) {
            if (message === void 0) {
                message = string.email;
            }

            return this.matches(rEmail, {
                name: 'email',
                message: message,
                excludeEmptyString: true,
            });
        },
        url: function url(message) {
            if (message === void 0) {
                message = string.url;
            }

            return this.matches(rUrl, {
                name: 'url',
                message: message,
                excludeEmptyString: true,
            });
        },
        uuid: function uuid(message) {
            if (message === void 0) {
                message = string.uuid;
            }

            return this.matches(rUUID, {
                name: 'uuid',
                message: message,
                excludeEmptyString: false,
            });
        },
        //-- transforms --
        ensure: function ensure() {
            return this.default('').transform(function (val) {
                return val === null ? '' : val;
            });
        },
        trim: function trim(message) {
            if (message === void 0) {
                message = string.trim;
            }

            return this.transform(function (val) {
                return val != null ? val.trim() : val;
            }).test({
                message: message,
                name: 'trim',
                test: isTrimmed,
            });
        },
        lowercase: function lowercase(message) {
            if (message === void 0) {
                message = string.lowercase;
            }

            return this.transform(function (value) {
                return !isAbsent(value) ? value.toLowerCase() : value;
            }).test({
                message: message,
                name: 'string_case',
                exclusive: true,
                test: function test(value) {
                    return isAbsent(value) || value === value.toLowerCase();
                },
            });
        },
        uppercase: function uppercase(message) {
            if (message === void 0) {
                message = string.uppercase;
            }

            return this.transform(function (value) {
                return !isAbsent(value) ? value.toUpperCase() : value;
            }).test({
                message: message,
                name: 'string_case',
                exclusive: true,
                test: function test(value) {
                    return isAbsent(value) || value === value.toUpperCase();
                },
            });
        },
    });

    var isNaN$1 = function isNaN(value) {
        return value != +value;
    };

    function NumberSchema() {
        var _this = this;

        if (!(this instanceof NumberSchema)) return new NumberSchema();
        SchemaType.call(this, {
            type: 'number',
        });
        this.withMutation(function () {
            _this.transform(function (value) {
                var parsed = value;

                if (typeof parsed === 'string') {
                    parsed = parsed.replace(/\s/g, '');
                    if (parsed === '') return NaN; // don't use parseFloat to avoid positives on alpha-numeric strings

                    parsed = +parsed;
                }

                if (this.isType(parsed)) return parsed;
                return parseFloat(parsed);
            });
        });
    }
    inherits(NumberSchema, SchemaType, {
        _typeCheck: function _typeCheck(value) {
            if (value instanceof Number) value = value.valueOf();
            return typeof value === 'number' && !isNaN$1(value);
        },
        min: function min(_min, message) {
            if (message === void 0) {
                message = number.min;
            }

            return this.test({
                message: message,
                name: 'min',
                exclusive: true,
                params: {
                    min: _min,
                },
                test: function test(value) {
                    return isAbsent(value) || value >= this.resolve(_min);
                },
            });
        },
        max: function max(_max, message) {
            if (message === void 0) {
                message = number.max;
            }

            return this.test({
                message: message,
                name: 'max',
                exclusive: true,
                params: {
                    max: _max,
                },
                test: function test(value) {
                    return isAbsent(value) || value <= this.resolve(_max);
                },
            });
        },
        lessThan: function lessThan(less, message) {
            if (message === void 0) {
                message = number.lessThan;
            }

            return this.test({
                message: message,
                name: 'max',
                exclusive: true,
                params: {
                    less: less,
                },
                test: function test(value) {
                    return isAbsent(value) || value < this.resolve(less);
                },
            });
        },
        moreThan: function moreThan(more, message) {
            if (message === void 0) {
                message = number.moreThan;
            }

            return this.test({
                message: message,
                name: 'min',
                exclusive: true,
                params: {
                    more: more,
                },
                test: function test(value) {
                    return isAbsent(value) || value > this.resolve(more);
                },
            });
        },
        positive: function positive(msg) {
            if (msg === void 0) {
                msg = number.positive;
            }

            return this.moreThan(0, msg);
        },
        negative: function negative(msg) {
            if (msg === void 0) {
                msg = number.negative;
            }

            return this.lessThan(0, msg);
        },
        integer: function integer(message) {
            if (message === void 0) {
                message = number.integer;
            }

            return this.test({
                name: 'integer',
                message: message,
                test: function test(val) {
                    return isAbsent(val) || Number.isInteger(val);
                },
            });
        },
        truncate: function truncate() {
            return this.transform(function (value) {
                return !isAbsent(value) ? value | 0 : value;
            });
        },
        round: function round(method) {
            var avail = ['ceil', 'floor', 'round', 'trunc'];
            method = (method && method.toLowerCase()) || 'round'; // this exists for symemtry with the new Math.trunc

            if (method === 'trunc') return this.truncate();
            if (avail.indexOf(method.toLowerCase()) === -1)
                throw new TypeError(
                    'Only valid options for round() are: ' + avail.join(', ')
                );
            return this.transform(function (value) {
                return !isAbsent(value) ? Math[method](value) : value;
            });
        },
    });

    /* eslint-disable */

    /**
     *
     * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
     * NON-CONFORMANT EDITION.
     * © 2011 Colin Snover <http://zetafleet.com>
     * Released under MIT license.
     */
    //              1 YYYY                 2 MM        3 DD              4 HH     5 mm        6 ss            7 msec         8 Z 9 ±    10 tzHH    11 tzmm
    var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
    function parseIsoDate(date) {
        var numericKeys = [1, 4, 5, 6, 7, 10, 11],
            minutesOffset = 0,
            timestamp,
            struct;

        if ((struct = isoReg.exec(date))) {
            // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
            for (var i = 0, k; (k = numericKeys[i]); ++i) {
                struct[k] = +struct[k] || 0;
            } // allow undefined days and months

            struct[2] = (+struct[2] || 1) - 1;
            struct[3] = +struct[3] || 1; // allow arbitrary sub-second precision beyond milliseconds

            struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0; // timestamps without timezone identifiers should be considered local time

            if (
                (struct[8] === undefined || struct[8] === '') &&
                (struct[9] === undefined || struct[9] === '')
            )
                timestamp = +new Date(
                    struct[1],
                    struct[2],
                    struct[3],
                    struct[4],
                    struct[5],
                    struct[6],
                    struct[7]
                );
            else {
                if (struct[8] !== 'Z' && struct[9] !== undefined) {
                    minutesOffset = struct[10] * 60 + struct[11];
                    if (struct[9] === '+') minutesOffset = 0 - minutesOffset;
                }

                timestamp = Date.UTC(
                    struct[1],
                    struct[2],
                    struct[3],
                    struct[4],
                    struct[5] + minutesOffset,
                    struct[6],
                    struct[7]
                );
            }
        } else timestamp = Date.parse ? Date.parse(date) : NaN;

        return timestamp;
    }

    var invalidDate = new Date('');

    var isDate = function isDate(obj) {
        return Object.prototype.toString.call(obj) === '[object Date]';
    };

    function DateSchema() {
        var _this = this;

        if (!(this instanceof DateSchema)) return new DateSchema();
        SchemaType.call(this, {
            type: 'date',
        });
        this.withMutation(function () {
            _this.transform(function (value) {
                if (this.isType(value)) return value;
                value = parseIsoDate(value); // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.

                return !isNaN(value) ? new Date(value) : invalidDate;
            });
        });
    }

    inherits(DateSchema, SchemaType, {
        _typeCheck: function _typeCheck(v) {
            return isDate(v) && !isNaN(v.getTime());
        },
        min: function min(_min, message) {
            if (message === void 0) {
                message = date.min;
            }

            var limit = _min;

            if (!Reference.isRef(limit)) {
                limit = this.cast(_min);
                if (!this._typeCheck(limit))
                    throw new TypeError(
                        '`min` must be a Date or a value that can be `cast()` to a Date'
                    );
            }

            return this.test({
                message: message,
                name: 'min',
                exclusive: true,
                params: {
                    min: _min,
                },
                test: function test(value) {
                    return isAbsent(value) || value >= this.resolve(limit);
                },
            });
        },
        max: function max(_max, message) {
            if (message === void 0) {
                message = date.max;
            }

            var limit = _max;

            if (!Reference.isRef(limit)) {
                limit = this.cast(_max);
                if (!this._typeCheck(limit))
                    throw new TypeError(
                        '`max` must be a Date or a value that can be `cast()` to a Date'
                    );
            }

            return this.test({
                message: message,
                name: 'max',
                exclusive: true,
                params: {
                    max: _max,
                },
                test: function test(value) {
                    return isAbsent(value) || value <= this.resolve(limit);
                },
            });
        },
    });

    function _taggedTemplateLiteralLoose(strings, raw) {
        if (!raw) {
            raw = strings.slice(0);
        }

        strings.raw = raw;
        return strings;
    }

    /**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1,
            length = array == null ? 0 : array.length;

        if (initAccum && length) {
            accumulator = array[++index];
        }

        while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
        }

        return accumulator;
    }

    /**
     * The base implementation of `_.propertyOf` without support for deep paths.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyOf(object) {
        return function (key) {
            return object == null ? undefined : object[key];
        };
    }

    /** Used to map Latin Unicode letters to basic Latin letters. */

    var deburredLetters = {
        // Latin-1 Supplement block.
        '\xc0': 'A',
        '\xc1': 'A',
        '\xc2': 'A',
        '\xc3': 'A',
        '\xc4': 'A',
        '\xc5': 'A',
        '\xe0': 'a',
        '\xe1': 'a',
        '\xe2': 'a',
        '\xe3': 'a',
        '\xe4': 'a',
        '\xe5': 'a',
        '\xc7': 'C',
        '\xe7': 'c',
        '\xd0': 'D',
        '\xf0': 'd',
        '\xc8': 'E',
        '\xc9': 'E',
        '\xca': 'E',
        '\xcb': 'E',
        '\xe8': 'e',
        '\xe9': 'e',
        '\xea': 'e',
        '\xeb': 'e',
        '\xcc': 'I',
        '\xcd': 'I',
        '\xce': 'I',
        '\xcf': 'I',
        '\xec': 'i',
        '\xed': 'i',
        '\xee': 'i',
        '\xef': 'i',
        '\xd1': 'N',
        '\xf1': 'n',
        '\xd2': 'O',
        '\xd3': 'O',
        '\xd4': 'O',
        '\xd5': 'O',
        '\xd6': 'O',
        '\xd8': 'O',
        '\xf2': 'o',
        '\xf3': 'o',
        '\xf4': 'o',
        '\xf5': 'o',
        '\xf6': 'o',
        '\xf8': 'o',
        '\xd9': 'U',
        '\xda': 'U',
        '\xdb': 'U',
        '\xdc': 'U',
        '\xf9': 'u',
        '\xfa': 'u',
        '\xfb': 'u',
        '\xfc': 'u',
        '\xdd': 'Y',
        '\xfd': 'y',
        '\xff': 'y',
        '\xc6': 'Ae',
        '\xe6': 'ae',
        '\xde': 'Th',
        '\xfe': 'th',
        '\xdf': 'ss',
        // Latin Extended-A block.
        '\u0100': 'A',
        '\u0102': 'A',
        '\u0104': 'A',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u0105': 'a',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010a': 'C',
        '\u010c': 'C',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010b': 'c',
        '\u010d': 'c',
        '\u010e': 'D',
        '\u0110': 'D',
        '\u010f': 'd',
        '\u0111': 'd',
        '\u0112': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u0118': 'E',
        '\u011a': 'E',
        '\u0113': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u0119': 'e',
        '\u011b': 'e',
        '\u011c': 'G',
        '\u011e': 'G',
        '\u0120': 'G',
        '\u0122': 'G',
        '\u011d': 'g',
        '\u011f': 'g',
        '\u0121': 'g',
        '\u0123': 'g',
        '\u0124': 'H',
        '\u0126': 'H',
        '\u0125': 'h',
        '\u0127': 'h',
        '\u0128': 'I',
        '\u012a': 'I',
        '\u012c': 'I',
        '\u012e': 'I',
        '\u0130': 'I',
        '\u0129': 'i',
        '\u012b': 'i',
        '\u012d': 'i',
        '\u012f': 'i',
        '\u0131': 'i',
        '\u0134': 'J',
        '\u0135': 'j',
        '\u0136': 'K',
        '\u0137': 'k',
        '\u0138': 'k',
        '\u0139': 'L',
        '\u013b': 'L',
        '\u013d': 'L',
        '\u013f': 'L',
        '\u0141': 'L',
        '\u013a': 'l',
        '\u013c': 'l',
        '\u013e': 'l',
        '\u0140': 'l',
        '\u0142': 'l',
        '\u0143': 'N',
        '\u0145': 'N',
        '\u0147': 'N',
        '\u014a': 'N',
        '\u0144': 'n',
        '\u0146': 'n',
        '\u0148': 'n',
        '\u014b': 'n',
        '\u014c': 'O',
        '\u014e': 'O',
        '\u0150': 'O',
        '\u014d': 'o',
        '\u014f': 'o',
        '\u0151': 'o',
        '\u0154': 'R',
        '\u0156': 'R',
        '\u0158': 'R',
        '\u0155': 'r',
        '\u0157': 'r',
        '\u0159': 'r',
        '\u015a': 'S',
        '\u015c': 'S',
        '\u015e': 'S',
        '\u0160': 'S',
        '\u015b': 's',
        '\u015d': 's',
        '\u015f': 's',
        '\u0161': 's',
        '\u0162': 'T',
        '\u0164': 'T',
        '\u0166': 'T',
        '\u0163': 't',
        '\u0165': 't',
        '\u0167': 't',
        '\u0168': 'U',
        '\u016a': 'U',
        '\u016c': 'U',
        '\u016e': 'U',
        '\u0170': 'U',
        '\u0172': 'U',
        '\u0169': 'u',
        '\u016b': 'u',
        '\u016d': 'u',
        '\u016f': 'u',
        '\u0171': 'u',
        '\u0173': 'u',
        '\u0174': 'W',
        '\u0175': 'w',
        '\u0176': 'Y',
        '\u0177': 'y',
        '\u0178': 'Y',
        '\u0179': 'Z',
        '\u017b': 'Z',
        '\u017d': 'Z',
        '\u017a': 'z',
        '\u017c': 'z',
        '\u017e': 'z',
        '\u0132': 'IJ',
        '\u0133': 'ij',
        '\u0152': 'Oe',
        '\u0153': 'oe',
        '\u0149': "'n",
        '\u017f': 's',
    };
    /**
     * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
     * letters to basic Latin letters.
     *
     * @private
     * @param {string} letter The matched letter to deburr.
     * @returns {string} Returns the deburred letter.
     */

    var deburrLetter = basePropertyOf(deburredLetters);

    /** Used to match Latin Unicode letters (excluding mathematical operators). */

    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    /** Used to compose unicode character classes. */

    var rsComboMarksRange$2 = '\\u0300-\\u036f',
        reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
        rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
        rsComboRange$2 =
            rsComboMarksRange$2 +
            reComboHalfMarksRange$2 +
            rsComboSymbolsRange$2;
    /** Used to compose unicode capture groups. */

    var rsCombo$1 = '[' + rsComboRange$2 + ']';
    /**
     * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
     * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
     */

    var reComboMark = RegExp(rsCombo$1, 'g');
    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */

    function deburr(string) {
        string = toString(string);
        return (
            string &&
            string.replace(reLatin, deburrLetter).replace(reComboMark, '')
        );
    }

    /** Used to match words composed of alphanumeric characters. */
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    /**
     * Splits an ASCII `string` into an array of its words.
     *
     * @private
     * @param {string} The string to inspect.
     * @returns {Array} Returns the words of `string`.
     */

    function asciiWords(string) {
        return string.match(reAsciiWord) || [];
    }

    /** Used to detect strings that need a more robust regexp to match words. */
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    /**
     * Checks if `string` contains a word composed of Unicode symbols.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {boolean} Returns `true` if a word is found, else `false`.
     */

    function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
    }

    /** Used to compose unicode character classes. */
    var rsAstralRange$2 = '\\ud800-\\udfff',
        rsComboMarksRange$3 = '\\u0300-\\u036f',
        reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
        rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
        rsComboRange$3 =
            rsComboMarksRange$3 +
            reComboHalfMarksRange$3 +
            rsComboSymbolsRange$3,
        rsDingbatRange = '\\u2700-\\u27bf',
        rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
        rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
        rsPunctuationRange = '\\u2000-\\u206f',
        rsSpaceRange =
            ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        rsVarRange$2 = '\\ufe0e\\ufe0f',
        rsBreakRange =
            rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    /** Used to compose unicode capture groups. */

    var rsApos = "['\u2019]",
        rsBreak = '[' + rsBreakRange + ']',
        rsCombo$2 = '[' + rsComboRange$3 + ']',
        rsDigits = '\\d+',
        rsDingbat = '[' + rsDingbatRange + ']',
        rsLower = '[' + rsLowerRange + ']',
        rsMisc =
            '[^' +
            rsAstralRange$2 +
            rsBreakRange +
            rsDigits +
            rsDingbatRange +
            rsLowerRange +
            rsUpperRange +
            ']',
        rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
        rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
        rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
        rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        rsUpper = '[' + rsUpperRange + ']',
        rsZWJ$2 = '\\u200d';
    /** Used to compose unicode regexes. */

    var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
        rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
        rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
        rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
        reOptMod$1 = rsModifier$1 + '?',
        rsOptVar$1 = '[' + rsVarRange$2 + ']?',
        rsOptJoin$1 =
            '(?:' +
            rsZWJ$2 +
            '(?:' +
            [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') +
            ')' +
            rsOptVar$1 +
            reOptMod$1 +
            ')*',
        rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
        rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
        rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
        rsEmoji =
            '(?:' +
            [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') +
            ')' +
            rsSeq$1;
    /** Used to match complex or compound words. */

    var reUnicodeWord = RegExp(
        [
            rsUpper +
                '?' +
                rsLower +
                '+' +
                rsOptContrLower +
                '(?=' +
                [rsBreak, rsUpper, '$'].join('|') +
                ')',
            rsMiscUpper +
                '+' +
                rsOptContrUpper +
                '(?=' +
                [rsBreak, rsUpper + rsMiscLower, '$'].join('|') +
                ')',
            rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
            rsUpper + '+' + rsOptContrUpper,
            rsOrdUpper,
            rsOrdLower,
            rsDigits,
            rsEmoji,
        ].join('|'),
        'g'
    );
    /**
     * Splits a Unicode `string` into an array of its words.
     *
     * @private
     * @param {string} The string to inspect.
     * @returns {Array} Returns the words of `string`.
     */

    function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
    }

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */

    function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined : pattern;

        if (pattern === undefined) {
            return hasUnicodeWord(string)
                ? unicodeWords(string)
                : asciiWords(string);
        }

        return string.match(pattern) || [];
    }

    /** Used to compose unicode capture groups. */

    var rsApos$1 = "['\u2019]";
    /** Used to match apostrophes. */

    var reApos = RegExp(rsApos$1, 'g');
    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */

    function createCompounder(callback) {
        return function (string) {
            return arrayReduce(
                words(deburr(string).replace(reApos, '')),
                callback,
                ''
            );
        };
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */

    var snakeCase = createCompounder(function (result, word, index) {
        return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
        var index = -1,
            length = array.length;

        if (start < 0) {
            start = -start > length ? 0 : length + start;
        }

        end = end > length ? length : end;

        if (end < 0) {
            end += length;
        }

        length = start > end ? 0 : (end - start) >>> 0;
        start >>>= 0;
        var result = Array(length);

        while (++index < length) {
            result[index] = array[index + start];
        }

        return result;
    }

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */

    function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */

    function createCaseFirst(methodName) {
        return function (string) {
            string = toString(string);
            var strSymbols = hasUnicode(string)
                ? stringToArray(string)
                : undefined;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols
                ? castSlice(strSymbols, 1).join('')
                : string.slice(1);
            return chr[methodName]() + trailing;
        };
    }

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */

    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */

    function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */

    var camelCase = createCompounder(function (result, word, index) {
        word = word.toLowerCase();
        return result + (index ? capitalize(word) : word);
    });

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */

    function mapKeys(object, iteratee) {
        var result = {};
        iteratee = baseIteratee(iteratee);
        baseForOwn(object, function (value, key, object) {
            baseAssignValue(result, iteratee(value, key, object), value);
        });
        return result;
    }

    /**
     * Topological sorting function
     *
     * @param {Array} edges
     * @returns {Array}
     */
    var toposort_1 = function (edges) {
        return toposort(uniqueNodes(edges), edges);
    };

    var array$1 = toposort;

    function toposort(nodes, edges) {
        var cursor = nodes.length,
            sorted = new Array(cursor),
            visited = {},
            i = cursor, // Better data structures make algorithm much faster.
            outgoingEdges = makeOutgoingEdges(edges),
            nodesHash = makeNodesHash(nodes); // check for unknown nodes

        edges.forEach(function (edge) {
            if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
                throw new Error(
                    'Unknown node. There is an unknown node in the supplied edges.'
                );
            }
        });

        while (i--) {
            if (!visited[i]) visit(nodes[i], i, new Set());
        }

        return sorted;

        function visit(node, i, predecessors) {
            if (predecessors.has(node)) {
                var nodeRep;

                try {
                    nodeRep = ', node was:' + JSON.stringify(node);
                } catch (e) {
                    nodeRep = '';
                }

                throw new Error('Cyclic dependency' + nodeRep);
            }

            if (!nodesHash.has(node)) {
                throw new Error(
                    'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' +
                        JSON.stringify(node)
                );
            }

            if (visited[i]) return;
            visited[i] = true;
            var outgoing = outgoingEdges.get(node) || new Set();
            outgoing = Array.from(outgoing);

            if ((i = outgoing.length)) {
                predecessors.add(node);

                do {
                    var child = outgoing[--i];
                    visit(child, nodesHash.get(child), predecessors);
                } while (i);

                predecessors.delete(node);
            }

            sorted[--cursor] = node;
        }
    }

    function uniqueNodes(arr) {
        var res = new Set();

        for (var i = 0, len = arr.length; i < len; i++) {
            var edge = arr[i];
            res.add(edge[0]);
            res.add(edge[1]);
        }

        return Array.from(res);
    }

    function makeOutgoingEdges(arr) {
        var edges = new Map();

        for (var i = 0, len = arr.length; i < len; i++) {
            var edge = arr[i];
            if (!edges.has(edge[0])) edges.set(edge[0], new Set());
            if (!edges.has(edge[1])) edges.set(edge[1], new Set());
            edges.get(edge[0]).add(edge[1]);
        }

        return edges;
    }

    function makeNodesHash(arr) {
        var res = new Map();

        for (var i = 0, len = arr.length; i < len; i++) {
            res.set(arr[i], i);
        }

        return res;
    }
    toposort_1.array = array$1;

    function sortFields(fields, excludes) {
        if (excludes === void 0) {
            excludes = [];
        }

        var edges = [],
            nodes = [];

        function addNode(depPath, key) {
            var node = propertyExpr.split(depPath)[0];
            if (!~nodes.indexOf(node)) nodes.push(node);
            if (!~excludes.indexOf(key + '-' + node)) edges.push([key, node]);
        }

        for (var key in fields) {
            if (has(fields, key)) {
                var value = fields[key];
                if (!~nodes.indexOf(key)) nodes.push(key);
                if (Reference.isRef(value) && value.isSibling)
                    addNode(value.path, key);
                else if (isSchema(value) && value._deps)
                    value._deps.forEach(function (path) {
                        return addNode(path, key);
                    });
            }
        }

        return toposort_1.array(nodes, edges).reverse();
    }

    function findIndex(arr, err) {
        var idx = Infinity;
        arr.some(function (key, ii) {
            if (err.path.indexOf(key) !== -1) {
                idx = ii;
                return true;
            }
        });
        return idx;
    }

    function sortByKeyOrder(fields) {
        var keys = Object.keys(fields);
        return function (a, b) {
            return findIndex(keys, a) - findIndex(keys, b);
        };
    }

    function makePath(strings) {
        for (
            var _len = arguments.length,
                values = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
            _key < _len;
            _key++
        ) {
            values[_key - 1] = arguments[_key];
        }

        var path = strings.reduce(function (str, next) {
            var value = values.shift();
            return str + (value == null ? '' : value) + next;
        });
        return path.replace(/^\./, '');
    }

    function _templateObject3() {
        var data = _taggedTemplateLiteralLoose(['', '["', '"]']);

        _templateObject3 = function _templateObject3() {
            return data;
        };

        return data;
    }

    function _templateObject2() {
        var data = _taggedTemplateLiteralLoose(['', '.', '']);

        _templateObject2 = function _templateObject2() {
            return data;
        };

        return data;
    }

    function _templateObject() {
        var data = _taggedTemplateLiteralLoose(['', '.', '']);

        _templateObject = function _templateObject() {
            return data;
        };

        return data;
    }

    var isObject$2 = function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    var promise$1 = function promise(sync) {
        return sync ? synchronousPromise.SynchronousPromise : Promise;
    };

    function unknown(ctx, value) {
        var known = Object.keys(ctx.fields);
        return Object.keys(value).filter(function (key) {
            return known.indexOf(key) === -1;
        });
    }

    function ObjectSchema(spec) {
        var _this2 = this;

        if (!(this instanceof ObjectSchema)) return new ObjectSchema(spec);
        SchemaType.call(this, {
            type: 'object',
            default: function _default() {
                var _this = this;

                if (!this._nodes.length) return undefined;
                var dft = {};

                this._nodes.forEach(function (key) {
                    dft[key] = _this.fields[key].default
                        ? _this.fields[key].default()
                        : undefined;
                });

                return dft;
            },
        });
        this.fields = Object.create(null);
        this._nodes = [];
        this._excludedEdges = [];
        this.withMutation(function () {
            _this2.transform(function coerce(value) {
                if (typeof value === 'string') {
                    try {
                        value = JSON.parse(value);
                    } catch (err) {
                        value = null;
                    }
                }

                if (this.isType(value)) return value;
                return null;
            });

            if (spec) {
                _this2.shape(spec);
            }
        });
    }
    inherits(ObjectSchema, SchemaType, {
        _typeCheck: function _typeCheck(value) {
            return isObject$2(value) || typeof value === 'function';
        },
        _cast: function _cast(_value, options) {
            var _this3 = this;

            if (options === void 0) {
                options = {};
            }

            var value = SchemaType.prototype._cast.call(this, _value, options); //should ignore nulls here

            if (value === undefined) return this.default();
            if (!this._typeCheck(value)) return value;
            var fields = this.fields;
            var strip = this._option('stripUnknown', options) === true;

            var props = this._nodes.concat(
                Object.keys(value).filter(function (v) {
                    return _this3._nodes.indexOf(v) === -1;
                })
            );

            var intermediateValue = {}; // is filled during the transform below

            var innerOptions = _extends({}, options, {
                parent: intermediateValue,
                __validating: options.__validating || false,
            });

            var isChanged = false;
            props.forEach(function (prop) {
                var field = fields[prop];
                var exists = has(value, prop);

                if (field) {
                    var fieldValue;
                    var strict = field._options && field._options.strict; // safe to mutate since this is fired in sequence

                    innerOptions.path = makePath(
                        _templateObject(),
                        options.path,
                        prop
                    );
                    innerOptions.value = value[prop];
                    field = field.resolve(innerOptions);

                    if (field._strip === true) {
                        isChanged = isChanged || prop in value;
                        return;
                    }

                    fieldValue =
                        !options.__validating || !strict
                            ? field.cast(value[prop], innerOptions)
                            : value[prop];
                    if (fieldValue !== undefined)
                        intermediateValue[prop] = fieldValue;
                } else if (exists && !strip) intermediateValue[prop] = value[prop];

                if (intermediateValue[prop] !== value[prop]) isChanged = true;
            });
            return isChanged ? intermediateValue : value;
        },
        _validate: function _validate(_value, opts) {
            var _this4 = this;

            if (opts === void 0) {
                opts = {};
            }

            var endEarly, recursive;
            var sync = opts.sync;
            var errors = [];
            var originalValue =
                opts.originalValue != null ? opts.originalValue : _value;
            var from = [
                {
                    schema: this,
                    value: originalValue,
                },
            ].concat(opts.from || []);
            endEarly = this._option('abortEarly', opts);
            recursive = this._option('recursive', opts);
            opts = _extends({}, opts, {
                __validating: true,
                originalValue: originalValue,
                from: from,
            });
            return SchemaType.prototype._validate
                .call(this, _value, opts)
                .catch(propagateErrors(endEarly, errors))
                .then(function (value) {
                    if (!recursive || !isObject$2(value)) {
                        // only iterate though actual objects
                        if (errors.length) throw errors[0];
                        return value;
                    }

                    from = originalValue
                        ? [].concat(from)
                        : [
                              {
                                  schema: _this4,
                                  value: originalValue || value,
                              },
                          ].concat(opts.from || []);
                    originalValue = originalValue || value;

                    var validations = _this4._nodes.map(function (key) {
                        var path =
                            key.indexOf('.') === -1
                                ? makePath(_templateObject2(), opts.path, key)
                                : makePath(_templateObject3(), opts.path, key);
                        var field = _this4.fields[key];

                        var innerOptions = _extends({}, opts, {
                            path: path,
                            from: from,
                            parent: value,
                            originalValue: originalValue[key],
                        });

                        if (field && field.validate) {
                            // inner fields are always strict:
                            // 1. this isn't strict so the casting will also have cast inner values
                            // 2. this is strict in which case the nested values weren't cast either
                            innerOptions.strict = true;
                            return field.validate(value[key], innerOptions);
                        }

                        return promise$1(sync).resolve(true);
                    });

                    return runValidations({
                        sync: sync,
                        validations: validations,
                        value: value,
                        errors: errors,
                        endEarly: endEarly,
                        path: opts.path,
                        sort: sortByKeyOrder(_this4.fields),
                    });
                });
        },
        concat: function concat(schema) {
            var next = SchemaType.prototype.concat.call(this, schema);
            next._nodes = sortFields(next.fields, next._excludedEdges);
            return next;
        },
        shape: function shape(schema, excludes) {
            if (excludes === void 0) {
                excludes = [];
            }

            var next = this.clone();

            var fields = _extends(next.fields, schema);

            next.fields = fields;

            if (excludes.length) {
                if (!Array.isArray(excludes[0])) excludes = [excludes];
                var keys = excludes.map(function (_ref) {
                    var first = _ref[0],
                        second = _ref[1];
                    return first + '-' + second;
                });
                next._excludedEdges = next._excludedEdges.concat(keys);
            }

            next._nodes = sortFields(fields, next._excludedEdges);
            return next;
        },
        from: function from(_from, to, alias) {
            var fromGetter = propertyExpr.getter(_from, true);
            return this.transform(function (obj) {
                if (obj == null) return obj;
                var newObj = obj;

                if (has(obj, _from)) {
                    newObj = _extends({}, obj);
                    if (!alias) delete newObj[_from];
                    newObj[to] = fromGetter(obj);
                }

                return newObj;
            });
        },
        noUnknown: function noUnknown(noAllow, message) {
            if (noAllow === void 0) {
                noAllow = true;
            }

            if (message === void 0) {
                message = object.noUnknown;
            }

            if (typeof noAllow === 'string') {
                message = noAllow;
                noAllow = true;
            }

            var next = this.test({
                name: 'noUnknown',
                exclusive: true,
                message: message,
                test: function test(value) {
                    if (value == null) return true;
                    var unknownKeys = unknown(this.schema, value);
                    return (
                        !noAllow ||
                        unknownKeys.length === 0 ||
                        this.createError({
                            params: {
                                unknown: unknownKeys.join(', '),
                            },
                        })
                    );
                },
            });
            next._options.stripUnknown = noAllow;
            return next;
        },
        unknown: function unknown(allow, message) {
            if (allow === void 0) {
                allow = true;
            }

            if (message === void 0) {
                message = object.noUnknown;
            }

            return this.noUnknown(!allow, message);
        },
        transformKeys: function transformKeys(fn) {
            return this.transform(function (obj) {
                return (
                    obj &&
                    mapKeys(obj, function (_, key) {
                        return fn(key);
                    })
                );
            });
        },
        camelCase: function camelCase$1() {
            return this.transformKeys(camelCase);
        },
        snakeCase: function snakeCase$1() {
            return this.transformKeys(snakeCase);
        },
        constantCase: function constantCase() {
            return this.transformKeys(function (key) {
                return snakeCase(key).toUpperCase();
            });
        },
        describe: function describe() {
            var base = SchemaType.prototype.describe.call(this);
            base.fields = mapValues(this.fields, function (value) {
                return value.describe();
            });
            return base;
        },
    });

    function _templateObject2$1() {
        var data = _taggedTemplateLiteralLoose(['', '[', ']']);

        _templateObject2$1 = function _templateObject2() {
            return data;
        };

        return data;
    }

    function _templateObject$1() {
        var data = _taggedTemplateLiteralLoose(['', '[', ']']);

        _templateObject$1 = function _templateObject() {
            return data;
        };

        return data;
    }

    function ArraySchema(type) {
        var _this = this;

        if (!(this instanceof ArraySchema)) return new ArraySchema(type);
        SchemaType.call(this, {
            type: 'array',
        }); // `undefined` specifically means uninitialized, as opposed to
        // "no subtype"

        this._subType = undefined;
        this.innerType = undefined;
        this.withMutation(function () {
            _this.transform(function (values) {
                if (typeof values === 'string')
                    try {
                        values = JSON.parse(values);
                    } catch (err) {
                        values = null;
                    }
                return this.isType(values) ? values : null;
            });

            if (type) _this.of(type);
        });
    }

    inherits(ArraySchema, SchemaType, {
        _typeCheck: function _typeCheck(v) {
            return Array.isArray(v);
        },
        _cast: function _cast(_value, _opts) {
            var _this2 = this;

            var value = SchemaType.prototype._cast.call(this, _value, _opts); //should ignore nulls here

            if (!this._typeCheck(value) || !this.innerType) return value;
            var isChanged = false;
            var castArray = value.map(function (v, idx) {
                var castElement = _this2.innerType.cast(
                    v,
                    _extends({}, _opts, {
                        path: makePath(_templateObject$1(), _opts.path, idx),
                    })
                );

                if (castElement !== v) {
                    isChanged = true;
                }

                return castElement;
            });
            return isChanged ? castArray : value;
        },
        _validate: function _validate(_value, options) {
            var _this3 = this;

            if (options === void 0) {
                options = {};
            }

            var errors = [];
            var sync = options.sync;
            var path = options.path;
            var innerType = this.innerType;

            var endEarly = this._option('abortEarly', options);

            var recursive = this._option('recursive', options);

            var originalValue =
                options.originalValue != null ? options.originalValue : _value;
            return SchemaType.prototype._validate
                .call(this, _value, options)
                .catch(propagateErrors(endEarly, errors))
                .then(function (value) {
                    if (!recursive || !innerType || !_this3._typeCheck(value)) {
                        if (errors.length) throw errors[0];
                        return value;
                    }

                    originalValue = originalValue || value; // #950 Ensure that sparse array empty slots are validated

                    var validations = new Array(value.length);

                    for (var idx = 0; idx < value.length; idx++) {
                        var item = value[idx];

                        var _path = makePath(
                            _templateObject2$1(),
                            options.path,
                            idx
                        ); // object._validate note for isStrict explanation

                        var innerOptions = _extends({}, options, {
                            path: _path,
                            strict: true,
                            parent: value,
                            index: idx,
                            originalValue: originalValue[idx],
                        });

                        validations[idx] = innerType.validate
                            ? innerType.validate(item, innerOptions)
                            : true;
                    }

                    return runValidations({
                        sync: sync,
                        path: path,
                        value: value,
                        errors: errors,
                        endEarly: endEarly,
                        validations: validations,
                    });
                });
        },
        _isPresent: function _isPresent(value) {
            return (
                SchemaType.prototype._isPresent.call(this, value) &&
                value.length > 0
            );
        },
        of: function of(schema) {
            var next = this.clone();
            if (schema !== false && !isSchema(schema))
                throw new TypeError(
                    '`array.of()` sub-schema must be a valid yup schema, or `false` to negate a current sub-schema. ' +
                        'not: ' +
                        printValue(schema)
                );
            next._subType = schema;
            next.innerType = schema;
            return next;
        },
        min: function min(_min, message) {
            message = message || array.min;
            return this.test({
                message: message,
                name: 'min',
                exclusive: true,
                params: {
                    min: _min,
                },
                test: function test(value) {
                    return (
                        isAbsent(value) || value.length >= this.resolve(_min)
                    );
                },
            });
        },
        max: function max(_max, message) {
            message = message || array.max;
            return this.test({
                message: message,
                name: 'max',
                exclusive: true,
                params: {
                    max: _max,
                },
                test: function test(value) {
                    return (
                        isAbsent(value) || value.length <= this.resolve(_max)
                    );
                },
            });
        },
        ensure: function ensure() {
            var _this4 = this;

            return this.default(function () {
                return [];
            }).transform(function (val, original) {
                // We don't want to return `null` for nullable schema
                if (_this4._typeCheck(val)) return val;
                return original == null ? [] : [].concat(original);
            });
        },
        compact: function compact(rejector) {
            var reject = !rejector
                ? function (v) {
                      return !!v;
                  }
                : function (v, i, a) {
                      return !rejector(v, i, a);
                  };
            return this.transform(function (values) {
                return values != null ? values.filter(reject) : values;
            });
        },
        describe: function describe() {
            var base = SchemaType.prototype.describe.call(this);
            if (this.innerType) base.innerType = this.innerType.describe();
            return base;
        },
    });

    function createRenderer(renderer) {
        var defaultViewBox = function defaultViewBox(qrcode) {
            if (!qrcode) return '0 0 0 0';
            var nCount = qrcode.getModuleCount(); // 不留间隔

            return qrcode.$options.isSpace
                ? ''
                      .concat(-nCount / 5, ' ')
                      .concat(-nCount / 5, ' ')
                      .concat(nCount + (nCount / 5) * 2, ' ')
                      .concat(nCount + (nCount / 5) * 2)
                : ''.concat(0, ' ', 0, ' ', nCount, ' ').concat(nCount);
        };

        renderer = _objectSpread2(
            _objectSpread2(
                {},
                {
                    getViewBox: defaultViewBox,
                    listPoints: function listPoints(qrcode, params) {
                        return [];
                    },
                    getParamInfo: function getParamInfo() {
                        return [];
                    },
                    beginRendering: function beginRendering(_ref) {
                        var qrcode = _ref.qrcode,
                            params = _ref.params,
                            setParamInfo = _ref.setParamInfo;
                    },
                    beforeListing: function beforeListing(_ref2) {
                        var qrcode = _ref2.qrcode,
                            params = _ref2.params,
                            setParamInfo = _ref2.setParamInfo;
                    },
                    afterListing: function afterListing(_ref3) {
                        var qrcode = _ref3.qrcode,
                            params = _ref3.params,
                            setParamInfo = _ref3.setParamInfo;
                    },
                }
            ),
            renderer
        );
        return function (_ref4) {
            var qrcode = _ref4.qrcode,
                params = _ref4.params;
            var _qrcode$$options = qrcode.$options,
                width = _qrcode$$options.width,
                height = _qrcode$$options.height;
            return '\n            <svg width="'
                .concat(width, '" height="')
                .concat(height, '" viewBox="')
                .concat(
                    renderer.getViewBox(qrcode),
                    '" fill="white"\n                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                '
                )
                .concat(
                    renderer.listPoints(qrcode, params).join(''),
                    '\n            </svg>\n        '
                );
        };
    }

    // ---------------------------------------------------------------------
    // QRCode for JavaScript
    //
    // Copyright (c) 2009 Kazuhiko Arase
    //
    // URL: http://www.d-project.com/
    //
    // Licensed under the MIT license:
    //   http://www.opensource.org/licenses/mit-license.php
    //
    // The word "QR Code" is registered trademark of
    // DENSO WAVE INCORPORATED
    //   http://www.denso-wave.com/qrcode/faqpatent-e.html
    //
    // ---------------------------------------------------------------------

    /* eslint-disable */
    function QR8bitByte(data) {
        this.mode = QRMode.MODE_8BIT_BYTE;
        this.data = data;
        this.parsedData = []; // Added to support UTF-8 Characters

        for (var i = 0, l = this.data.length; i < l; i++) {
            var byteArray = [];
            var code = this.data.charCodeAt(i);

            if (code > 0x10000) {
                byteArray[0] = 0xf0 | ((code & 0x1c0000) >>> 18);
                byteArray[1] = 0x80 | ((code & 0x3f000) >>> 12);
                byteArray[2] = 0x80 | ((code & 0xfc0) >>> 6);
                byteArray[3] = 0x80 | (code & 0x3f);
            } else if (code > 0x800) {
                byteArray[0] = 0xe0 | ((code & 0xf000) >>> 12);
                byteArray[1] = 0x80 | ((code & 0xfc0) >>> 6);
                byteArray[2] = 0x80 | (code & 0x3f);
            } else if (code > 0x80) {
                byteArray[0] = 0xc0 | ((code & 0x7c0) >>> 6);
                byteArray[1] = 0x80 | (code & 0x3f);
            } else {
                byteArray[0] = code;
            }

            this.parsedData.push(byteArray);
        }

        this.parsedData = Array.prototype.concat.apply([], this.parsedData);

        if (this.parsedData.length != this.data.length) {
            this.parsedData.unshift(191);
            this.parsedData.unshift(187);
            this.parsedData.unshift(239);
        }
    }

    QR8bitByte.prototype = {
        getLength: function getLength(buffer) {
            return this.parsedData.length;
        },
        write: function write(buffer) {
            for (var i = 0, l = this.parsedData.length; i < l; i++) {
                buffer.put(this.parsedData[i], 8);
            }
        },
    }; //---------------------------------------------------------------------
    // QRCode
    //---------------------------------------------------------------------

    function QRCode(typeNumber, errorCorrectLevel) {
        this.typeNumber = typeNumber;
        this.errorCorrectLevel = errorCorrectLevel;
        this.modules = null;
        this.moduleCount = 0;
        this.position = [];
        this.dataCache = null;
        this.dataList = [];
    }

    QRCode.prototype = {
        addData: function addData(data) {
            var newData = new QR8bitByte(data);
            this.dataList.push(newData);
            this.dataCache = null;
        },
        isDark: function isDark(row, col) {
            if (
                row < 0 ||
                this.moduleCount <= row ||
                col < 0 ||
                this.moduleCount <= col
            ) {
                throw new Error(row + ',' + col);
            }

            return this.modules[row][col];
        },
        getModuleCount: function getModuleCount() {
            return this.moduleCount;
        },
        getPositionTable: function getPositionTable() {
            return this.position;
        },
        make: function make() {
            // Calculate automatically typeNumber if provided is < 1
            if (this.typeNumber < 1) {
                var typeNumber = 1;

                for (typeNumber = 1; typeNumber < 40; typeNumber++) {
                    var rsBlocks = QRRSBlock.getRSBlocks(
                        typeNumber,
                        this.errorCorrectLevel
                    );
                    var buffer = new QRBitBuffer();
                    var totalDataCount = 0;

                    for (var i = 0; i < rsBlocks.length; i++) {
                        totalDataCount += rsBlocks[i].dataCount;
                    }

                    for (var _i = 0; _i < this.dataList.length; _i++) {
                        var data = this.dataList[_i];
                        buffer.put(data.mode, 4);
                        buffer.put(
                            data.getLength(),
                            QRUtil.getLengthInBits(data.mode, typeNumber)
                        );
                        data.write(buffer);
                    }

                    if (buffer.getLengthInBits() <= totalDataCount * 8) break;
                }

                this.typeNumber = typeNumber;
            }

            this.makeImpl(false, this.getBestMaskPattern());
        },
        makeImpl: function makeImpl(test, maskPattern) {
            this.moduleCount = this.typeNumber * 4 + 17;
            this.modules = new Array(this.moduleCount);

            for (var row = 0; row < this.moduleCount; row++) {
                this.modules[row] = new Array(this.moduleCount);

                for (var col = 0; col < this.moduleCount; col++) {
                    this.modules[row][col] = null; //(col + row) % 3;
                }
            }

            this.setupPositionProbePattern(0, 0);
            this.setupPositionProbePattern(this.moduleCount - 7, 0);
            this.setupPositionProbePattern(0, this.moduleCount - 7);
            this.setupPositionAdjustPattern();
            this.setupTimingPattern();
            this.setupTypeInfo(test, maskPattern);

            if (this.typeNumber >= 7) {
                this.setupTypeNumber(test);
            }

            if (this.dataCache == null) {
                this.dataCache = QRCode.createData(
                    this.typeNumber,
                    this.errorCorrectLevel,
                    this.dataList
                );
            }

            this.mapData(this.dataCache, maskPattern);
        },
        setupPositionProbePattern: function setupPositionProbePattern(
            row,
            col
        ) {
            for (var r = -1; r <= 7; r++) {
                if (row + r <= -1 || this.moduleCount <= row + r) continue;

                for (var c = -1; c <= 7; c++) {
                    if (col + c <= -1 || this.moduleCount <= col + c) continue;

                    if (
                        (0 <= r && r <= 6 && (c == 0 || c == 6)) ||
                        (0 <= c && c <= 6 && (r == 0 || r == 6)) ||
                        (2 <= r && r <= 4 && 2 <= c && c <= 4)
                    ) {
                        this.modules[row + r][col + c] = true;
                    } else {
                        this.modules[row + r][col + c] = false;
                    }
                }
            }
        },
        getBestMaskPattern: function getBestMaskPattern() {
            var minLostPoint = 0;
            var pattern = 0;

            for (var i = 0; i < 8; i++) {
                this.makeImpl(true, i);
                var lostPoint = QRUtil.getLostPoint(this);

                if (i == 0 || minLostPoint > lostPoint) {
                    minLostPoint = lostPoint;
                    pattern = i;
                }
            }

            return pattern;
        },
        createMovieClip: function createMovieClip(
            target_mc,
            instance_name,
            depth
        ) {
            var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
            var cs = 1;
            this.make();

            for (var row = 0; row < this.modules.length; row++) {
                var y = row * cs;

                for (var col = 0; col < this.modules[row].length; col++) {
                    var x = col * cs;
                    var dark = this.modules[row][col];

                    if (dark) {
                        qr_mc.beginFill(0, 100);
                        qr_mc.moveTo(x, y);
                        qr_mc.lineTo(x + cs, y);
                        qr_mc.lineTo(x + cs, y + cs);
                        qr_mc.lineTo(x, y + cs);
                        qr_mc.endFill();
                    }
                }
            }

            return qr_mc;
        },
        setupTimingPattern: function setupTimingPattern() {
            for (var r = 8; r < this.moduleCount - 8; r++) {
                if (this.modules[r][6] != null) {
                    continue;
                }

                this.modules[r][6] = r % 2 == 0;
            }

            for (var c = 8; c < this.moduleCount - 8; c++) {
                if (this.modules[6][c] != null) {
                    continue;
                }

                this.modules[6][c] = c % 2 == 0;
            }
        },
        setupPositionAdjustPattern: function setupPositionAdjustPattern() {
            var pos = QRUtil.getPatternPosition(this.typeNumber);
            this.position = [];

            for (var i = 0; i < pos.length; i++) {
                for (var j = 0; j < pos.length; j++) {
                    var row = pos[i];
                    var col = pos[j];

                    if (this.modules[row][col] != null) {
                        continue;
                    }

                    this.position.push([row, col]);

                    for (var r = -2; r <= 2; r++) {
                        for (var c = -2; c <= 2; c++) {
                            if (
                                r == -2 ||
                                r == 2 ||
                                c == -2 ||
                                c == 2 ||
                                (r == 0 && c == 0)
                            ) {
                                this.modules[row + r][col + c] = true;
                            } else {
                                this.modules[row + r][col + c] = false;
                            }
                        }
                    }
                }
            }
        },
        setupTypeNumber: function setupTypeNumber(test) {
            var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

            for (var i = 0; i < 18; i++) {
                var mod = !test && ((bits >> i) & 1) == 1;
                this.modules[Math.floor(i / 3)][
                    (i % 3) + this.moduleCount - 8 - 3
                ] = mod;
            }

            for (var _i2 = 0; _i2 < 18; _i2++) {
                var _mod = !test && ((bits >> _i2) & 1) == 1;

                this.modules[(_i2 % 3) + this.moduleCount - 8 - 3][
                    Math.floor(_i2 / 3)
                ] = _mod;
            }
        },
        setupTypeInfo: function setupTypeInfo(test, maskPattern) {
            var data = (this.errorCorrectLevel << 3) | maskPattern;
            var bits = QRUtil.getBCHTypeInfo(data); // vertical

            for (var i = 0; i < 15; i++) {
                var mod = !test && ((bits >> i) & 1) == 1;

                if (i < 6) {
                    this.modules[i][8] = mod;
                } else if (i < 8) {
                    this.modules[i + 1][8] = mod;
                } else {
                    this.modules[this.moduleCount - 15 + i][8] = mod;
                }
            } // horizontal

            for (var _i3 = 0; _i3 < 15; _i3++) {
                var _mod2 = !test && ((bits >> _i3) & 1) == 1;

                if (_i3 < 8) {
                    this.modules[8][this.moduleCount - _i3 - 1] = _mod2;
                } else if (_i3 < 9) {
                    this.modules[8][15 - _i3 - 1 + 1] = _mod2;
                } else {
                    this.modules[8][15 - _i3 - 1] = _mod2;
                }
            } // fixed module

            this.modules[this.moduleCount - 8][8] = !test;
        },
        mapData: function mapData(data, maskPattern) {
            var inc = -1;
            var row = this.moduleCount - 1;
            var bitIndex = 7;
            var byteIndex = 0;

            for (var col = this.moduleCount - 1; col > 0; col -= 2) {
                if (col == 6) col--;

                while (true) {
                    for (var c = 0; c < 2; c++) {
                        if (this.modules[row][col - c] == null) {
                            var dark = false;

                            if (byteIndex < data.length) {
                                dark =
                                    ((data[byteIndex] >>> bitIndex) & 1) == 1;
                            }

                            var mask = QRUtil.getMask(
                                maskPattern,
                                row,
                                col - c
                            );

                            if (mask) {
                                dark = !dark;
                            }

                            this.modules[row][col - c] = dark;
                            bitIndex--;

                            if (bitIndex == -1) {
                                byteIndex++;
                                bitIndex = 7;
                            }
                        }
                    }

                    row += inc;

                    if (row < 0 || this.moduleCount <= row) {
                        row -= inc;
                        inc = -inc;
                        break;
                    }
                }
            }
        },
    };
    QRCode.PAD0 = 0xec;
    QRCode.PAD1 = 0x11;

    QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
        var buffer = new QRBitBuffer();

        for (var i = 0; i < dataList.length; i++) {
            var data = dataList[i];
            buffer.put(data.mode, 4);
            buffer.put(
                data.getLength(),
                QRUtil.getLengthInBits(data.mode, typeNumber)
            );
            data.write(buffer);
        } // calc num max data.

        var totalDataCount = 0;

        for (var _i4 = 0; _i4 < rsBlocks.length; _i4++) {
            totalDataCount += rsBlocks[_i4].dataCount;
        }

        if (buffer.getLengthInBits() > totalDataCount * 8) {
            throw new Error(
                'code length overflow. (' +
                    buffer.getLengthInBits() +
                    '>' +
                    totalDataCount * 8 +
                    ')'
            );
        } // end code

        if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
            buffer.put(0, 4);
        } // padding

        while (buffer.getLengthInBits() % 8 != 0) {
            buffer.putBit(false);
        } // padding

        while (true) {
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                break;
            }

            buffer.put(QRCode.PAD0, 8);

            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                break;
            }

            buffer.put(QRCode.PAD1, 8);
        }

        return QRCode.createBytes(buffer, rsBlocks);
    };

    QRCode.createBytes = function (buffer, rsBlocks) {
        var offset = 0;
        var maxDcCount = 0;
        var maxEcCount = 0;
        var dcdata = new Array(rsBlocks.length);
        var ecdata = new Array(rsBlocks.length);

        for (var r = 0; r < rsBlocks.length; r++) {
            var dcCount = rsBlocks[r].dataCount;
            var ecCount = rsBlocks[r].totalCount - dcCount;
            maxDcCount = Math.max(maxDcCount, dcCount);
            maxEcCount = Math.max(maxEcCount, ecCount);
            dcdata[r] = new Array(dcCount);

            for (var i = 0; i < dcdata[r].length; i++) {
                dcdata[r][i] = 0xff & buffer.buffer[i + offset];
            }

            offset += dcCount;
            var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
            var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
            var modPoly = rawPoly.mod(rsPoly);
            ecdata[r] = new Array(rsPoly.getLength() - 1);

            for (var _i5 = 0; _i5 < ecdata[r].length; _i5++) {
                var modIndex = _i5 + modPoly.getLength() - ecdata[r].length;
                ecdata[r][_i5] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
            }
        }

        var totalCodeCount = 0;

        for (var _i6 = 0; _i6 < rsBlocks.length; _i6++) {
            totalCodeCount += rsBlocks[_i6].totalCount;
        }

        var data = new Array(totalCodeCount);
        var index = 0;

        for (var _i7 = 0; _i7 < maxDcCount; _i7++) {
            for (var _r = 0; _r < rsBlocks.length; _r++) {
                if (_i7 < dcdata[_r].length) {
                    data[index++] = dcdata[_r][_i7];
                }
            }
        }

        for (var _i8 = 0; _i8 < maxEcCount; _i8++) {
            for (var _r2 = 0; _r2 < rsBlocks.length; _r2++) {
                if (_i8 < ecdata[_r2].length) {
                    data[index++] = ecdata[_r2][_i8];
                }
            }
        }

        return data;
    }; //---------------------------------------------------------------------
    // QRMode
    //---------------------------------------------------------------------

    var QRMode = {
        MODE_NUMBER: 1 << 0,
        MODE_ALPHA_NUM: 1 << 1,
        MODE_8BIT_BYTE: 1 << 2,
        MODE_KANJI: 1 << 3,
    }; //---------------------------------------------------------------------
    // QRErrorCorrectLevel
    //---------------------------------------------------------------------

    var QRErrorCorrectLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2,
    }; //---------------------------------------------------------------------
    // QRMaskPattern
    //---------------------------------------------------------------------

    var QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
    }; //---------------------------------------------------------------------
    // QRUtil
    //---------------------------------------------------------------------

    var QRUtil = {
        PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
        ],
        G15:
            (1 << 10) |
            (1 << 8) |
            (1 << 5) |
            (1 << 4) |
            (1 << 2) |
            (1 << 1) |
            (1 << 0),
        G18:
            (1 << 12) |
            (1 << 11) |
            (1 << 10) |
            (1 << 9) |
            (1 << 8) |
            (1 << 5) |
            (1 << 2) |
            (1 << 0),
        G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
        getBCHTypeInfo: function getBCHTypeInfo(data) {
            var d = data << 10;

            while (
                QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >=
                0
            ) {
                d ^=
                    QRUtil.G15 <<
                    (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15));
            }

            return ((data << 10) | d) ^ QRUtil.G15_MASK;
        },
        getBCHTypeNumber: function getBCHTypeNumber(data) {
            var d = data << 12;

            while (
                QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >=
                0
            ) {
                d ^=
                    QRUtil.G18 <<
                    (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18));
            }

            return (data << 12) | d;
        },
        getBCHDigit: function getBCHDigit(data) {
            var digit = 0;

            while (data != 0) {
                digit++;
                data >>>= 1;
            }

            return digit;
        },
        getPatternPosition: function getPatternPosition(typeNumber) {
            return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        },
        getMask: function getMask(maskPattern, i, j) {
            switch (maskPattern) {
                case QRMaskPattern.PATTERN000:
                    return (i + j) % 2 == 0;

                case QRMaskPattern.PATTERN001:
                    return i % 2 == 0;

                case QRMaskPattern.PATTERN010:
                    return j % 3 == 0;

                case QRMaskPattern.PATTERN011:
                    return (i + j) % 3 == 0;

                case QRMaskPattern.PATTERN100:
                    return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

                case QRMaskPattern.PATTERN101:
                    return ((i * j) % 2) + ((i * j) % 3) == 0;

                case QRMaskPattern.PATTERN110:
                    return (((i * j) % 2) + ((i * j) % 3)) % 2 == 0;

                case QRMaskPattern.PATTERN111:
                    return (((i * j) % 3) + ((i + j) % 2)) % 2 == 0;

                default:
                    throw new Error('bad maskPattern:' + maskPattern);
            }
        },
        getErrorCorrectPolynomial: function getErrorCorrectPolynomial(
            errorCorrectLength
        ) {
            var a = new QRPolynomial([1], 0);

            for (var i = 0; i < errorCorrectLength; i++) {
                a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
            }

            return a;
        },
        getLengthInBits: function getLengthInBits(mode, type) {
            if (1 <= type && type < 10) {
                // 1 - 9
                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 10;

                    case QRMode.MODE_ALPHA_NUM:
                        return 9;

                    case QRMode.MODE_8BIT_BYTE:
                        return 8;

                    case QRMode.MODE_KANJI:
                        return 8;

                    default:
                        throw new Error('mode:' + mode);
                }
            } else if (type < 27) {
                // 10 - 26
                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 12;

                    case QRMode.MODE_ALPHA_NUM:
                        return 11;

                    case QRMode.MODE_8BIT_BYTE:
                        return 16;

                    case QRMode.MODE_KANJI:
                        return 10;

                    default:
                        throw new Error('mode:' + mode);
                }
            } else if (type < 41) {
                // 27 - 40
                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 14;

                    case QRMode.MODE_ALPHA_NUM:
                        return 13;

                    case QRMode.MODE_8BIT_BYTE:
                        return 16;

                    case QRMode.MODE_KANJI:
                        return 12;

                    default:
                        throw new Error('mode:' + mode);
                }
            } else {
                throw new Error('type:' + type);
            }
        },
        getLostPoint: function getLostPoint(qrCode) {
            var moduleCount = qrCode.getModuleCount();
            var lostPoint = 0; // LEVEL1

            for (var row = 0; row < moduleCount; row++) {
                for (var col = 0; col < moduleCount; col++) {
                    var sameCount = 0;
                    var dark = qrCode.isDark(row, col);

                    for (var r = -1; r <= 1; r++) {
                        if (row + r < 0 || moduleCount <= row + r) {
                            continue;
                        }

                        for (var c = -1; c <= 1; c++) {
                            if (col + c < 0 || moduleCount <= col + c) {
                                continue;
                            }

                            if (r == 0 && c == 0) {
                                continue;
                            }

                            if (dark == qrCode.isDark(row + r, col + c)) {
                                sameCount++;
                            }
                        }
                    }

                    if (sameCount > 5) {
                        lostPoint += 3 + sameCount - 5;
                    }
                }
            } // LEVEL2

            for (var _row = 0; _row < moduleCount - 1; _row++) {
                for (var _col = 0; _col < moduleCount - 1; _col++) {
                    var count = 0;
                    if (qrCode.isDark(_row, _col)) count++;
                    if (qrCode.isDark(_row + 1, _col)) count++;
                    if (qrCode.isDark(_row, _col + 1)) count++;
                    if (qrCode.isDark(_row + 1, _col + 1)) count++;

                    if (count == 0 || count == 4) {
                        lostPoint += 3;
                    }
                }
            } // LEVEL3

            for (var _row2 = 0; _row2 < moduleCount; _row2++) {
                for (var _col2 = 0; _col2 < moduleCount - 6; _col2++) {
                    if (
                        qrCode.isDark(_row2, _col2) &&
                        !qrCode.isDark(_row2, _col2 + 1) &&
                        qrCode.isDark(_row2, _col2 + 2) &&
                        qrCode.isDark(_row2, _col2 + 3) &&
                        qrCode.isDark(_row2, _col2 + 4) &&
                        !qrCode.isDark(_row2, _col2 + 5) &&
                        qrCode.isDark(_row2, _col2 + 6)
                    ) {
                        lostPoint += 40;
                    }
                }
            }

            for (var _col3 = 0; _col3 < moduleCount; _col3++) {
                for (var _row3 = 0; _row3 < moduleCount - 6; _row3++) {
                    if (
                        qrCode.isDark(_row3, _col3) &&
                        !qrCode.isDark(_row3 + 1, _col3) &&
                        qrCode.isDark(_row3 + 2, _col3) &&
                        qrCode.isDark(_row3 + 3, _col3) &&
                        qrCode.isDark(_row3 + 4, _col3) &&
                        !qrCode.isDark(_row3 + 5, _col3) &&
                        qrCode.isDark(_row3 + 6, _col3)
                    ) {
                        lostPoint += 40;
                    }
                }
            } // LEVEL4

            var darkCount = 0;

            for (var _col4 = 0; _col4 < moduleCount; _col4++) {
                for (var _row4 = 0; _row4 < moduleCount; _row4++) {
                    if (qrCode.isDark(_row4, _col4)) {
                        darkCount++;
                    }
                }
            }

            var ratio =
                Math.abs((100 * darkCount) / moduleCount / moduleCount - 50) /
                5;
            lostPoint += ratio * 10;
            return lostPoint;
        },
    }; //---------------------------------------------------------------------
    // QRMath
    //---------------------------------------------------------------------

    var QRMath = {
        glog: function glog(n) {
            if (n < 1) {
                throw new Error('glog(' + n + ')');
            }

            return QRMath.LOG_TABLE[n];
        },
        gexp: function gexp(n) {
            while (n < 0) {
                n += 255;
            }

            while (n >= 256) {
                n -= 255;
            }

            return QRMath.EXP_TABLE[n];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256),
    };

    for (var i = 0; i < 8; i++) {
        QRMath.EXP_TABLE[i] = 1 << i;
    }

    for (var _i9 = 8; _i9 < 256; _i9++) {
        QRMath.EXP_TABLE[_i9] =
            QRMath.EXP_TABLE[_i9 - 4] ^
            QRMath.EXP_TABLE[_i9 - 5] ^
            QRMath.EXP_TABLE[_i9 - 6] ^
            QRMath.EXP_TABLE[_i9 - 8];
    }

    for (var _i10 = 0; _i10 < 255; _i10++) {
        QRMath.LOG_TABLE[QRMath.EXP_TABLE[_i10]] = _i10;
    } //---------------------------------------------------------------------
    // QRPolynomial
    //---------------------------------------------------------------------

    function QRPolynomial(num, shift) {
        if (num.length == undefined) {
            throw new Error(num.length + '/' + shift);
        }

        var offset = 0;

        while (offset < num.length && num[offset] == 0) {
            offset++;
        }

        this.num = new Array(num.length - offset + shift);

        for (var _i11 = 0; _i11 < num.length - offset; _i11++) {
            this.num[_i11] = num[_i11 + offset];
        }
    }

    QRPolynomial.prototype = {
        get: function get(index) {
            return this.num[index];
        },
        getLength: function getLength() {
            return this.num.length;
        },
        multiply: function multiply(e) {
            var num = new Array(this.getLength() + e.getLength() - 1);

            for (var _i12 = 0; _i12 < this.getLength(); _i12++) {
                for (var j = 0; j < e.getLength(); j++) {
                    num[_i12 + j] ^= QRMath.gexp(
                        QRMath.glog(this.get(_i12)) + QRMath.glog(e.get(j))
                    );
                }
            }

            return new QRPolynomial(num, 0);
        },
        mod: function mod(e) {
            if (this.getLength() - e.getLength() < 0) {
                return this;
            }

            var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
            var num = new Array(this.getLength());

            for (var _i13 = 0; _i13 < this.getLength(); _i13++) {
                num[_i13] = this.get(_i13);
            }

            for (var _i14 = 0; _i14 < e.getLength(); _i14++) {
                num[_i14] ^= QRMath.gexp(QRMath.glog(e.get(_i14)) + ratio);
            } // recursive call

            return new QRPolynomial(num, 0).mod(e);
        },
    }; //---------------------------------------------------------------------
    // QRRSBlock
    //---------------------------------------------------------------------

    function QRRSBlock(totalCount, dataCount) {
        this.totalCount = totalCount;
        this.dataCount = dataCount;
    }

    QRRSBlock.RS_BLOCK_TABLE = [
        // L
        // M
        // Q
        // H
        // 1
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9], // 2
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16], // 3
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13], // 4
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9], // 5
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12], // 6
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15], // 7
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14], // 8
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15], // 9
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13], // 10
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16], // 11
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13], // 12
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15], // 13
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12], // 14
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13], // 15
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12], // 16
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16], // 17
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15], // 18
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15], // 19
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14], // 20
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16], // 21
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17], // 22
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13], // 23
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16], // 24
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17], // 25
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16], // 26
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17], // 27
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16], // 28
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16], // 29
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16], // 30
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16], // 31
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16], // 32
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16], // 33
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16], // 34
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17], // 35
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16], // 36
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16], // 37
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16], // 38
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16], // 39
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16], // 40
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16],
    ];

    QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
        var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

        if (rsBlock == undefined) {
            throw new Error(
                'bad rs block @ typeNumber:' +
                    typeNumber +
                    '/errorCorrectLevel:' +
                    errorCorrectLevel
            );
        }

        var length = rsBlock.length / 3;
        var list = [];

        for (var _i15 = 0; _i15 < length; _i15++) {
            var count = rsBlock[_i15 * 3 + 0];
            var totalCount = rsBlock[_i15 * 3 + 1];
            var dataCount = rsBlock[_i15 * 3 + 2];

            for (var j = 0; j < count; j++) {
                list.push(new QRRSBlock(totalCount, dataCount));
            }
        }

        return list;
    };

    QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
        switch (errorCorrectLevel) {
            case QRErrorCorrectLevel.L:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

            case QRErrorCorrectLevel.M:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

            case QRErrorCorrectLevel.Q:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

            case QRErrorCorrectLevel.H:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

            default:
                return undefined;
        }
    }; //---------------------------------------------------------------------
    // QRBitBuffer
    //---------------------------------------------------------------------

    function QRBitBuffer() {
        this.buffer = [];
        this.length = 0;
    }

    QRBitBuffer.prototype = {
        get: function get(index) {
            var bufIndex = Math.floor(index / 8);
            return ((this.buffer[bufIndex] >>> (7 - (index % 8))) & 1) == 1;
        },
        put: function put(num, length) {
            for (var _i16 = 0; _i16 < length; _i16++) {
                this.putBit(((num >>> (length - _i16 - 1)) & 1) == 1);
            }
        },
        getLengthInBits: function getLengthInBits() {
            return this.length;
        },
        putBit: function putBit(bit) {
            var bufIndex = Math.floor(this.length / 8);

            if (this.buffer.length <= bufIndex) {
                this.buffer.push(0);
            }

            if (bit) {
                this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
            }

            this.length++;
        },
    };

    var QRPointType = {
        DATA: 0,
        POS_CENTER: 1,
        POS_OTHER: 2,
        ALIGN_CENTER: 3,
        ALIGN_OTHER: 4,
        TIMING: 5,
        FORMAT: 6,
        VERSION: 7,
    };
    /**
     * 生成二维码数据
     * @param {Object} options
     * @param {String} options.text 二维码内容
     * @param {String} [options.render]
     * @param {Number} [options.width]
     * @param {Number} [options.height]
     * @param {Number} [options.typeNumber]
     * @param {Number} [options.correctLevel] 容错率 1=>7% 0 =>15% 3=>25% 2=>30%
     * @param {String} [options.background]
     * @param {String} [options.foreground]
     */

    function encodeData(options) {
        if (!options.text || options.text.length <= 0) return null;
        options = _objectSpread2(
            _objectSpread2(
                {},
                {
                    render: 'canvas',
                    width: '100%',
                    height: '100%',
                    typeNumber: -1,
                    correctLevel: 1,
                    background: '#ffffff',
                    foreground: '#000000',
                    isSpace: true,
                }
            ),
            options
        );
        var qrcode = new QRCode(options.typeNumber, options.correctLevel);
        qrcode.addData(options.text);
        qrcode.make();
        qrcode.$options = options;
        return qrcode;
    }
    function getTypeTable(qrcode) {
        var nCount = qrcode.getModuleCount();
        var position = qrcode.getPositionTable();
        var PD = [
            [3, 3],
            [3, nCount - 4],
            [nCount - 4, 3],
        ];
        var typeTable = new Array(nCount);

        for (var i = 0; i < nCount; i++) {
            typeTable[i] = new Array(nCount);
        }

        for (var _i = 8; _i < nCount - 7; _i++) {
            typeTable[_i][6] = typeTable[6][_i] = QRPointType.TIMING;
        }

        for (var _i2 = 0; _i2 < position.length; _i2++) {
            typeTable[position[_i2][0]][position[_i2][1]] =
                QRPointType.ALIGN_CENTER;

            for (var r = -2; r <= 2; r++) {
                for (var c = -2; c <= 2; c++) {
                    if (!(r === 0 && c === 0))
                        typeTable[position[_i2][0] + r][position[_i2][1] + c] =
                            QRPointType.ALIGN_OTHER;
                }
            }
        }

        for (var _i3 = 0; _i3 < PD.length; _i3++) {
            typeTable[PD[_i3][0]][PD[_i3][1]] = QRPointType.POS_CENTER;

            for (var _r = -4; _r <= 4; _r++) {
                for (var _c = -4; _c <= 4; _c++) {
                    if (
                        PD[_i3][0] + _r >= 0 &&
                        PD[_i3][0] + _r < nCount &&
                        PD[_i3][1] + _c >= 0 &&
                        PD[_i3][1] + _c < nCount
                    )
                        if (!(_r === 0 && _c === 0))
                            typeTable[PD[_i3][0] + _r][PD[_i3][1] + _c] =
                                QRPointType.POS_OTHER;
                }
            }
        }

        for (var _i4 = 0; _i4 <= 8; _i4++) {
            if (_i4 !== 6)
                typeTable[_i4][8] = typeTable[8][_i4] = QRPointType.FORMAT;
            if (_i4 < 7) typeTable[nCount - _i4 - 1][8] = QRPointType.FORMAT;
            if (_i4 < 8) typeTable[8][nCount - _i4 - 1] = QRPointType.FORMAT;
        }

        for (var _i5 = nCount - 11; _i5 <= nCount - 9; _i5++) {
            for (var j = 0; j <= 5; j++) {
                typeTable[_i5][j] = typeTable[j][_i5] = QRPointType.VERSION;
            }
        }

        for (var _i6 = 0; _i6 < nCount; _i6++) {
            for (var _j = 0; _j < nCount; _j++) {
                if (!typeTable[_i6][_j]) typeTable[_i6][_j] = QRPointType.DATA;
            }
        }

        return typeTable;
    }

    function rand(min, max) {
        var seed = 0;
        seed = (seed * 9301 + 49297) % 233280;
        return min + (seed / 233280.0) * (max - min);
    }

    function listPoints(qrcode, params) {
        if (!qrcode) return [];
        var nCount = qrcode.getModuleCount();
        var typeTable = getTypeTable(qrcode);
        var pointList = new Array(nCount);
        var type = params[0];
        var size = params[1] / 100;
        var opacity = params[2] / 100;
        var posType = params[3];
        var id = 0;
        var otherColor = params[4];
        var posColor = params[5];
        var vw = [3, -3];
        var vh = [3, -3];
        var sq25 =
            'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';
        if (size <= 0) size = 1.0;

        for (var x = 0; x < nCount; x++) {
            for (var y = 0; y < nCount; y++) {
                if (qrcode.isDark(x, y) === false) continue;

                if (
                    typeTable[x][y] === QRPointType.ALIGN_CENTER ||
                    typeTable[x][y] === QRPointType.ALIGN_OTHER ||
                    typeTable[x][y] === QRPointType.TIMING
                ) {
                    if (type === 0)
                        pointList.push(
                            '<rect\n                            opacity="'
                                .concat(
                                    opacity,
                                    '"\n                            width="'
                                )
                                .concat(
                                    size,
                                    '"\n                            height="'
                                )
                                .concat(
                                    size,
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                            x="'
                                )
                                .concat(
                                    x + (1 - size) / 2,
                                    '"\n                            y="'
                                )
                                .concat(
                                    y + (1 - size) / 2,
                                    '"\n                        />'
                                )
                        );
                    else if (type === 1)
                        pointList.push(
                            '<circle\n                            opacity="'
                                .concat(
                                    opacity,
                                    '"\n                            r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                        />'
                                )
                        );
                    else if (type === 2)
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            opacity="'
                                )
                                .concat(
                                    opacity,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                        />'
                                )
                        );
                } else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            x="'
                                )
                                .concat(x, '"\n                            y="')
                                .concat(y, '"\n                        />')
                        );
                    } else if (posType === 1) {
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="none"\n                            stroke-width="1"\n                            stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    3,
                                    '"\n                        />'
                                )
                        );
                    } else if (posType === 2) {
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="none"\n                            stroke-width="0.15"\n                            stroke-dasharray="0.5,0.5"\n                            stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    3,
                                    '"\n                        />'
                                )
                        );

                        for (var w = 0; w < vw.length; w++) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + vw[w] + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                r="',
                                        0.5,
                                        '"\n                            />'
                                    )
                            );
                        }

                        for (var h = 0; h < vh.length; h++) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + vh[h] + 0.5,
                                        '"\n                                r="',
                                        0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    } else if (posType === 3) {
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<path\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            d="'
                                )
                                .concat(
                                    sq25,
                                    '"\n                            stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            stroke-width="'
                                )
                                .concat(
                                    (100 / 6) * (1 - (1 - size) * 0.75),
                                    '"\n                            fill="none"\n                            transform="'
                                )
                                .concat(
                                    'translate(' +
                                        String(x - 2.5) +
                                        ',' +
                                        String(y - 2.5) +
                                        ') ' +
                                        'scale(' +
                                        String(6 / 100) +
                                        ',' +
                                        String(6 / 100) +
                                        ')',
                                    '"\n                        />'
                                )
                        );
                    }
                } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            x="'
                                )
                                .concat(x, '"\n                            y="')
                                .concat(y, '"\n                        />')
                        );
                    }
                } else {
                    if (type === 0)
                        pointList.push(
                            '<rect\n                            opacity="'
                                .concat(
                                    opacity,
                                    '"\n                            width="'
                                )
                                .concat(
                                    size,
                                    '"\n                            height="'
                                )
                                .concat(
                                    size,
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                            x="'
                                )
                                .concat(
                                    x + (1 - size) / 2,
                                    '"\n                            y="'
                                )
                                .concat(
                                    y + (1 - size) / 2,
                                    '"\n                        />'
                                )
                        );
                    else if (type === 1)
                        pointList.push(
                            '<circle\n                            opacity="'
                                .concat(
                                    opacity,
                                    '"\n                            r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                        />'
                                )
                        );
                    else if (type === 2)
                        pointList.push(
                            '<circle\n                            opacity="'
                                .concat(
                                    opacity,
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="'
                                )
                                .concat(
                                    0.5 * rand(0.33, 1.0),
                                    '"\n                        />'
                                )
                        );
                }
            }
        }

        return pointList;
    }

    var schemaBase = ObjectSchema().shape({
        // 信息点样式 ['矩形', '圆形', '随机']
        type: SchemaType().oneOf([0, 1, 2])['default'](0),
        // 信息点缩放
        size: NumberSchema()['default'](100),
        // 信息点不透明度
        opacity: NumberSchema()['default'](100),
        // 定位点样式['矩形', '圆形', '行星','圆角矩形']
        posType: SchemaType().oneOf([0, 1, 2, 3])['default'](0),
        // 信息点颜色
        otherColor: StringSchema()['default']('#000000'),
        // 定位点点颜色
        posColor: StringSchema()['default']('#000000'),
    });
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
     * @param {Number} [options.size] 信息点缩放
     * @param {String} [options.opacity]  信息点不透明度
     * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
     * @param {String} [options.otherColor] 信息点颜色
     * @param {String} [options.posColor] 定位点点颜色
     */

    var rendererBase = function rendererBase(qrcode, options) {
        try {
            options = schemaBase.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = [
            'type',
            'size',
            'opacity',
            'posType',
            'otherColor',
            'posColor',
        ].map(function (k) {
            return options[k];
        });
        var svg = createRenderer({
            listPoints: listPoints,
        })({
            qrcode: qrcode,
            params: params,
        });
        return svg;
    };
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
     * @param {Number} [options.size] 信息点缩放
     * @param {String} [options.opacity]  信息点不透明度
     * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星
     * @param {String} [options.otherColor] 信息点颜色
     * @param {String} [options.posColor] 定位点点颜色
     */

    var rendererRect = function rendererRect(qrcode) {
        var options =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
        options = _objectSpread2(
            _objectSpread2(
                {},
                {
                    type: 0,
                    size: 100,
                    opacity: 100,
                    posType: 0,
                }
            ),
            options
        );
        return rendererBase(qrcode, options);
    };
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
     * @param {Number} [options.size] 信息点缩放
     * @param {String} [options.opacity]  信息点不透明度
     * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星
     * @param {String} [options.otherColor] 信息点颜色
     * @param {String} [options.posColor] 定位点点颜色
     */

    var rendererRound = function rendererRound(qrcode) {
        var options =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
        options = _objectSpread2(
            _objectSpread2(
                {},
                {
                    type: 1,
                    size: 50,
                    opacity: 30,
                    posType: 1,
                }
            ),
            options
        );
        return rendererBase(qrcode, options);
    };
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
     * @param {Number} [options.size] 信息点缩放
     * @param {String} [options.opacity]  信息点不透明度
     * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星
     * @param {String} [options.otherColor] 信息点颜色
     * @param {String} [options.posColor] 定位点点颜色
     */

    var rendererRandRound = function rendererRandRound(qrcode) {
        var options =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
        options = _objectSpread2(
            _objectSpread2(
                {},
                {
                    type: 2,
                    size: 80,
                    opacity: 100,
                    posType: 2,
                }
            ),
            options
        );
        return rendererBase(qrcode, options);
    };

    function listPoints$1(qrcode, params) {
        if (!qrcode) return [];
        var nCount = qrcode.getModuleCount();
        var typeTable = getTypeTable(qrcode);
        var pointList = [];
        var g1 = [];
        var g2 = [];
        var width2 = params[0] / 100;
        var width1 = params[1] / 100;
        var width3 = params[2] / 100;
        var posType = params[3];
        var id = 0;
        if (width2 <= 0) width2 = 70;
        if (width1 <= 0) width1 = 70;
        var available = [];
        var ava2 = [];

        for (var x = 0; x < nCount; x++) {
            available[x] = [];
            ava2[x] = [];

            for (var y = 0; y < nCount; y++) {
                available[x][y] = true;
                ava2[x][y] = true;
            }
        }

        for (var _y = 0; _y < nCount; _y++) {
            for (var _x = 0; _x < nCount; _x++) {
                if (qrcode.isDark(_x, _y) === false) continue;
                else if (typeTable[_x][_y] === QRPointType.POS_CENTER) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    id++,
                                    '"\n                            fill="#0B2D97"\n                            x="'
                                )
                                .concat(
                                    _x,
                                    '"\n                            y="'
                                )
                                .concat(_y, '"\n                        />')
                        );
                    } else if (posType === 1) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    3 - (1 - width3),
                                    '"\n                            height="'
                                )
                                .concat(
                                    3 - (1 - width3),
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="#0B2D97"\n                            x="'
                                )
                                .concat(
                                    _x - 1 + (1 - width3) / 2,
                                    '"\n                            y="'
                                )
                                .concat(
                                    _y - 1 + (1 - width3) / 2,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    width3,
                                    '"\n                            height="'
                                )
                                .concat(
                                    3 - (1 - width3),
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="#0B2D97"\n                            x="'
                                )
                                .concat(
                                    _x - 3 + (1 - width3) / 2,
                                    '"\n                            y="'
                                )
                                .concat(
                                    _y - 1 + (1 - width3) / 2,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    width3,
                                    '"\n                            height="'
                                )
                                .concat(
                                    3 - (1 - width3),
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="#0B2D97"\n                            x="'
                                )
                                .concat(
                                    _x + 3 + (1 - width3) / 2,
                                    '"\n                            y="'
                                )
                                .concat(
                                    _y - 1 + (1 - width3) / 2,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    3 - (1 - width3),
                                    '"\n                            height="'
                                )
                                .concat(
                                    width3,
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="#0B2D97"\n                            x="'
                                )
                                .concat(
                                    _x - 1 + (1 - width3) / 2,
                                    '"\n                            y="'
                                )
                                .concat(
                                    _y - 3 + (1 - width3) / 2,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    3 - (1 - width3),
                                    '"\n                            height="'
                                )
                                .concat(
                                    width3,
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="#0B2D97"\n                            x="'
                                )
                                .concat(
                                    _x - 1 + (1 - width3) / 2,
                                    '"\n                            y="'
                                )
                                .concat(
                                    _y + 3 + (1 - width3) / 2,
                                    '"\n                        />'
                                )
                        );
                    }
                } else if (typeTable[_x][_y] === QRPointType.POS_OTHER) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    id++,
                                    '"\n                            fill="#0B2D97"\n                            x="'
                                )
                                .concat(
                                    _x,
                                    '"\n                            y="'
                                )
                                .concat(_y, '"\n                        />')
                        );
                    }
                } else {
                    if (
                        available[_x][_y] &&
                        ava2[_x][_y] &&
                        _x < nCount - 2 &&
                        _y < nCount - 2
                    ) {
                        var ctn = true;

                        for (var i = 0; i < 3; i++) {
                            for (var j = 0; j < 3; j++) {
                                if (ava2[_x + i][_y + j] === false) {
                                    ctn = false;
                                }
                            }
                        }

                        if (
                            ctn &&
                            qrcode.isDark(_x + 2, _y) &&
                            qrcode.isDark(_x + 1, _y + 1) &&
                            qrcode.isDark(_x, _y + 2) &&
                            qrcode.isDark(_x + 2, _y + 2)
                        ) {
                            g1.push(
                                '<line\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                x1="'
                                    )
                                    .concat(
                                        _x + width1 / Math.sqrt(8),
                                        '"\n                                y1="'
                                    )
                                    .concat(
                                        _y + width1 / Math.sqrt(8),
                                        '"\n                                x2="'
                                    )
                                    .concat(
                                        _x + 3 - width1 / Math.sqrt(8),
                                        '"\n                                y2="'
                                    )
                                    .concat(
                                        _y + 3 - width1 / Math.sqrt(8),
                                        '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                    )
                                    .concat(
                                        width1,
                                        '"\n                            />'
                                    )
                            );
                            g1.push(
                                '<line\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                x1="'
                                    )
                                    .concat(
                                        _x + 3 - width1 / Math.sqrt(8),
                                        '"\n                                y1="'
                                    )
                                    .concat(
                                        _y + width1 / Math.sqrt(8),
                                        '"\n                                x2="'
                                    )
                                    .concat(
                                        _x + width1 / Math.sqrt(8),
                                        '"\n                                y2="'
                                    )
                                    .concat(
                                        _y + 3 - width1 / Math.sqrt(8),
                                        '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                    )
                                    .concat(
                                        width1,
                                        '"\n                            />'
                                    )
                            );
                            available[_x][_y] = false;
                            available[_x + 2][_y] = false;
                            available[_x][_y + 2] = false;
                            available[_x + 2][_y + 2] = false;
                            available[_x + 1][_y + 1] = false;

                            for (var _i = 0; _i < 3; _i++) {
                                for (var _j = 0; _j < 3; _j++) {
                                    ava2[_x + _i][_y + _j] = false;
                                }
                            }
                        }
                    }

                    if (
                        available[_x][_y] &&
                        ava2[_x][_y] &&
                        _x < nCount - 1 &&
                        _y < nCount - 1
                    ) {
                        var _ctn = true;

                        for (var _i2 = 0; _i2 < 2; _i2++) {
                            for (var _j2 = 0; _j2 < 2; _j2++) {
                                if (ava2[_x + _i2][_y + _j2] === false) {
                                    _ctn = false;
                                }
                            }
                        }

                        if (
                            _ctn &&
                            qrcode.isDark(_x + 1, _y) &&
                            qrcode.isDark(_x, _y + 1) &&
                            qrcode.isDark(_x + 1, _y + 1)
                        ) {
                            g1.push(
                                '<line\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                x1="'
                                    )
                                    .concat(
                                        _x + width1 / Math.sqrt(8),
                                        '"\n                                y1="'
                                    )
                                    .concat(
                                        _y + width1 / Math.sqrt(8),
                                        '"\n                                x2="'
                                    )
                                    .concat(
                                        _x + 2 - width1 / Math.sqrt(8),
                                        '"\n                                y2="'
                                    )
                                    .concat(
                                        _y + 2 - width1 / Math.sqrt(8),
                                        '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                    )
                                    .concat(
                                        width1,
                                        '"\n                            />'
                                    )
                            );
                            g1.push(
                                '<line\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                x1="'
                                    )
                                    .concat(
                                        _x + 2 - width1 / Math.sqrt(8),
                                        '"\n                                y1="'
                                    )
                                    .concat(
                                        _y + width1 / Math.sqrt(8),
                                        '"\n                                x2="'
                                    )
                                    .concat(
                                        _x + width1 / Math.sqrt(8),
                                        '"\n                                y2="'
                                    )
                                    .concat(
                                        _y + 2 - width1 / Math.sqrt(8),
                                        '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                    )
                                    .concat(
                                        width1,
                                        '"\n                            />'
                                    )
                            );

                            for (var _i3 = 0; _i3 < 2; _i3++) {
                                for (var _j3 = 0; _j3 < 2; _j3++) {
                                    available[_x + _i3][_y + _j3] = false;
                                    ava2[_x + _i3][_y + _j3] = false;
                                }
                            }
                        }
                    }

                    if (available[_x][_y] && ava2[_x][_y]) {
                        if (
                            _y === 0 ||
                            (_y > 0 &&
                                (!qrcode.isDark(_x, _y - 1) ||
                                    !ava2[_x][_y - 1]))
                        ) {
                            var start = _y;
                            var end = _y;
                            var _ctn2 = true;

                            while (_ctn2 && end < nCount) {
                                if (qrcode.isDark(_x, end) && ava2[_x][end]) {
                                    end++;
                                } else {
                                    _ctn2 = false;
                                }
                            }

                            if (end - start > 2) {
                                for (var _i4 = start; _i4 < end; _i4++) {
                                    ava2[_x][_i4] = false;
                                    available[_x][_i4] = false;
                                }

                                g2.push(
                                    '<rect\n                                    width="'
                                        .concat(
                                            width2,
                                            '"\n                                    height="'
                                        )
                                        .concat(
                                            end - start - 1 - (1 - width2),
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    fill="#E02020"\n                                    x="'
                                        )
                                        .concat(
                                            _x + (1 - width2) / 2,
                                            '"\n                                    y="'
                                        )
                                        .concat(
                                            _y + (1 - width2) / 2,
                                            '"\n                                />'
                                        )
                                );
                                g2.push(
                                    '<rect\n                                    width="'
                                        .concat(
                                            width2,
                                            '"\n                                    height="'
                                        )
                                        .concat(
                                            width2,
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    fill="#E02020"\n                                    x="'
                                        )
                                        .concat(
                                            _x + (1 - width2) / 2,
                                            '"\n                                    y="'
                                        )
                                        .concat(
                                            end - 1 + (1 - width2) / 2,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }
                    }

                    if (available[_x][_y] && ava2[_x][_y]) {
                        if (
                            _x === 0 ||
                            (_x > 0 &&
                                (!qrcode.isDark(_x - 1, _y) ||
                                    !ava2[_x - 1][_y]))
                        ) {
                            var _start = _x;
                            var _end = _x;
                            var _ctn3 = true;

                            while (_ctn3 && _end < nCount) {
                                if (qrcode.isDark(_end, _y) && ava2[_end][_y]) {
                                    _end++;
                                } else {
                                    _ctn3 = false;
                                }
                            }

                            if (_end - _start > 1) {
                                for (var _i5 = _start; _i5 < _end; _i5++) {
                                    ava2[_i5][_y] = false;
                                    available[_i5][_y] = false;
                                }

                                g2.push(
                                    '<rect\n                                    width="'
                                        .concat(
                                            _end - _start - (1 - width2),
                                            '"\n                                    height="'
                                        )
                                        .concat(
                                            width2,
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    fill="#F6B506"\n                                    x="'
                                        )
                                        .concat(
                                            _x + (1 - width2) / 2,
                                            '"\n                                    y="'
                                        )
                                        .concat(
                                            _y + (1 - width2) / 2,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }
                    }

                    if (available[_x][_y]) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    width2,
                                    '"\n                            height="'
                                )
                                .concat(
                                    width2,
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="#F6B506"\n                            x="'
                                )
                                .concat(
                                    _x + (1 - width2) / 2,
                                    '"\n                            y="'
                                )
                                .concat(
                                    _y + (1 - width2) / 2,
                                    '"\n                        />'
                                )
                        );
                    }
                }
            }
        }

        for (var _i6 = 0; _i6 < g1.length; _i6++) {
            pointList.push(g1[_i6]);
        }

        for (var _i7 = 0; _i7 < g2.length; _i7++) {
            pointList.push(g2[_i7]);
        }

        return pointList;
    }

    var schemaDSJ = ObjectSchema().shape({
        // 信息点缩放
        width2: NumberSchema()['default'](70),
        // x 宽度
        width1: NumberSchema()['default'](70),
        // 定位点宽度
        width3: NumberSchema()['default'](90),
        // 定位点样式 ['矩形', 'DSJ'],
        posType: SchemaType().oneOf([0, 1])['default'](1),
    });
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {Number} [options.width1]  x 宽度
     * @param {Number} [options.width2]  信息点缩放
     * @param {Number} [options.width3]  定位点宽度
     * @param {String} [options.posType] 定位点样式 0=>矩形 1=>DSJ
     */

    var RenderDSJ = function RenderDSJ(qrcode, options) {
        try {
            options = schemaDSJ.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = ['width2', 'width1', 'width3', 'posType'].map(function (
            k
        ) {
            return options[k];
        });
        var svg = createRenderer({
            listPoints: listPoints$1,
        })({
            qrcode: qrcode,
            params: params,
        });
        return svg;
    };

    function listPoints$2(qrcode, params) {
        if (!qrcode) return [];
        var nCount = qrcode.getModuleCount();
        var pointList = [];
        var id = 0;
        var randArr = [];

        for (var row = 0; row < nCount; row++) {
            for (var col = 0; col < nCount; col++) {
                randArr.push([row, col]);
            }
        }

        randArr.sort(function () {
            return 0.5 - Math.random();
        });

        for (var i = 0; i < randArr.length; i++) {
            var _row = randArr[i][0];
            var _col = randArr[i][1];

            if (qrcode.isDark(_row, _col)) {
                var tempRand = rand(0.8, 1.3);
                var randNum = rand(50, 230);
                var tempRGB = [
                    'rgb(' +
                        Math.floor(20 + randNum) +
                        ',' +
                        Math.floor(170 - randNum / 2) +
                        ',' +
                        Math.floor(60 + randNum * 2) +
                        ')',
                    'rgb(' +
                        Math.floor(-20 + randNum) +
                        ',' +
                        Math.floor(130 - randNum / 2) +
                        ',' +
                        Math.floor(20 + randNum * 2) +
                        ')',
                ];
                var width = 0.15;
                pointList.push(
                    '<rect\n                    key="'
                        .concat(
                            id++,
                            '"\n                    opacity="0.9"\n                    fill="'
                        )
                        .concat(tempRGB[1], '"\n                    width="')
                        .concat(
                            1 * tempRand + width,
                            '"\n                    height="'
                        )
                        .concat(
                            1 * tempRand + width,
                            '"\n                    x="'
                        )
                        .concat(
                            _row - (tempRand - 1) / 2,
                            '"\n                    y="'
                        )
                        .concat(
                            _col - (tempRand - 1) / 2,
                            '"\n                />'
                        )
                );
                pointList.push(
                    '<rect\n                    key="'
                        .concat(id++, '"\n                    fill="')
                        .concat(tempRGB[0], '"\n                    width="')
                        .concat(1 * tempRand, '"\n                    height="')
                        .concat(1 * tempRand, '"\n                    x="')
                        .concat(
                            _row - (tempRand - 1) / 2,
                            '"\n                    y="'
                        )
                        .concat(
                            _col - (tempRand - 1) / 2,
                            '"\n                />'
                        )
                );
            }
        }

        return pointList;
    }

    /**
     *
     * @param {*} qrcode
     */

    var RendererRandRect = function RendererRandRect(qrcode) {
        var svg = createRenderer({
            listPoints: listPoints$2,
        })({
            qrcode: qrcode,
        });
        return svg;
    };

    function listPoints$3(qrcode, params) {
        if (!qrcode) return [];
        var nCount = qrcode.getModuleCount();
        var typeTable = getTypeTable(qrcode);
        var pointList = new Array(nCount);
        var size = 1.001;
        var size2 = 1.001;
        var height = params[0];
        var height2 = params[1];
        var upColor = params[2];
        var leftColor = params[3];
        var rightColor = params[4];
        var id = 0;
        var X = [-Math.sqrt(3) / 2, 1 / 2];
        var Y = [Math.sqrt(3) / 2, 1 / 2];
        var Z = [0, 0];
        var matrixString =
            'matrix(' +
            String(X[0]) +
            ', ' +
            String(X[1]) +
            ', ' +
            String(Y[0]) +
            ', ' +
            String(Y[1]) +
            ', ' +
            String(Z[0]) +
            ', ' +
            String(Z[1]) +
            ')';
        if (height <= 0) height = 1.0;
        if (height2 <= 0) height2 = 1.0;

        for (var x = 0; x < nCount; x++) {
            for (var y = 0; y < nCount; y++) {
                if (qrcode.isDark(x, y) === false) continue;
                else if (
                    typeTable[x][y] === QRPointType.POS_OTHER ||
                    typeTable[x][y] === QRPointType.POS_CENTER
                ) {
                    pointList.push(
                        '<rect\n                        width="'
                            .concat(
                                size2,
                                '"\n                        height="'
                            )
                            .concat(size2, '"\n                        key="')
                            .concat(id++, '"\n                        fill="')
                            .concat(upColor, '"\n                        x="')
                            .concat(
                                x + (1 - size2) / 2,
                                '"\n                        y="'
                            )
                            .concat(
                                y + (1 - size2) / 2,
                                '"\n                        transform="'
                            )
                            .concat(matrixString, '"\n                    />')
                    );
                    pointList.push(
                        '<rect\n                        width="'
                            .concat(
                                height2,
                                '"\n                        height="'
                            )
                            .concat(size2, '"\n                        key="')
                            .concat(id++, '"\n                        fill="')
                            .concat(
                                leftColor,
                                '"\n                        x="',
                                0,
                                '"\n                        y="',
                                0,
                                '"\n                        transform="'
                            )
                            .concat(
                                matrixString +
                                    'translate(' +
                                    String(x + (1 - size2) / 2 + size2) +
                                    ',' +
                                    String(y + (1 - size2) / 2) +
                                    ') ' +
                                    'skewY(45) ',
                                '"\n                    />'
                            )
                    );
                    pointList.push(
                        '<rect\n                        width="'
                            .concat(
                                size2,
                                '"\n                        height="'
                            )
                            .concat(height2, '"\n                        key="')
                            .concat(id++, '"\n                        fill="')
                            .concat(
                                rightColor,
                                '"\n                        x="',
                                0,
                                '"\n                        y="',
                                0,
                                '"\n                        transform="'
                            )
                            .concat(
                                matrixString +
                                    'translate(' +
                                    String(x + (1 - size2) / 2) +
                                    ',' +
                                    String(y + size2 + (1 - size2) / 2) +
                                    ') ' +
                                    'skewX(45) ',
                                '"\n                    />'
                            )
                    );
                } else {
                    pointList.push(
                        '<rect\n                        width="'
                            .concat(size, '"\n                        height="')
                            .concat(size, '"\n                        key="')
                            .concat(id++, '"\n                        fill="')
                            .concat(upColor, '"\n                        x="')
                            .concat(
                                x + (1 - size) / 2,
                                '"\n                        y="'
                            )
                            .concat(
                                y + (1 - size) / 2,
                                '"\n                        transform="'
                            )
                            .concat(matrixString, '"\n                    />')
                    );
                    pointList.push(
                        '<rect\n                        width="'
                            .concat(
                                height,
                                '"\n                        height="'
                            )
                            .concat(size, '"\n                        key="')
                            .concat(id++, '"\n                        fill="')
                            .concat(
                                leftColor,
                                '"\n                        x="',
                                0,
                                '"\n                        y="',
                                0,
                                '"\n                        transform="'
                            )
                            .concat(
                                matrixString +
                                    'translate(' +
                                    String(x + (1 - size) / 2 + size) +
                                    ',' +
                                    String(y + (1 - size) / 2) +
                                    ') ' +
                                    'skewY(45) ',
                                '"\n                    />'
                            )
                    );
                    pointList.push(
                        '<rect\n                        width="'
                            .concat(size, '"\n                        height="')
                            .concat(height, '"\n                        key="')
                            .concat(id++, '"\n                        fill="')
                            .concat(
                                rightColor,
                                '"\n                        x="',
                                0,
                                '"\n                        y="',
                                0,
                                '"\n                        transform="'
                            )
                            .concat(
                                matrixString +
                                    'translate(' +
                                    String(x + (1 - size) / 2) +
                                    ',' +
                                    String(y + size + (1 - size) / 2) +
                                    ') ' +
                                    'skewX(45) ',
                                '"\n                    />'
                            )
                    );
                }
            }
        }

        return pointList;
    }

    function viewBox(qrcode) {
        if (!qrcode) return '0 0 0 0';
        var nCount = qrcode.getModuleCount();
        return qrcode.$options.isSpace
            ? ''
                  .concat(-nCount, ' ')
                  .concat(-nCount / 2, ' ')
                  .concat(nCount * 2, ' ')
                  .concat(nCount * 2)
            : ''
                  .concat(-nCount + 3, ' ')
                  .concat(-nCount / 2, ' ')
                  .concat(nCount * 2 - 6, ' ')
                  .concat(nCount * 2 - 6);
    }

    var schema25D = ObjectSchema().shape({
        // 柱体高度
        height: NumberSchema()['default'](0.5),
        // 定位点柱体高度
        height2: NumberSchema()['default'](0.5),
        // 上侧颜色
        upColor: StringSchema()['default']('#FF7F89'),
        // 左侧颜色
        leftColor: StringSchema()['default']('#FFD7D9'),
        // 右侧颜色
        rightColor: StringSchema()['default']('#FFEBF3'),
    });
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {Number} [options.height]  柱体高度
     * @param {Number} [options.height2] 定位点柱体高度
     * @param {String} [options.upColor]  上侧颜色
     * @param {String} [options.leftColor] 左侧颜色
     * @param {String} [options.rightColor] 右侧颜色
     */

    var Renderer25D = function Renderer25D(qrcode, options) {
        try {
            options = schema25D.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = [
            'height',
            'height2',
            'upColor',
            'leftColor',
            'rightColor',
        ].map(function (k) {
            return options[k];
        });
        var svg = createRenderer({
            listPoints: listPoints$3,
            getViewBox: viewBox,
        })({
            qrcode: qrcode,
            params: params,
        });
        return svg;
    };

    function listPoints$4(qrcode, params) {
        if (!qrcode) return [];
        var nCount = qrcode.getModuleCount();
        var typeTable = getTypeTable(qrcode);
        var pointList = new Array(nCount);
        var type = params[1];
        var size = params[2] / 100 / 3;
        var opacity = params[3] / 100;
        var otherColorDark = params[4];
        var otherColorLight = params[5];
        var posType = params[6];
        var posColor = params[7];
        var id = 0;
        var vw = [3, -3];
        var vh = [3, -3];
        if (size <= 0) size = 1.0;
        pointList.push(
            '<image\n            key="'
                .concat(
                    id++,
                    '"\n            x="0"\n            y="0"\n            width="'
                )
                .concat(nCount, '"\n            height="')
                .concat(nCount, '"\n            xlink:href="')
                .concat(params[0], '"\n        />')
        );

        for (var x = 0; x < nCount; x++) {
            for (var y = 0; y < nCount; y++) {
                if (
                    typeTable[x][y] === QRPointType.ALIGN_CENTER ||
                    typeTable[x][y] === QRPointType.ALIGN_OTHER ||
                    typeTable[x][y] === QRPointType.TIMING
                ) {
                    if (qrcode.isDark(x, y)) {
                        if (type === 0)
                            pointList.push(
                                '<rect\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                height="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColorDark,
                                        '"\n                                x="'
                                    )
                                    .concat(
                                        x + (1 - size) / 2,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        y + (1 - size) / 2,
                                        '"\n                            />'
                                    )
                            );
                        else if (type === 1)
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColorDark,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                    } else {
                        if (type === 0)
                            pointList.push(
                                '<rect\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                height="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColorLight,
                                        '"\n                                x="'
                                    )
                                    .concat(
                                        x + (1 - size) / 2,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        y + (1 - size) / 2,
                                        '"\n                            />'
                                    )
                            );
                        else if (type === 1)
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColorLight,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                    }
                } else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                    if (qrcode.isDark(x, y)) {
                        if (posType === 0) {
                            pointList.push(
                                '<rect\n                                width="'
                                    .concat(
                                        1,
                                        '"\n                                height="',
                                        1,
                                        '"\n                                key="',
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                x="'
                                    )
                                    .concat(
                                        x,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            />'
                                    )
                            );
                        } else if (posType === 1) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="white"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                r="',
                                        5,
                                        '"\n                            />'
                                    )
                            );
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                r="',
                                        1.5,
                                        '"\n                            />'
                                    )
                            );
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="none"\n                                stroke-width="1"\n                                stroke="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                r="',
                                        3,
                                        '"\n                            />'
                                    )
                            );
                        } else if (posType === 2) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="white"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                r="',
                                        5,
                                        '"\n                            />'
                                    )
                            );
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                r="',
                                        1.5,
                                        '"\n                            />'
                                    )
                            );
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="none"\n                                stroke-width="0.15"\n                                stroke-dasharray="0.5,0.5"\n                                stroke="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                r="',
                                        3,
                                        '"\n                            />'
                                    )
                            );

                            for (var w = 0; w < vw.length; w++) {
                                pointList.push(
                                    '<circle\n                                    key="'
                                        .concat(
                                            id++,
                                            '"\n                                    fill="'
                                        )
                                        .concat(
                                            posColor,
                                            '"\n                                    cx="'
                                        )
                                        .concat(
                                            x + vw[w] + 0.5,
                                            '"\n                                    cy="'
                                        )
                                        .concat(
                                            y + 0.5,
                                            '"\n                                    r="',
                                            0.5,
                                            '"\n                                />'
                                        )
                                );
                            }

                            for (var h = 0; h < vh.length; h++) {
                                pointList.push(
                                    '<circle\n                                    key="'
                                        .concat(
                                            id++,
                                            '"\n                                    fill="'
                                        )
                                        .concat(
                                            posColor,
                                            '"\n                                    cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                    cy="'
                                        )
                                        .concat(
                                            y + vh[h] + 0.5,
                                            '"\n                                    r="',
                                            0.5,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }
                    }
                } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                    if (qrcode.isDark(x, y)) {
                        if (posType === 0) {
                            pointList.push(
                                '<rect\n                                width="'
                                    .concat(
                                        1,
                                        '"\n                                height="',
                                        1,
                                        '"\n                                key="',
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                x="'
                                    )
                                    .concat(
                                        x,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            />'
                                    )
                            );
                        }
                    } else {
                        if (posType === 0) {
                            pointList.push(
                                '<rect\n                                width="'
                                    .concat(
                                        1,
                                        '"\n                                height="',
                                        1,
                                        '"\n                                key="',
                                        id++,
                                        '"\n                                fill="white"\n                                x="'
                                    )
                                    .concat(
                                        x,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }
                } else {
                    if (qrcode.isDark(x, y)) {
                        if (type === 0)
                            pointList.push(
                                '<rect\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                height="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColorDark,
                                        '"\n                                x="'
                                    )
                                    .concat(
                                        x + (1 - size) / 2,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        y + (1 - size) / 2,
                                        '"\n                            />'
                                    )
                            );
                        else if (type === 1)
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColorDark,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                    } else {
                        if (type === 0)
                            pointList.push(
                                '<rect\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                height="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColorLight,
                                        '"\n                                x="'
                                    )
                                    .concat(
                                        x + (1 - size) / 2,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        y + (1 - size) / 2,
                                        '"\n                            />'
                                    )
                            );
                        else if (type === 1)
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColorLight,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                    }
                }
            }
        }

        return pointList;
    }

    var schemaImage = ObjectSchema().shape({
        // 背景图片
        backgroudImage: StringSchema(),
        // 信息点样式 ['矩形', '圆形'],
        type: SchemaType().oneOf([0, 1])['default'](0),
        // 信息点缩放
        size: NumberSchema()['default'](100),
        // 信息点不透明度
        opacity: NumberSchema()['default'](100),
        // 信息点深色
        otherColorDark: StringSchema()['default']('#000000'),
        // 信息点浅色
        otherColorLight: StringSchema()['default']('#FFFFFF'),
        // 定位点样式 ['矩形', '圆形', '行星']
        posType: SchemaType().oneOf([0, 1, 2])['default'](0),
        // 定位点颜色
        posColor: StringSchema()['default']('#000000'),
    });
    /**
     *
     * @param {*} qrcode
     * @param {*} options
     * @param {String} [options.backgroudImage] 背景图片
     * @param {Number} [options.type] 信息点样式 0=>矩形 1=>圆形
     * @param {Number} [options.size] 信息点缩放
     * @param {Number} [options.opacity] 信息点不透明度
     * @param {String} [options.otherColorDark] 信息点深色
     * @param {String} [options.otherColorLight] 信息点浅色
     * @param {Number} [options.posType]  // 定位点样式 0=>'矩形' 1=>'圆形' 2=>'行星'
     * @param {String} [options.posColor]  // 定位点颜色
     */

    var RendererImage = function RendererImage(qrcode) {
        var options =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};

        try {
            options = schemaImage.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = [
            'backgroudImage',
            'type',
            'size',
            'opacity',
            'otherColorDark',
            'otherColorLight',
            'posType',
            'posColor',
        ].map(function (k) {
            return options[k];
        });
        var svg = createRenderer({
            listPoints: listPoints$4,
        })({
            qrcode: qrcode,
            params: params,
        });
        return svg;
    };

    function gamma(r, g, b) {
        return Math.pow(
            (Math.pow(r, 2.2) +
                Math.pow(1.5 * g, 2.2) +
                Math.pow(0.6 * b, 2.2)) /
                (1 + Math.pow(1.5, 2.2) + Math.pow(0.6, 2.2)),
            1 / 2.2
        );
    }

    function listPoints$5(qrcode, params) {
        if (!qrcode) return [];
        var nCount = qrcode.getModuleCount();
        var typeTable = getTypeTable(qrcode);
        var pointList = new Array(nCount);
        var alignType = params[3];
        var timingType = params[4];
        var posColor = params[6];
        var id = 0;

        for (var x = 0; x < nCount; x++) {
            for (var y = 0; y < nCount; y++) {
                var posX = 3 * x;
                var posY = 3 * y;

                if (
                    typeTable[x][y] === QRPointType.ALIGN_CENTER ||
                    typeTable[x][y] === QRPointType.ALIGN_OTHER
                ) {
                    if (qrcode.isDark(x, y)) {
                        if (alignType === 2) {
                            pointList.push(
                                '<use\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                xlink:href="#B-black"\n                                x="'
                                    )
                                    .concat(
                                        posX - 0.03,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        posY - 0.03,
                                        '"\n                            />'
                                    )
                            );
                        } else {
                            pointList.push(
                                '<use\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                xlink:href="#S-black"\n                                x="'
                                    )
                                    .concat(
                                        posX + 1 - 0.01,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        posY + 1 - 0.01,
                                        '"\n                            />'
                                    )
                            );
                        }
                    } else {
                        if (alignType === 0) {
                            pointList.push(
                                '<use\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                xlink:href="#S-white"\n                                x="'
                                    )
                                    .concat(
                                        posX + 1,
                                        '"\n                                y=\''
                                    )
                                    .concat(
                                        posY + 1,
                                        "'\n                            />"
                                    )
                            );
                        } else {
                            pointList.push(
                                '<use\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                xlink:href="#B-white"\n                                x="'
                                    )
                                    .concat(
                                        posX - 0.03,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        posY - 0.03,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }
                } else if (typeTable[x][y] === QRPointType.TIMING) {
                    if (qrcode.isDark(x, y)) {
                        if (timingType === 2) {
                            pointList.push(
                                '<use\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                xlink:href="#B-black"\n                                x="'
                                    )
                                    .concat(
                                        posX - 0.03,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        posY - 0.03,
                                        '"\n                            />'
                                    )
                            );
                        } else {
                            pointList.push(
                                '<use\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                xlink:href="#S-black"\n                                x="'
                                    )
                                    .concat(
                                        posX + 1,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        posY + 1,
                                        '"\n                            />'
                                    )
                            );
                        }
                    } else {
                        if (timingType === 0) {
                            pointList.push(
                                '<use\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                xlink:href="#S-white"\n                                x="'
                                    )
                                    .concat(
                                        posX + 1,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        posY + 1,
                                        '"\n                            />'
                                    )
                            );
                        } else {
                            pointList.push(
                                '<use\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                xlink:href="#B-white"\n                                x="'
                                    )
                                    .concat(
                                        posX - 0.03,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        posY - 0.03,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }
                } else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                    if (qrcode.isDark(x, y)) {
                        pointList.push(
                            '<use\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            xlink:href="#B"\n                            x="'
                                )
                                .concat(
                                    posX - 0.03,
                                    '"\n                            y="'
                                )
                                .concat(
                                    posY - 0.03,
                                    '"\n                        />'
                                )
                        );
                    }
                } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                    if (qrcode.isDark(x, y)) {
                        pointList.push(
                            '<use\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            xlink:href="#B"\n                            x="'
                                )
                                .concat(
                                    posX - 0.03,
                                    '"\n                            y="'
                                )
                                .concat(
                                    posY - 0.03,
                                    '"\n                        />'
                                )
                        );
                    } else {
                        pointList.push(
                            '<use\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            xlink:href="#B-white"\n                            x="'
                                )
                                .concat(
                                    posX - 0.03,
                                    '"\n                            y="'
                                )
                                .concat(
                                    posY - 0.03,
                                    '"\n                        />'
                                )
                        );
                    }
                } else {
                    if (qrcode.isDark(x, y)) {
                        pointList.push(
                            '<use\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            xlink:href="#S-black"\n                            x="'
                                )
                                .concat(
                                    posX + 1,
                                    '"\n                            y="'
                                )
                                .concat(
                                    posY + 1,
                                    '"\n                        />'
                                )
                        );
                    }
                }
            }
        }

        return pointList;
    }

    function getViewBox(qrcode) {
        if (!qrcode) return '0 0 0 0';
        var nCount = qrcode.getModuleCount() * 3;
        return qrcode.$options.isSpace
            ? ''
                  .concat(-nCount / 5, ' ')
                  .concat(-nCount / 5, ' ')
                  .concat(nCount + (nCount / 5) * 2, ' ')
                  .concat(nCount + (nCount / 5) * 2)
            : ''.concat(0, ' ', 0, ' ', nCount, ' ').concat(nCount);
    }

    function getGrayPointList(params, size, black, white) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = document.createElement('img');
        var gpl = [];
        canvas.style.imageRendering = 'pixelated';
        size *= 3;
        img.src = params[0];
        var contrast = params[1] / 100;
        var exposure = params[2] / 100;
        return new Promise(function (resolve) {
            img.onload = function () {
                canvas.width = size;
                canvas.height = size;
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(img, 0, 0, size, size);

                for (var x = 0; x < canvas.width; x++) {
                    for (var y = 0; y < canvas.height; y++) {
                        var imageData = ctx.getImageData(x, y, 1, 1);
                        var data = imageData.data;
                        var gray = gamma(data[0], data[1], data[2]);
                        if (
                            Math.random() >
                                (gray / 255 + exposure - 0.5) * (contrast + 1) +
                                    0.5 &&
                            (x % 3 !== 1 || y % 3 !== 1)
                        )
                            gpl.push(
                                '<use\n                                key="'
                                    .concat(
                                        'g_' + x + '_' + y,
                                        '"\n                                x="'
                                    )
                                    .concat(
                                        x,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                                xlink:href="'
                                    )
                                    .concat(
                                        black,
                                        '"\n                            />'
                                    )
                            );
                    }
                }

                resolve(gpl);
            };
        });
    }

    var RendererResImage = function RendererResImage(_ref) {
        var qrcode = _ref.qrcode,
            params = _ref.params;
        var otherColor = params[5];
        var _qrcode$$options = qrcode.$options,
            width = _qrcode$$options.width,
            height = _qrcode$$options.height;
        return new Promise(function (resolve, reject) {
            getGrayPointList(params, qrcode.getModuleCount(), '#S-black')
                .then(function (gpl) {
                    var svg = '<svg\n            className="Qr-item-svg"\n            width="'
                        .concat(width, '"\n            height="')
                        .concat(height, '"\n            viewBox="')
                        .concat(
                            getViewBox(qrcode),
                            '"\n            fill="white"\n            xmlns="http://www.w3.org/2000/svg"\n            xmlns:xlink="http://www.w3.org/1999/xlink"\n        >\n            <defs>\n                <rect\n                    id="B-black"\n                    fill="'
                        )
                        .concat(
                            otherColor,
                            '"\n                    width="',
                            3.08,
                            '"\n                    height="',
                            3.08,
                            '"\n                />\n                <rect id="B-white" fill="white" width="',
                            3.08,
                            '" height="',
                            3.08,
                            '" />\n                <rect\n                    id="S-black"\n                    fill="'
                        )
                        .concat(
                            otherColor,
                            '"\n                    width="',
                            1.02,
                            '"\n                    height="',
                            1.02,
                            '"\n                />\n                <rect id="S-white" fill="white" width="',
                            1.02,
                            '" height="',
                            1.02,
                            '" />\n                <rect id="B" width="',
                            3.08,
                            '" height="',
                            3.08,
                            '" />\n                <rect id="S" width="',
                            1.02,
                            '" height="',
                            1.02,
                            '" />\n            </defs>\n            '
                        )
                        .concat(
                            gpl.concat(listPoints$5(qrcode, params)).join(''),
                            '\n        </svg>'
                        );
                    resolve(svg);
                })
                ['catch'](function (err) {
                    resolve(err);
                });
        });
    };

    var schemaResImage = ObjectSchema().shape({
        // 背景图片
        backgroudImage: StringSchema()['default'](),
        // 对比度
        contrast: NumberSchema()['default'](0),
        // 曝光
        exposure: NumberSchema()['default'](0),
        // 小定位点样式 ['无', '白', '黑白']
        alignType: SchemaType().oneOf([0, 1, 2])['default'](0),
        // 时钟样式 ['无', '白', '黑白']
        timingType: SchemaType().oneOf([0, 1, 2])['default'](0),
        // 信息点颜色
        otherColor: StringSchema()['default']('#000000'),
        // 定位点颜色
        posColor: StringSchema()['default']('#000000'),
    });
    /**
     *
     * @param {*} qrcode
     * @param {*} options
     * @param {String} options.backgroudImage 背景图片
     * @param {Number} options.contrast 对比度
     * @param {Number} options.exposure 曝光
     * @param {Number} options.alignType 小定位点样式 0=>'无' 1=>'白' 2=>'黑白'
     * @param {Number} options.timingType 时钟样式 0=>'无' 1=>'白' 2=>'黑白'
     * @param {String} options.otherColor 信息点颜色
     * @param {String} options.posColor 定位点颜色
     */

    var render = function render(qrcode) {
        var options =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};

        try {
            options = schemaResImage.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = [
            'backgroudImage',
            'contrast',
            'exposure',
            'alignType',
            'timingType',
            'otherColor',
            'posColor',
        ].map(function (k) {
            return options[k];
        });
        return RendererResImage({
            qrcode: qrcode,
            params: params,
        });
    };

    function listPoints$6(qrcode, params) {
        if (!qrcode) return [];
        var nCount = qrcode.getModuleCount();
        var typeTable = getTypeTable(qrcode);
        var pointList = [];
        var g1 = [];
        var g2 = [];
        var id = 0; // const size = 0.8;
        // const vw = [3, -3];
        // const vh = [3, -3];
        // const sq25 =
        //     'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';

        var otherColor = params[0];
        var posColor = params[1];
        var available = [];
        var ava2 = [];

        for (var x = 0; x < nCount; x++) {
            available[x] = [];
            ava2[x] = [];

            for (var y = 0; y < nCount; y++) {
                available[x][y] = true;
                ava2[x][y] = true;
            }
        }

        for (var _y = 0; _y < nCount; _y++) {
            for (var _x = 0; _x < nCount; _x++) {
                if (
                    qrcode.isDark(_x, _y) &&
                    typeTable[_x][_y] === QRPointType.POS_CENTER
                ) {
                    pointList.push(
                        '<circle\n                        key="'
                            .concat(id++, '"\n                        fill="')
                            .concat(posColor, '"\n                        cx="')
                            .concat(_x + 0.5, '"\n                        cy="')
                            .concat(
                                _y + 0.5,
                                '"\n                        r="',
                                1.5,
                                '"\n                    />'
                            )
                    );
                    pointList.push(
                        '<circle\n                        key="'
                            .concat(
                                id++,
                                '"\n                        fill="none"\n                        stroke-width="1"\n                        stroke="'
                            )
                            .concat(posColor, '"\n                        cx="')
                            .concat(_x + 0.5, '"\n                        cy="')
                            .concat(
                                _y + 0.5,
                                '"\n                        r="',
                                3,
                                '"\n                    />'
                            )
                    );
                } else if (
                    qrcode.isDark(_x, _y) &&
                    typeTable[_x][_y] === QRPointType.POS_OTHER
                );
                else {
                    if (
                        available[_x][_y] &&
                        ava2[_x][_y] &&
                        _x < nCount - 2 &&
                        _y < nCount - 2
                    ) {
                        var ctn = true;

                        for (var i = 0; i < 3; i++) {
                            for (var j = 0; j < 3; j++) {
                                if (ava2[_x + i][_y + j] === false) {
                                    ctn = false;
                                }
                            }
                        }

                        if (
                            ctn &&
                            qrcode.isDark(_x + 1, _y) &&
                            qrcode.isDark(_x + 1, _y + 2) &&
                            qrcode.isDark(_x, _y + 1) &&
                            qrcode.isDark(_x + 2, _y + 1)
                        ) {
                            g1.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 1 + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 1 + 0.5,
                                        '"\n                                r="',
                                        1,
                                        '"\n                                fill="#FFFFFF"\n                                stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                stroke-width="'
                                    )
                                    .concat(
                                        rand(0.33, 0.6),
                                        '"\n                            />'
                                    )
                            );

                            if (qrcode.isDark(_x + 1, _y + 1)) {
                                g1.push(
                                    '<circle\n                                    r="'
                                        .concat(
                                            0.5 * rand(0.5, 1),
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    fill="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    cx="'
                                        )
                                        .concat(
                                            _x + 1 + 0.5,
                                            '"\n                                    cy="'
                                        )
                                        .concat(
                                            _y + 1 + 0.5,
                                            '"\n                                />'
                                        )
                                );
                            }

                            available[_x + 1][_y] = false;
                            available[_x][_y + 1] = false;
                            available[_x + 2][_y + 1] = false;
                            available[_x + 1][_y + 2] = false;

                            for (var _i = 0; _i < 3; _i++) {
                                for (var _j = 0; _j < 3; _j++) {
                                    ava2[_x + _i][_y + _j] = false;
                                }
                            }
                        }
                    }

                    if (_x < nCount - 1 && _y < nCount - 1) {
                        if (
                            qrcode.isDark(_x, _y) &&
                            qrcode.isDark(_x + 1, _y) &&
                            qrcode.isDark(_x, _y + 1) &&
                            qrcode.isDark(_x + 1, _y + 1)
                        ) {
                            g1.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 1,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 1,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        Math.sqrt(1 / 2),
                                        '"\n                                fill="#FFFFFF"\n                                stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                stroke-width="'
                                    )
                                    .concat(
                                        rand(0.33, 0.6),
                                        '"\n                            />'
                                    )
                            );

                            for (var _i2 = 0; _i2 < 2; _i2++) {
                                for (var _j2 = 0; _j2 < 2; _j2++) {
                                    available[_x + _i2][_y + _j2] = false;
                                    ava2[_x + _i2][_y + _j2] = false;
                                }
                            }
                        }
                    }

                    if (available[_x][_y] && _y < nCount - 1) {
                        if (
                            qrcode.isDark(_x, _y) &&
                            qrcode.isDark(_x, _y + 1)
                        ) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 1,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        0.5 * rand(0.95, 1.05),
                                        '"\n                                fill="#FFFFFF"\n                                stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                stroke-width="'
                                    )
                                    .concat(
                                        rand(0.36, 0.4),
                                        '"\n                            />'
                                    )
                            );
                            available[_x][_y] = false;
                            available[_x][_y + 1] = false;
                        }
                    }

                    if (available[_x][_y] && _x < nCount - 1) {
                        if (
                            qrcode.isDark(_x, _y) &&
                            qrcode.isDark(_x + 1, _y)
                        ) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 1,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        0.5 * rand(0.95, 1.05),
                                        '"\n                                fill="#FFFFFF"\n                                stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                stroke-width="'
                                    )
                                    .concat(
                                        rand(0.36, 0.4),
                                        '"\n                            />'
                                    )
                            );
                            available[_x][_y] = false;
                            available[_x + 1][_y] = false;
                        }
                    }

                    if (available[_x][_y]) {
                        if (qrcode.isDark(_x, _y)) {
                            pointList.push(
                                '<circle\n                                r="'
                                    .concat(
                                        0.5 * rand(0.5, 1),
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                        } else if (typeTable[_x][_y] === QRPointType.DATA) {
                            if (rand(0, 1) > 0.85) {
                                g2.push(
                                    '<circle\n                                    r="'
                                        .concat(
                                            0.5 * rand(0.85, 1.3),
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    fill="#FFFFFF"\n                                    stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    stroke-width="'
                                        )
                                        .concat(
                                            rand(0.15, 0.33),
                                            '"\n                                    cx="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    cy="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }
                    }
                }
            }
        }

        for (var _i3 = 0; _i3 < g1.length; _i3++) {
            pointList.push(g1[_i3]);
        }

        for (var _i4 = 0; _i4 < g2.length; _i4++) {
            pointList.push(g2[_i4]);
        }

        return pointList;
    }

    var schemaBase$1 = ObjectSchema().shape({
        otherColor: StringSchema()['default']('#8ED1FC'),
        posColor: StringSchema()['default']('#0693E3'),
    });
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {String} [options.otherColor] 圆圈颜色
     * @param {String} [options.posColor] 定位点颜色
     */

    var rendererCircle = function rendererCircle(qrcode, options) {
        try {
            options = schemaBase$1.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = ['otherColor', 'posColor'].map(function (k) {
            return options[k];
        });
        var svg = createRenderer({
            listPoints: listPoints$6,
        })({
            qrcode: qrcode,
            params: params,
        });
        return svg;
    };

    function listPoints$7(qrcode, params) {
        if (!qrcode) return [];
        var nCount = qrcode.getModuleCount();
        var typeTable = getTypeTable(qrcode);
        var pointList = new Array(nCount);
        var type = params[0];
        var size = params[1] / 100;
        var funcType = params[1]; // const opacity = params[2] / 100;

        var posType = params[3];
        var id = 0;
        var otherColor = params[4];
        var otherColor2 = params[5];
        var posColor = params[6];
        var vw = [3, -3];
        var vh = [3, -3];
        var sq25 =
            'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';
        if (size <= 0) size = 1.0;

        if (funcType === 1 && type === 1) {
            pointList.push(
                '<circle\n                key="'
                    .concat(
                        id++,
                        '"\n                fill="none"\n                stroke-width="'
                    )
                    .concat(nCount / 15, '"\n                stroke="')
                    .concat(otherColor2, '"\n                cx="')
                    .concat(nCount / 2, '"\n                cy="')
                    .concat(nCount / 2, '"\n                r="')
                    .concat(
                        ((nCount / 2) * Math.sqrt(2) * 13) / 40,
                        '"\n            />'
                    )
            );
        }

        for (var x = 0; x < nCount; x++) {
            for (var y = 0; y < nCount; y++) {
                if (
                    qrcode.isDark(x, y) &&
                    typeTable[x][y] === QRPointType.POS_CENTER
                ) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            x="'
                                )
                                .concat(x, '"\n                            y="')
                                .concat(y, '"\n                        />')
                        );
                    } else if (posType === 1) {
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="none"\n                            stroke-width="1"\n                            stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    3,
                                    '"\n                        />'
                                )
                        );
                    } else if (posType === 2) {
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="none"\n                            stroke-width="0.15"\n                            stroke-dasharray="0.5,0.5"\n                            stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    3,
                                    '"\n                        />'
                                )
                        );

                        for (var w = 0; w < vw.length; w++) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + vw[w] + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                r="',
                                        0.5,
                                        '"\n                            />'
                                    )
                            );
                        }

                        for (var h = 0; h < vh.length; h++) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + vh[h] + 0.5,
                                        '"\n                                r="',
                                        0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    } else if (posType === 3) {
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<path\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            d="'
                                )
                                .concat(
                                    sq25,
                                    '"\n                            stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            stroke-width="'
                                )
                                .concat(
                                    (100 / 6) * (1 - (1 - 0.8) * 0.75),
                                    '"\n                            fill="none"\n                            transform="'
                                )
                                .concat(
                                    'translate(' +
                                        String(x - 2.5) +
                                        ',' +
                                        String(y - 2.5) +
                                        ') ' +
                                        'scale(' +
                                        String(6 / 100) +
                                        ',' +
                                        String(6 / 100) +
                                        ')',
                                    '"\n                        />'
                                )
                        );
                    }
                } else if (
                    qrcode.isDark(x, y) &&
                    typeTable[x][y] === QRPointType.POS_OTHER
                ) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            x="'
                                )
                                .concat(x, '"\n                            y="')
                                .concat(y, '"\n                        />')
                        );
                    }
                } else {
                    var dist =
                        Math.sqrt(
                            Math.pow((nCount - 1) / 2 - x, 2) +
                                Math.pow((nCount - 1) / 2 - y, 2)
                        ) /
                        ((nCount / 2) * Math.sqrt(2));

                    if (funcType === 0) {
                        var sizeF = (1 - Math.cos(Math.PI * dist)) / 6 + 1 / 5;
                        var colorF = otherColor;
                        var opacityF = Number(qrcode.isDark(x, y));

                        if (type === 0) {
                            sizeF = sizeF + 0.2;
                            pointList.push(
                                '<rect\n                                opacity="'
                                    .concat(
                                        opacityF,
                                        '"\n                                width="'
                                    )
                                    .concat(
                                        sizeF,
                                        '"\n                                height="'
                                    )
                                    .concat(
                                        sizeF,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        colorF,
                                        '"\n                                x="'
                                    )
                                    .concat(
                                        x + (1 - sizeF) / 2,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        y + (1 - sizeF) / 2,
                                        '"\n                            />'
                                    )
                            );
                        } else if (type === 1) {
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacityF,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        sizeF,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        colorF,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }

                    if (funcType === 1) {
                        var _sizeF = 0;
                        var _colorF = otherColor; // const fillF = colorF;

                        var _opacityF = Number(qrcode.isDark(x, y));

                        if (dist > 5 / 20 && dist < 8 / 20) {
                            _sizeF = 5 / 10;
                            _colorF = otherColor2;
                            _opacityF = 1;
                        } else {
                            _sizeF = 1 / 4;

                            if (type === 0) {
                                _sizeF = 1 / 4 - 0.1;
                            }
                        }

                        if (type === 0) {
                            _sizeF = 2 * _sizeF + 0.1;

                            if (qrcode.isDark(x, y)) {
                                pointList.push(
                                    '<rect\n                                    opacity="'
                                        .concat(
                                            _opacityF,
                                            '"\n                                    width="'
                                        )
                                        .concat(
                                            _sizeF,
                                            '"\n                                    height="'
                                        )
                                        .concat(
                                            _sizeF,
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    fill="'
                                        )
                                        .concat(
                                            _colorF,
                                            '"\n                                    x="'
                                        )
                                        .concat(
                                            x + (1 - _sizeF) / 2,
                                            '"\n                                    y="'
                                        )
                                        .concat(
                                            y + (1 - _sizeF) / 2,
                                            '"\n                                />'
                                        )
                                );
                            } else {
                                _sizeF = _sizeF - 0.1;
                                pointList.push(
                                    '<rect\n                                    opacity="'
                                        .concat(
                                            _opacityF,
                                            '"\n                                    width="'
                                        )
                                        .concat(
                                            _sizeF,
                                            '"\n                                    height="'
                                        )
                                        .concat(
                                            _sizeF,
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            _colorF,
                                            '"\n                                    stroke-width="',
                                            0.1,
                                            '"\n                                    fill="#FFFFFF"\n                                    x="'
                                        )
                                        .concat(
                                            x + (1 - _sizeF) / 2,
                                            '"\n                                    y="'
                                        )
                                        .concat(
                                            y + (1 - _sizeF) / 2,
                                            '"\n                                />'
                                        )
                                );
                            }
                        } else if (type === 1) {
                            if (qrcode.isDark(x, y)) {
                                pointList.push(
                                    '<circle\n                                    opacity="'
                                        .concat(
                                            _opacityF,
                                            '"\n                                    r="'
                                        )
                                        .concat(
                                            _sizeF,
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    fill="'
                                        )
                                        .concat(
                                            _colorF,
                                            '"\n                                    cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                    cy="'
                                        )
                                        .concat(
                                            y + 0.5,
                                            '"\n                                />'
                                        )
                                );
                            } else {
                                pointList.push(
                                    '<circle\n                                    opacity="'
                                        .concat(
                                            _opacityF,
                                            '"\n                                    r="'
                                        )
                                        .concat(
                                            _sizeF,
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            _colorF,
                                            '"\n                                    stroke-width="',
                                            0.1,
                                            '"\n                                    fill="#FFFFFF"\n                                    cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                    cy="'
                                        )
                                        .concat(
                                            y + 0.5,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }
                    }
                }
            }
        }

        return pointList;
    }

    var schemaFuncA = ObjectSchema().shape({
        type: SchemaType().oneOf([0, 1])['default'](1),
        size: SchemaType().oneOf([0, 1])['default'](0),
        opacity: NumberSchema()['default'](100),
        posType: SchemaType().oneOf([0, 1, 2, 3])['default'](1),
        otherColor: StringSchema()['default']('#000000'),
        otherColor2: StringSchema()['default']('#000000'),
        posColor: StringSchema()['default']('#000000'),
    });
    var schemaFuncB = ObjectSchema().shape({
        type: SchemaType().oneOf([0, 1])['default'](1),
        size: SchemaType().oneOf([0, 1])['default'](1),
        opacity: NumberSchema()['default'](100),
        posType: SchemaType().oneOf([0, 1, 2, 3])['default'](1),
        otherColor: StringSchema()['default']('#ABB8C3'),
        otherColor2: StringSchema()['default']('#000000'),
        posColor: StringSchema()['default']('#000000'),
    });
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形
     * @param {Number} [options.size] 干扰函数 0=>A 1=>B
     * @param {String} [options.opacity]  信息点不透明度
     * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
     * @param {String} [options.otherColor] 信息点颜色
     * @param {String} [options.otherColor2] 信息点颜色2
     * @param {String} [options.posColor] 定位点颜色
     */

    var rendererFuncA = function rendererFuncA(qrcode, options) {
        try {
            options = schemaFuncA.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = [
            'type',
            'size',
            'opacity',
            'posType',
            'otherColor',
            'otherColor2',
            'posColor',
        ].map(function (k) {
            return options[k];
        });
        var svg = createRenderer({
            listPoints: listPoints$7,
        })({
            qrcode: qrcode,
            params: params,
        });
        return svg;
    };
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形
     * @param {Number} [options.size] 干扰函数 1=>A 2=>B
     * @param {String} [options.opacity]  信息点不透明度
     * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
     * @param {String} [options.otherColor] 信息点颜色
     * @param {String} [options.otherColor2] 信息点颜色2
     * @param {String} [options.posColor] 定位点颜色
     */

    var rendererFuncB = function rendererFuncB(qrcode, options) {
        try {
            options = schemaFuncB.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = [
            'type',
            'size',
            'opacity',
            'posType',
            'otherColor',
            'otherColor2',
            'posColor',
        ].map(function (k) {
            return options[k];
        });
        var svg = createRenderer({
            listPoints: listPoints$7,
        })({
            qrcode: qrcode,
            params: params,
        });
        return svg;
    };

    function listPoints$8(qrcode, params) {
        if (!qrcode) return [];
        var nCount = qrcode.getModuleCount();
        var typeTable = getTypeTable(qrcode);
        var pointList = new Array(nCount);
        var type = params[0];
        var size = params[1] / 100;
        var opacity = params[2] / 100;
        var posType = params[3];
        var id = 0;
        var otherColor = params[4];
        var posColor = params[5];
        var vw = [3, -3];
        var vh = [3, -3];
        var sq25 =
            'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';
        if (size <= 0) size = 1.0;
        var available = [];
        var ava2 = [];

        for (var x = 0; x < nCount; x++) {
            available[x] = [];
            ava2[x] = [];

            for (var y = 0; y < nCount; y++) {
                available[x][y] = true;
                ava2[x][y] = true;
            }
        }

        for (var _x = 0; _x < nCount; _x++) {
            for (var _y = 0; _y < nCount; _y++) {
                if (qrcode.isDark(_x, _y) === false) continue;

                if (typeTable[_x][_y] === QRPointType.POS_CENTER) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            x="'
                                )
                                .concat(
                                    _x,
                                    '"\n                            y="'
                                )
                                .concat(_y, '"\n                        />')
                        );
                    } else if (posType === 1) {
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="none"\n                            stroke-width="1"\n                            stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            r="',
                                    3,
                                    '"\n                        />'
                                )
                        );
                    } else if (posType === 2) {
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="none"\n                            stroke-width="0.15"\n                            strokeDasharray="0.5,0.5"\n                            stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            r="',
                                    3,
                                    '"\n                        />'
                                )
                        );

                        for (var w = 0; w < vw.length; w++) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + vw[w] + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                r="',
                                        0.5,
                                        '"\n                            />'
                                    )
                            );
                        }

                        for (var h = 0; h < vh.length; h++) {
                            pointList.push(
                                '<circle\n                                key="'
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + vh[h] + 0.5,
                                        '"\n                                r="',
                                        0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    } else if (posType === 3) {
                        pointList.push(
                            '<circle\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        );
                        pointList.push(
                            '<path\n                            key="'
                                .concat(
                                    id++,
                                    '"\n                            d="'
                                )
                                .concat(
                                    sq25,
                                    '"\n                            stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            stroke-width="'
                                )
                                .concat(
                                    (100 / 6) * (1 - (1 - size) * 0.75),
                                    '"\n                            fill="none"\n                            transform="',
                                    'translate('
                                        .concat(String(_x - 2.5), ',')
                                        .concat(String(_y - 2.5), ') scale(')
                                        .concat(String(6 / 100), ',')
                                        .concat(String(6 / 100), ')'),
                                    '"\n                        />'
                                )
                        );
                    }
                } else if (typeTable[_x][_y] === QRPointType.POS_OTHER) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                            x="'
                                )
                                .concat(
                                    _x,
                                    '"\n                            y="'
                                )
                                .concat(_y, '"\n                        />')
                        );
                    }
                } else {
                    if (type === 0) {
                        if (
                            _x === 0 ||
                            (_x > 0 &&
                                (!qrcode.isDark(_x - 1, _y) ||
                                    !ava2[_x - 1][_y]))
                        ) {
                            var start = 0;
                            var end = 0;
                            var ctn = true;

                            while (ctn && _x + end < nCount) {
                                if (
                                    qrcode.isDark(_x + end, _y) &&
                                    ava2[_x + end][_y]
                                ) {
                                    end++;
                                } else {
                                    ctn = false;
                                }
                            }

                            if (end - start > 1) {
                                for (var i = start; i < end; i++) {
                                    ava2[_x + i][_y] = false;
                                    available[_x + i][_y] = false;
                                }

                                pointList.push(
                                    '<line\n                                    opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                    x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    x2="'
                                        )
                                        .concat(
                                            _x + end - start - 0.5,
                                            '"\n                                    y2="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    stroke-width="'
                                        )
                                        .concat(
                                            size,
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    stroke-linecap="round"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }

                        if (available[_x][_y]) {
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }

                    if (type === 1) {
                        if (
                            _y === 0 ||
                            (_y > 0 &&
                                (!qrcode.isDark(_x, _y - 1) ||
                                    !ava2[_x][_y - 1]))
                        ) {
                            var _start = 0;
                            var _end = 0;
                            var _ctn = true;

                            while (_ctn && _y + _end < nCount) {
                                if (
                                    qrcode.isDark(_x, _y + _end) &&
                                    ava2[_x][_y + _end]
                                ) {
                                    _end++;
                                } else {
                                    _ctn = false;
                                }
                            }

                            if (_end - _start > 1) {
                                for (var _i = _start; _i < _end; _i++) {
                                    ava2[_x][_y + _i] = false;
                                    available[_x][_y + _i] = false;
                                }

                                pointList.push(
                                    '<line\n                                    opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                    x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    x2="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y2="'
                                        )
                                        .concat(
                                            _y + _end - _start - 1 + 0.5,
                                            '"\n                                    stroke-width="'
                                        )
                                        .concat(
                                            size,
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    stroke-linecap="round"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }

                        if (available[_x][_y]) {
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }

                    if (type === 2) {
                        if (
                            _y === 0 ||
                            (_y > 0 &&
                                (!qrcode.isDark(_x, _y - 1) ||
                                    !ava2[_x][_y - 1]))
                        ) {
                            var _start2 = 0;
                            var _end2 = 0;
                            var _ctn2 = true;

                            while (_ctn2 && _y + _end2 < nCount) {
                                if (
                                    qrcode.isDark(_x, _y + _end2) &&
                                    ava2[_x][_y + _end2] &&
                                    _end2 - _start2 <= 3
                                ) {
                                    _end2++;
                                } else {
                                    _ctn2 = false;
                                }
                            }

                            if (_end2 - _start2 > 1) {
                                for (var _i2 = _start2; _i2 < _end2; _i2++) {
                                    ava2[_x][_y + _i2] = false;
                                    available[_x][_y + _i2] = false;
                                }

                                pointList.push(
                                    '<line\n                                    opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                    x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    x2="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y2="'
                                        )
                                        .concat(
                                            _y + _end2 - _start2 - 1 + 0.5,
                                            '"\n                                    stroke-width="'
                                        )
                                        .concat(
                                            size,
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    stroke-linecap="round"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }

                        if (
                            _x === 0 ||
                            (_x > 0 &&
                                (!qrcode.isDark(_x - 1, _y) ||
                                    !ava2[_x - 1][_y]))
                        ) {
                            var _start3 = 0;
                            var _end3 = 0;
                            var _ctn3 = true;

                            while (_ctn3 && _x + _end3 < nCount) {
                                if (
                                    qrcode.isDark(_x + _end3, _y) &&
                                    ava2[_x + _end3][_y] &&
                                    _end3 - _start3 <= 3
                                ) {
                                    _end3++;
                                } else {
                                    _ctn3 = false;
                                }
                            }

                            if (_end3 - _start3 > 1) {
                                for (var _i3 = _start3; _i3 < _end3; _i3++) {
                                    ava2[_x + _i3][_y] = false;
                                    available[_x + _i3][_y] = false;
                                }

                                pointList.push(
                                    '<line\n                                    opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                    x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    x2="'
                                        )
                                        .concat(
                                            _x + _end3 - _start3 - 0.5,
                                            '"\n                                    y2="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    stroke-width="'
                                        )
                                        .concat(
                                            size,
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    stroke-linecap="round"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }

                        if (available[_x][_y]) {
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }

                    if (type === 3) {
                        if ((_x > _y) ^ (_x + _y < nCount)) {
                            if (
                                _y === 0 ||
                                (_y > 0 &&
                                    (!qrcode.isDark(_x, _y - 1) ||
                                        !ava2[_x][_y - 1]))
                            ) {
                                var _start4 = 0;
                                var _end4 = 0;
                                var _ctn4 = true;

                                while (_ctn4 && _y + _end4 < nCount) {
                                    if (
                                        qrcode.isDark(_x, _y + _end4) &&
                                        ava2[_x][_y + _end4] &&
                                        _end4 - _start4 <= 3
                                    ) {
                                        _end4++;
                                    } else {
                                        _ctn4 = false;
                                    }
                                }

                                if (_end4 - _start4 > 1) {
                                    for (
                                        var _i4 = _start4;
                                        _i4 < _end4;
                                        _i4++
                                    ) {
                                        ava2[_x][_y + _i4] = false;
                                        available[_x][_y + _i4] = false;
                                    }

                                    pointList.push(
                                        '<line\n                                        opacity="'
                                            .concat(
                                                opacity,
                                                '"\n                                        x1="'
                                            )
                                            .concat(
                                                _x + 0.5,
                                                '"\n                                        y1="'
                                            )
                                            .concat(
                                                _y + 0.5,
                                                '"\n                                        x2="'
                                            )
                                            .concat(
                                                _x + 0.5,
                                                '"\n                                        y2="'
                                            )
                                            .concat(
                                                _y + _end4 - _start4 - 1 + 0.5,
                                                '"\n                                        stroke-width="'
                                            )
                                            .concat(
                                                size,
                                                '"\n                                        stroke="'
                                            )
                                            .concat(
                                                otherColor,
                                                '"\n                                        stroke-linecap="round"\n                                        key="'
                                            )
                                            .concat(
                                                id++,
                                                '"\n                                    />'
                                            )
                                    );
                                }
                            }
                        } else {
                            if (
                                _x === 0 ||
                                (_x > 0 &&
                                    (!qrcode.isDark(_x - 1, _y) ||
                                        !ava2[_x - 1][_y]))
                            ) {
                                var _start5 = 0;
                                var _end5 = 0;
                                var _ctn5 = true;

                                while (_ctn5 && _x + _end5 < nCount) {
                                    if (
                                        qrcode.isDark(_x + _end5, _y) &&
                                        ava2[_x + _end5][_y] &&
                                        _end5 - _start5 <= 3
                                    ) {
                                        _end5++;
                                    } else {
                                        _ctn5 = false;
                                    }
                                }

                                if (_end5 - _start5 > 1) {
                                    for (
                                        var _i5 = _start5;
                                        _i5 < _end5;
                                        _i5++
                                    ) {
                                        ava2[_x + _i5][_y] = false;
                                        available[_x + _i5][_y] = false;
                                    }

                                    pointList.push(
                                        '<line\n                                        opacity="'
                                            .concat(
                                                opacity,
                                                '"\n                                        x1="'
                                            )
                                            .concat(
                                                _x + 0.5,
                                                '"\n                                        y1="'
                                            )
                                            .concat(
                                                _y + 0.5,
                                                '"\n                                        x2="'
                                            )
                                            .concat(
                                                _x + _end5 - _start5 - 0.5,
                                                '"\n                                        y2="'
                                            )
                                            .concat(
                                                _y + 0.5,
                                                '"\n                                        stroke-width="'
                                            )
                                            .concat(
                                                size,
                                                '"\n                                        stroke="'
                                            )
                                            .concat(
                                                otherColor,
                                                '"\n                                        stroke-linecap="round"\n                                        key="'
                                            )
                                            .concat(
                                                id++,
                                                '"\n                                    />'
                                            )
                                    );
                                }
                            }
                        }

                        if (available[_x][_y]) {
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }

                    if (type === 4) {
                        if (
                            _y === 0 ||
                            _x === 0 ||
                            (_y > 0 &&
                                _x > 0 &&
                                (!qrcode.isDark(_x - 1, _y - 1) ||
                                    !ava2[_x - 1][_y - 1]))
                        ) {
                            var _start6 = 0;
                            var _end6 = 0;
                            var _ctn6 = true;

                            while (
                                _ctn6 &&
                                _y + _end6 < nCount &&
                                _x + _end6 < nCount
                            ) {
                                if (
                                    qrcode.isDark(_x + _end6, _y + _end6) &&
                                    ava2[_x + _end6][_y + _end6]
                                ) {
                                    _end6++;
                                } else {
                                    _ctn6 = false;
                                }
                            }

                            if (_end6 - _start6 > 1) {
                                for (var _i6 = _start6; _i6 < _end6; _i6++) {
                                    ava2[_x + _i6][_y + _i6] = false;
                                    available[_x + _i6][_y + _i6] = false;
                                }

                                pointList.push(
                                    '<line\n                                    opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                    x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    x2="'
                                        )
                                        .concat(
                                            _x + _end6 - _start6 - 1 + 0.5,
                                            '"\n                                    y2="'
                                        )
                                        .concat(
                                            _y + _end6 - _start6 - 1 + 0.5,
                                            '"\n                                    stroke-width="'
                                        )
                                        .concat(
                                            size,
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    stroke-linecap="round"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }

                        if (available[_x][_y]) {
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }

                    if (type === 5) {
                        if (
                            _x === 0 ||
                            _y === nCount - 1 ||
                            (_x > 0 &&
                                _y < nCount - 1 &&
                                (!qrcode.isDark(_x - 1, _y + 1) ||
                                    !ava2[_x - 1][_y + 1]))
                        ) {
                            var _start7 = 0;
                            var _end7 = 0;
                            var _ctn7 = true;

                            while (
                                _ctn7 &&
                                _x + _end7 < nCount &&
                                _y - _end7 >= 0
                            ) {
                                if (
                                    qrcode.isDark(_x + _end7, _y - _end7) &&
                                    available[_x + _end7][_y - _end7]
                                ) {
                                    _end7++;
                                } else {
                                    _ctn7 = false;
                                }
                            }

                            if (_end7 - _start7 > 1) {
                                for (var _i7 = _start7; _i7 < _end7; _i7++) {
                                    ava2[_x + _i7][_y - _i7] = false;
                                    available[_x + _i7][_y - _i7] = false;
                                }

                                pointList.push(
                                    '<line\n                                    opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                    x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    x2="'
                                        )
                                        .concat(
                                            _x + (_end7 - _start7 - 1) + 0.5,
                                            '"\n                                    y2="'
                                        )
                                        .concat(
                                            _y - (_end7 - _start7 - 1) + 0.5,
                                            '"\n                                    stroke-width="'
                                        )
                                        .concat(
                                            size,
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    stroke-linecap="round"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }

                        if (available[_x][_y]) {
                            pointList.push(
                                '<circle\n                                opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        size / 2,
                                        '"\n                                key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                            />'
                                    )
                            );
                        }
                    }

                    if (type === 6) {
                        if (
                            _x === 0 ||
                            _y === nCount - 1 ||
                            (_x > 0 &&
                                _y < nCount - 1 &&
                                (!qrcode.isDark(_x - 1, _y + 1) ||
                                    !ava2[_x - 1][_y + 1]))
                        ) {
                            var _start8 = 0;
                            var _end8 = 0;
                            var _ctn8 = true;

                            while (
                                _ctn8 &&
                                _x + _end8 < nCount &&
                                _y - _end8 >= 0
                            ) {
                                if (
                                    qrcode.isDark(_x + _end8, _y - _end8) &&
                                    ava2[_x + _end8][_y - _end8]
                                ) {
                                    _end8++;
                                } else {
                                    _ctn8 = false;
                                }
                            }

                            if (_end8 - _start8 > 1) {
                                for (var _i8 = _start8; _i8 < _end8; _i8++) {
                                    ava2[_x + _i8][_y - _i8] = false;
                                }

                                pointList.push(
                                    '<line\n                                    opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                    x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    x2="'
                                        )
                                        .concat(
                                            _x + (_end8 - _start8 - 1) + 0.5,
                                            '"\n                                    y2="'
                                        )
                                        .concat(
                                            _y - (_end8 - _start8 - 1) + 0.5,
                                            '"\n                                    stroke-width="'
                                        )
                                        .concat(
                                            (size / 2) * rand(0.3, 1),
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    stroke-linecap="round"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }

                        if (
                            _y === 0 ||
                            _x === 0 ||
                            (_y > 0 &&
                                _x > 0 &&
                                (!qrcode.isDark(_x - 1, _y - 1) ||
                                    !available[_x - 1][_y - 1]))
                        ) {
                            var _start9 = 0;
                            var _end9 = 0;
                            var _ctn9 = true;

                            while (
                                _ctn9 &&
                                _y + _end9 < nCount &&
                                _x + _end9 < nCount
                            ) {
                                if (
                                    qrcode.isDark(_x + _end9, _y + _end9) &&
                                    available[_x + _end9][_y + _end9]
                                ) {
                                    _end9++;
                                } else {
                                    _ctn9 = false;
                                }
                            }

                            if (_end9 - _start9 > 1) {
                                for (var _i9 = _start9; _i9 < _end9; _i9++) {
                                    available[_x + _i9][_y + _i9] = false;
                                }

                                pointList.push(
                                    '<line\n                                    opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                    x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                    y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                    x2="'
                                        )
                                        .concat(
                                            _x + _end9 - _start9 - 1 + 0.5,
                                            '"\n                                    y2="'
                                        )
                                        .concat(
                                            _y + _end9 - _start9 - 1 + 0.5,
                                            '"\n                                    stroke-width="'
                                        )
                                        .concat(
                                            (size / 2) * rand(0.3, 1),
                                            '"\n                                    stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                    stroke-linecap="round"\n                                    key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }

                        pointList.push(
                            '<circle\n                            opacity="'
                                .concat(
                                    opacity,
                                    '"\n                            r="'
                                )
                                .concat(
                                    0.5 * rand(0.33, 0.9),
                                    '"\n                            key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                        />'
                                )
                        );
                    }
                }
            }
        }

        return pointList;
    }

    var schemaLine = ObjectSchema().shape({
        type: SchemaType().oneOf([0, 1, 2, 3, 4, 5, 6])['default'](2),
        size: NumberSchema()['default'](50),
        opacity: NumberSchema()['default'](100),
        posType: SchemaType().oneOf([0, 1, 2, 3])['default'](3),
        otherColor: StringSchema()['default']('#000000'),
        posColor: StringSchema()['default']('#000000'),
    });
    var schemaLine2 = ObjectSchema().shape({
        type: SchemaType().oneOf([0, 1, 2, 3, 4, 5, 6])['default'](6),
        size: NumberSchema()['default'](50),
        opacity: NumberSchema()['default'](100),
        posType: SchemaType().oneOf([0, 1, 2, 3])['default'](0),
        otherColor: StringSchema()['default']('#000000'),
        posColor: StringSchema()['default']('#000000'),
    });
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {String} [options.type]  连线方向 0=>左右 1=>上下 2=>纵横 3=>回环 4=>左上—右下 5=>右上—左下 6=>交叉"
     * @param {String} [options.size] 连线粗细
     * @param {String} [options.opacity] 连线不透明度
     * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
     * @param {String} [options.otherColor] 连线颜色
     * @param {String} [options.posColor] 定位点颜色
     */

    var rendererLine = function rendererLine(qrcode, options) {
        try {
            options = schemaLine.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = [
            'type',
            'size',
            'opacity',
            'posType',
            'otherColor',
            'posColor',
        ].map(function (k) {
            return options[k];
        });
        var svg = createRenderer({
            listPoints: listPoints$8,
        })({
            qrcode: qrcode,
            params: params,
        });
        return svg;
    };
    /**
     *
     * @param {Object} qrcode
     * @param {Object} options
     * @param {String} [options.type]  连线方向 0=>左右 1=>上下 2=>纵横 3=>回环 4=>左上—右下 5=>右上—左下 7=>交叉"
     * @param {String} [options.size] 连线粗细
     * @param {String} [options.opacity] 连线不透明度
     * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
     * @param {String} [options.otherColor] 连线颜色
     * @param {String} [options.posColor] 定位点颜色
     */

    var rendererLine2 = function rendererLine2(qrcode, options) {
        try {
            options = schemaLine2.validateSync(options);
        } catch (err) {
            console.error(err);
            return '';
        }

        var params = [
            'type',
            'size',
            'opacity',
            'posType',
            'otherColor',
            'posColor',
        ].map(function (k) {
            return options[k];
        });
        var svg = createRenderer({
            listPoints: listPoints$8,
        })({
            qrcode: qrcode,
            params: params,
        });
        return svg;
    };

    var index = {
        rendererRect: rendererRect,
        rendererRound: rendererRound,
        rendererRandRound: rendererRandRound,
        rendererDSJ: RenderDSJ,
        rendererResImage: render,
        rendererImage: RendererImage,
        renderer25D: Renderer25D,
        rendererRandRect: RendererRandRect,
        rendererCircle: rendererCircle,
        rendererFuncA: rendererFuncA,
        rendererFuncB: rendererFuncB,
        rendererLine: rendererLine,
        rendererLine2: rendererLine2,
        encodeData: encodeData,
    };

    exports.default = index;
    exports.encodeData = encodeData;
    exports.renderer25D = Renderer25D;
    exports.rendererCircle = rendererCircle;
    exports.rendererDSJ = RenderDSJ;
    exports.rendererFuncA = rendererFuncA;
    exports.rendererFuncB = rendererFuncB;
    exports.rendererImage = RendererImage;
    exports.rendererLine = rendererLine;
    exports.rendererLine2 = rendererLine2;
    exports.rendererRandRect = RendererRandRect;
    exports.rendererRandRound = rendererRandRound;
    exports.rendererRect = rendererRect;
    exports.rendererResImage = render;
    exports.rendererRound = rendererRound;

    Object.defineProperty(exports, '__esModule', { value: true });
});
