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
    root.OxdServer.UmaRsProtectResponse = factory(root.OxdServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UmaRsProtectResponse model module.
   * @module model/UmaRsProtectResponse
   * @version 4.0
   */

  /**
   * Constructs a new <code>UmaRsProtectResponse</code>.
   * @alias module:model/UmaRsProtectResponse
   * @class
   * @param oxdId {String} 
   */
  var exports = function(oxdId) {
    var _this = this;

    _this['oxd_id'] = oxdId;
  };

  /**
   * Constructs a <code>UmaRsProtectResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UmaRsProtectResponse} obj Optional instance to populate.
   * @return {module:model/UmaRsProtectResponse} The populated <code>UmaRsProtectResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oxd_id')) {
        obj['oxd_id'] = ApiClient.convertToType(data['oxd_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} oxd_id
   */
  exports.prototype['oxd_id'] = undefined;



  return exports;
}));


