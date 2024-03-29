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
    root.OxdServer.GetLogoutUriParams = factory(root.OxdServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetLogoutUriParams model module.
   * @module model/GetLogoutUriParams
   * @version 4.0
   */

  /**
   * Constructs a new <code>GetLogoutUriParams</code>.
   * @alias module:model/GetLogoutUriParams
   * @class
   * @param oxdId {String} 
   * @param idTokenHint {String} 
   * @param postLogoutRedirectUri {String} 
   * @param state {String} 
   * @param sessionState {String} 
   */
  var exports = function(oxdId, idTokenHint, postLogoutRedirectUri, state, sessionState) {
    var _this = this;

    _this['oxd_id'] = oxdId;
    _this['id_token_hint'] = idTokenHint;
    _this['post_logout_redirect_uri'] = postLogoutRedirectUri;
    _this['state'] = state;
    _this['session_state'] = sessionState;
  };

  /**
   * Constructs a <code>GetLogoutUriParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLogoutUriParams} obj Optional instance to populate.
   * @return {module:model/GetLogoutUriParams} The populated <code>GetLogoutUriParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oxd_id')) {
        obj['oxd_id'] = ApiClient.convertToType(data['oxd_id'], 'String');
      }
      if (data.hasOwnProperty('id_token_hint')) {
        obj['id_token_hint'] = ApiClient.convertToType(data['id_token_hint'], 'String');
      }
      if (data.hasOwnProperty('post_logout_redirect_uri')) {
        obj['post_logout_redirect_uri'] = ApiClient.convertToType(data['post_logout_redirect_uri'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('session_state')) {
        obj['session_state'] = ApiClient.convertToType(data['session_state'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} oxd_id
   */
  exports.prototype['oxd_id'] = undefined;
  /**
   * @member {String} id_token_hint
   */
  exports.prototype['id_token_hint'] = undefined;
  /**
   * @member {String} post_logout_redirect_uri
   */
  exports.prototype['post_logout_redirect_uri'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} session_state
   */
  exports.prototype['session_state'] = undefined;



  return exports;
}));


