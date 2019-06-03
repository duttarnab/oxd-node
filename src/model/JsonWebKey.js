/**
 * oxd-server
 * oxd-server
 *
 * OpenAPI spec version: 4.0
 * Contact: yuriyz@gluu.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OxdServer) {
      root.OxdServer = {};
    }
    root.OxdServer.JsonWebKey = factory(root.OxdServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JsonWebKey model module.
   * @module model/JsonWebKey
   * @version 4.0
   */

  /**
   * Constructs a new <code>JsonWebKey</code>.
   * @alias module:model/JsonWebKey
   * @class
   * @param kid {String} 
   * @param kty {String} 
   * @param use {String} 
   * @param keyOps {String} 
   * @param alg {String} 
   * @param exp {Number} 
   * @param x5c {Array.<String>} 
   * @param x5t {Array.<String>} 
   * @param x5u {String} 
   */
  var exports = function(kid, kty, use, keyOps, alg, exp, x5c, x5t, x5u) {
    var _this = this;

    _this['kid'] = kid;
    _this['kty'] = kty;
    _this['use'] = use;
    _this['key_ops'] = keyOps;
    _this['alg'] = alg;
    _this['exp'] = exp;
    _this['x5c'] = x5c;
    _this['x5t'] = x5t;

    _this['x5u'] = x5u;
  };

  /**
   * Constructs a <code>JsonWebKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonWebKey} obj Optional instance to populate.
   * @return {module:model/JsonWebKey} The populated <code>JsonWebKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('kid')) {
        obj['kid'] = ApiClient.convertToType(data['kid'], 'String');
      }
      if (data.hasOwnProperty('kty')) {
        obj['kty'] = ApiClient.convertToType(data['kty'], 'String');
      }
      if (data.hasOwnProperty('use')) {
        obj['use'] = ApiClient.convertToType(data['use'], 'String');
      }
      if (data.hasOwnProperty('key_ops')) {
        obj['key_ops'] = ApiClient.convertToType(data['key_ops'], 'String');
      }
      if (data.hasOwnProperty('alg')) {
        obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
      }
      if (data.hasOwnProperty('exp')) {
        obj['exp'] = ApiClient.convertToType(data['exp'], 'Number');
      }
      if (data.hasOwnProperty('x5c')) {
        obj['x5c'] = ApiClient.convertToType(data['x5c'], ['String']);
      }
      if (data.hasOwnProperty('x5t')) {
        obj['x5t'] = ApiClient.convertToType(data['x5t'], ['String']);
      }
      if (data.hasOwnProperty('x5t#S256')) {
        obj['x5t#S256'] = ApiClient.convertToType(data['x5t#S256'], 'String');
      }
      if (data.hasOwnProperty('x5u')) {
        obj['x5u'] = ApiClient.convertToType(data['x5u'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} kid
   */
  exports.prototype['kid'] = undefined;
  /**
   * @member {String} kty
   */
  exports.prototype['kty'] = undefined;
  /**
   * @member {String} use
   */
  exports.prototype['use'] = undefined;
  /**
   * @member {String} key_ops
   */
  exports.prototype['key_ops'] = undefined;
  /**
   * @member {String} alg
   */
  exports.prototype['alg'] = undefined;
  /**
   * @member {Number} exp
   */
  exports.prototype['exp'] = undefined;
  /**
   * @member {Array.<String>} x5c
   */
  exports.prototype['x5c'] = undefined;
  /**
   * @member {Array.<String>} x5t
   */
  exports.prototype['x5t'] = undefined;
  /**
   * @member {String} x5t#S256
   */
  exports.prototype['x5t#S256'] = undefined;
  /**
   * @member {String} x5u
   */
  exports.prototype['x5u'] = undefined;



  return exports;
}));


