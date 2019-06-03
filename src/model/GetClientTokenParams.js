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
    root.OxdServer.GetClientTokenParams = factory(root.OxdServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetClientTokenParams model module.
   * @module model/GetClientTokenParams
   * @version 4.0
   */

  /**
   * Constructs a new <code>GetClientTokenParams</code>.
   * @alias module:model/GetClientTokenParams
   * @class
   * @param opHost {String} 
   * @param clientId {String} 
   * @param clientSecret {String} 
   */
  var exports = function(opHost, clientId, clientSecret) {
    var _this = this;

    _this['op_host'] = opHost;


    _this['client_id'] = clientId;
    _this['client_secret'] = clientSecret;



  };

  /**
   * Constructs a <code>GetClientTokenParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetClientTokenParams} obj Optional instance to populate.
   * @return {module:model/GetClientTokenParams} The populated <code>GetClientTokenParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('op_host')) {
        obj['op_host'] = ApiClient.convertToType(data['op_host'], 'String');
      }
      if (data.hasOwnProperty('op_discovery_path')) {
        obj['op_discovery_path'] = ApiClient.convertToType(data['op_discovery_path'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], ['String']);
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('client_secret')) {
        obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
      }
      if (data.hasOwnProperty('authentication_method')) {
        obj['authentication_method'] = ApiClient.convertToType(data['authentication_method'], 'String');
      }
      if (data.hasOwnProperty('algorithm')) {
        obj['algorithm'] = ApiClient.convertToType(data['algorithm'], 'String');
      }
      if (data.hasOwnProperty('key_id')) {
        obj['key_id'] = ApiClient.convertToType(data['key_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} op_host
   */
  exports.prototype['op_host'] = undefined;
  /**
   * @member {String} op_discovery_path
   */
  exports.prototype['op_discovery_path'] = undefined;
  /**
   * @member {Array.<String>} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} client_secret
   */
  exports.prototype['client_secret'] = undefined;
  /**
   * if value is missed then basic authentication is used. Otherwise it's possible to set `private_key_jwt` value for Private Key authentication.
   * @member {String} authentication_method
   */
  exports.prototype['authentication_method'] = undefined;
  /**
   * optional but is required if authentication_method=private_key_jwt. Valid values are none, HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384, ES512
   * @member {String} algorithm
   */
  exports.prototype['algorithm'] = undefined;
  /**
   * optional but is required if authentication_method=private_key_jwt. It has to be valid key id from key store.
   * @member {String} key_id
   */
  exports.prototype['key_id'] = undefined;



  return exports;
}));


