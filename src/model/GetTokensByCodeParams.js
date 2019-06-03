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
    root.OxdServer.GetTokensByCodeParams = factory(root.OxdServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetTokensByCodeParams model module.
   * @module model/GetTokensByCodeParams
   * @version 4.0
   */

  /**
   * Constructs a new <code>GetTokensByCodeParams</code>.
   * @alias module:model/GetTokensByCodeParams
   * @class
   * @param oxdId {String} 
   * @param code {String} 
   * @param state {String} 
   */
  var exports = function(oxdId, code, state) {
    var _this = this;

    _this['oxd_id'] = oxdId;
    _this['code'] = code;
    _this['state'] = state;
  };

  /**
   * Constructs a <code>GetTokensByCodeParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTokensByCodeParams} obj Optional instance to populate.
   * @return {module:model/GetTokensByCodeParams} The populated <code>GetTokensByCodeParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oxd_id')) {
        obj['oxd_id'] = ApiClient.convertToType(data['oxd_id'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} oxd_id
   */
  exports.prototype['oxd_id'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;



  return exports;
}));


