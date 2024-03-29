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
    root.OxdServer.GetauthorizationurlCustomParameters = factory(root.OxdServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetauthorizationurlCustomParameters model module.
   * @module model/GetauthorizationurlCustomParameters
   * @version 4.0
   */

  /**
   * Constructs a new <code>GetauthorizationurlCustomParameters</code>.
   * @alias module:model/GetauthorizationurlCustomParameters
   * @class
   * @param param1 {String} 
   * @param param2 {String} 
   */
  var exports = function(param1, param2) {
    var _this = this;

    _this['param1'] = param1;
    _this['param2'] = param2;
  };

  /**
   * Constructs a <code>GetauthorizationurlCustomParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetauthorizationurlCustomParameters} obj Optional instance to populate.
   * @return {module:model/GetauthorizationurlCustomParameters} The populated <code>GetauthorizationurlCustomParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('param1')) {
        obj['param1'] = ApiClient.convertToType(data['param1'], 'String');
      }
      if (data.hasOwnProperty('param2')) {
        obj['param2'] = ApiClient.convertToType(data['param2'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} param1
   */
  exports.prototype['param1'] = undefined;
  /**
   * @member {String} param2
   */
  exports.prototype['param2'] = undefined;



  return exports;
}));


