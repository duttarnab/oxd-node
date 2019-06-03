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
    root.OxdServer.IntrospectRptParams = factory(root.OxdServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IntrospectRptParams model module.
   * @module model/IntrospectRptParams
   * @version 4.0
   */

  /**
   * Constructs a new <code>IntrospectRptParams</code>.
   * @alias module:model/IntrospectRptParams
   * @class
   * @param oxdId {String} 
   * @param rpt {String} 
   */
  var exports = function(oxdId, rpt) {
    var _this = this;

    _this['oxd_id'] = oxdId;
    _this['rpt'] = rpt;
  };

  /**
   * Constructs a <code>IntrospectRptParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntrospectRptParams} obj Optional instance to populate.
   * @return {module:model/IntrospectRptParams} The populated <code>IntrospectRptParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oxd_id')) {
        obj['oxd_id'] = ApiClient.convertToType(data['oxd_id'], 'String');
      }
      if (data.hasOwnProperty('rpt')) {
        obj['rpt'] = ApiClient.convertToType(data['rpt'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} oxd_id
   */
  exports.prototype['oxd_id'] = undefined;
  /**
   * @member {String} rpt
   */
  exports.prototype['rpt'] = undefined;



  return exports;
}));


