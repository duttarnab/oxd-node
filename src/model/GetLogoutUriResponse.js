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
    root.OxdServer.GetLogoutUriResponse = factory(root.OxdServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetLogoutUriResponse model module.
   * @module model/GetLogoutUriResponse
   * @version 4.0
   */

  /**
   * Constructs a new <code>GetLogoutUriResponse</code>.
   * @alias module:model/GetLogoutUriResponse
   * @class
   * @param uri {String} 
   */
  var exports = function(uri) {
    var _this = this;

    _this['uri'] = uri;
  };

  /**
   * Constructs a <code>GetLogoutUriResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLogoutUriResponse} obj Optional instance to populate.
   * @return {module:model/GetLogoutUriResponse} The populated <code>GetLogoutUriResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


