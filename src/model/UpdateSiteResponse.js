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
    define(['ApiClient', 'model/OxdId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OxdId'));
  } else {
    // Browser globals (root is window)
    if (!root.OxdServer) {
      root.OxdServer = {};
    }
    root.OxdServer.UpdateSiteResponse = factory(root.OxdServer.ApiClient, root.OxdServer.OxdId);
  }
}(this, function(ApiClient, OxdId) {
  'use strict';




  /**
   * The UpdateSiteResponse model module.
   * @module model/UpdateSiteResponse
   * @version 4.0
   */

  /**
   * Constructs a new <code>UpdateSiteResponse</code>.
   * @alias module:model/UpdateSiteResponse
   * @class
   * @param oxdId {module:model/OxdId} 
   */
  var exports = function(oxdId) {
    var _this = this;

    _this['oxd_id'] = oxdId;
  };

  /**
   * Constructs a <code>UpdateSiteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSiteResponse} obj Optional instance to populate.
   * @return {module:model/UpdateSiteResponse} The populated <code>UpdateSiteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oxd_id')) {
        obj['oxd_id'] = OxdId.constructFromObject(data['oxd_id']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OxdId} oxd_id
   */
  exports.prototype['oxd_id'] = undefined;



  return exports;
}));

