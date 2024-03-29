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
    define(['ApiClient', 'model/ErrorResponse', 'model/GetAccessTokenByRefreshTokenParams', 'model/GetAccessTokenByRefreshTokenResponse', 'model/GetAuthorizationUrlParams', 'model/GetAuthorizationUrlResponse', 'model/GetClientTokenParams', 'model/GetClientTokenResponse', 'model/GetDiscoveryParams', 'model/GetDiscoveryResponse', 'model/GetJwksParams', 'model/GetJwksResponse', 'model/GetLogoutUriParams', 'model/GetLogoutUriResponse', 'model/GetTokensByCodeParams', 'model/GetTokensByCodeResponse', 'model/GetUserInfoParams', 'model/IntrospectAccessTokenParams', 'model/IntrospectAccessTokenResponse', 'model/IntrospectRptParams', 'model/IntrospectRptResponse', 'model/RegisterSiteParams', 'model/RegisterSiteResponse', 'model/RemoveSiteParams', 'model/UmaRpGetClaimsGatheringUrlParams', 'model/UmaRpGetClaimsGatheringUrlResponse', 'model/UmaRpGetRptParams', 'model/UmaRpGetRptResponse', 'model/UmaRsCheckAccessParams', 'model/UmaRsCheckAccessResponse', 'model/UmaRsProtectParams', 'model/UmaRsProtectResponse', 'model/UpdateSiteParams', 'model/UpdateSiteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/GetAccessTokenByRefreshTokenParams'), require('../model/GetAccessTokenByRefreshTokenResponse'), require('../model/GetAuthorizationUrlParams'), require('../model/GetAuthorizationUrlResponse'), require('../model/GetClientTokenParams'), require('../model/GetClientTokenResponse'), require('../model/GetDiscoveryParams'), require('../model/GetDiscoveryResponse'), require('../model/GetJwksParams'), require('../model/GetJwksResponse'), require('../model/GetLogoutUriParams'), require('../model/GetLogoutUriResponse'), require('../model/GetTokensByCodeParams'), require('../model/GetTokensByCodeResponse'), require('../model/GetUserInfoParams'), require('../model/IntrospectAccessTokenParams'), require('../model/IntrospectAccessTokenResponse'), require('../model/IntrospectRptParams'), require('../model/IntrospectRptResponse'), require('../model/RegisterSiteParams'), require('../model/RegisterSiteResponse'), require('../model/RemoveSiteParams'), require('../model/UmaRpGetClaimsGatheringUrlParams'), require('../model/UmaRpGetClaimsGatheringUrlResponse'), require('../model/UmaRpGetRptParams'), require('../model/UmaRpGetRptResponse'), require('../model/UmaRsCheckAccessParams'), require('../model/UmaRsCheckAccessResponse'), require('../model/UmaRsProtectParams'), require('../model/UmaRsProtectResponse'), require('../model/UpdateSiteParams'), require('../model/UpdateSiteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.OxdServer) {
      root.OxdServer = {};
    }
    root.OxdServer.DevelopersApi = factory(root.OxdServer.ApiClient, root.OxdServer.ErrorResponse, root.OxdServer.GetAccessTokenByRefreshTokenParams, root.OxdServer.GetAccessTokenByRefreshTokenResponse, root.OxdServer.GetAuthorizationUrlParams, root.OxdServer.GetAuthorizationUrlResponse, root.OxdServer.GetClientTokenParams, root.OxdServer.GetClientTokenResponse, root.OxdServer.GetDiscoveryParams, root.OxdServer.GetDiscoveryResponse, root.OxdServer.GetJwksParams, root.OxdServer.GetJwksResponse, root.OxdServer.GetLogoutUriParams, root.OxdServer.GetLogoutUriResponse, root.OxdServer.GetTokensByCodeParams, root.OxdServer.GetTokensByCodeResponse, root.OxdServer.GetUserInfoParams, root.OxdServer.IntrospectAccessTokenParams, root.OxdServer.IntrospectAccessTokenResponse, root.OxdServer.IntrospectRptParams, root.OxdServer.IntrospectRptResponse, root.OxdServer.RegisterSiteParams, root.OxdServer.RegisterSiteResponse, root.OxdServer.RemoveSiteParams, root.OxdServer.UmaRpGetClaimsGatheringUrlParams, root.OxdServer.UmaRpGetClaimsGatheringUrlResponse, root.OxdServer.UmaRpGetRptParams, root.OxdServer.UmaRpGetRptResponse, root.OxdServer.UmaRsCheckAccessParams, root.OxdServer.UmaRsCheckAccessResponse, root.OxdServer.UmaRsProtectParams, root.OxdServer.UmaRsProtectResponse, root.OxdServer.UpdateSiteParams, root.OxdServer.UpdateSiteResponse);
  }
}(this, function(ApiClient, ErrorResponse, GetAccessTokenByRefreshTokenParams, GetAccessTokenByRefreshTokenResponse, GetAuthorizationUrlParams, GetAuthorizationUrlResponse, GetClientTokenParams, GetClientTokenResponse, GetDiscoveryParams, GetDiscoveryResponse, GetJwksParams, GetJwksResponse, GetLogoutUriParams, GetLogoutUriResponse, GetTokensByCodeParams, GetTokensByCodeResponse, GetUserInfoParams, IntrospectAccessTokenParams, IntrospectAccessTokenResponse, IntrospectRptParams, IntrospectRptResponse, RegisterSiteParams, RegisterSiteResponse, RemoveSiteParams, UmaRpGetClaimsGatheringUrlParams, UmaRpGetClaimsGatheringUrlResponse, UmaRpGetRptParams, UmaRpGetRptResponse, UmaRsCheckAccessParams, UmaRsCheckAccessResponse, UmaRsProtectParams, UmaRsProtectResponse, UpdateSiteParams, UpdateSiteResponse) {
  'use strict';

  /**
   * Developers service.
   * @module api/DevelopersApi
   * @version 4.0
   */

  /**
   * Constructs a new DevelopersApi. 
   * @alias module:api/DevelopersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAccessTokenByRefreshToken operation.
     * @callback module:api/DevelopersApi~getAccessTokenByRefreshTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccessTokenByRefreshTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Access Token By Refresh Token
     * Get Access Token By Refresh Token
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/GetAccessTokenByRefreshTokenParams} opts.getAccessTokenByRefreshTokenParams 
     * @param {module:api/DevelopersApi~getAccessTokenByRefreshTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccessTokenByRefreshTokenResponse}
     */
    this.getAccessTokenByRefreshToken = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['getAccessTokenByRefreshTokenParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetAccessTokenByRefreshTokenResponse;

      return this.apiClient.callApi(
        '/get-access-token-by-refresh-token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuthorizationUrl operation.
     * @callback module:api/DevelopersApi~getAuthorizationUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAuthorizationUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Authorization Url
     * Gets authorization url
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/GetAuthorizationUrlParams} opts.getAuthorizationUrlParams 
     * @param {module:api/DevelopersApi~getAuthorizationUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAuthorizationUrlResponse}
     */
    this.getAuthorizationUrl = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['getAuthorizationUrlParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetAuthorizationUrlResponse;

      return this.apiClient.callApi(
        '/get-authorization-url', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientToken operation.
     * @callback module:api/DevelopersApi~getClientTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Client Token
     * Gets Client Token
     * @param {Object} opts Optional parameters
     * @param {module:model/GetClientTokenParams} opts.getClientTokenParams 
     * @param {module:api/DevelopersApi~getClientTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientTokenResponse}
     */
    this.getClientToken = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['getClientTokenParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetClientTokenResponse;

      return this.apiClient.callApi(
        '/get-client-token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscovery operation.
     * @callback module:api/DevelopersApi~getDiscoveryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetDiscoveryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get OP Discovery Configuration
     * Get OP Discovery Configuration
     * @param {Object} opts Optional parameters
     * @param {module:model/GetDiscoveryParams} opts.getDiscoveryParams 
     * @param {module:api/DevelopersApi~getDiscoveryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetDiscoveryResponse}
     */
    this.getDiscovery = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['getDiscoveryParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetDiscoveryResponse;

      return this.apiClient.callApi(
        '/get-discovery', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJsonWebKeySet operation.
     * @callback module:api/DevelopersApi~getJsonWebKeySetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetJwksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get JSON Web Key Set
     * Get JSON Web Key Set
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/GetJwksParams} opts.getJwksParams 
     * @param {module:api/DevelopersApi~getJsonWebKeySetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetJwksResponse}
     */
    this.getJsonWebKeySet = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['getJwksParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetJwksResponse;

      return this.apiClient.callApi(
        '/get-jwks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLogoutUri operation.
     * @callback module:api/DevelopersApi~getLogoutUriCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLogoutUriResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Logout URL
     * Get Logout URL
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/GetLogoutUriParams} opts.getLogoutUriParams 
     * @param {module:api/DevelopersApi~getLogoutUriCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLogoutUriResponse}
     */
    this.getLogoutUri = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['getLogoutUriParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetLogoutUriResponse;

      return this.apiClient.callApi(
        '/get-logout-uri', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTokensByCode operation.
     * @callback module:api/DevelopersApi~getTokensByCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokensByCodeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Tokens By Code
     * Get tokens by code
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/GetTokensByCodeParams} opts.getTokensByCodeParams 
     * @param {module:api/DevelopersApi~getTokensByCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokensByCodeResponse}
     */
    this.getTokensByCode = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['getTokensByCodeParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTokensByCodeResponse;

      return this.apiClient.callApi(
        '/get-tokens-by-code', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserInfo operation.
     * @callback module:api/DevelopersApi~getUserInfoCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Info
     * Get User Info
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/GetUserInfoParams} opts.getUserInfoParams 
     * @param {module:api/DevelopersApi~getUserInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': Object}>}
     */
    this.getUserInfo = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['getUserInfoParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {'String': Object};

      return this.apiClient.callApi(
        '/get-user-info', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the healthCheck operation.
     * @callback module:api/DevelopersApi~healthCheckCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Health Check
     * Health Check endpoint is for quick check whether oxd-server is alive.
     * @param {module:api/DevelopersApi~healthCheckCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.healthCheck = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/health-check', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the introspectAccessToken operation.
     * @callback module:api/DevelopersApi~introspectAccessTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntrospectAccessTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Introspect Access Token
     * Introspect Access Token
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/IntrospectAccessTokenParams} opts.introspectAccessTokenParams 
     * @param {module:api/DevelopersApi~introspectAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntrospectAccessTokenResponse}
     */
    this.introspectAccessToken = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['introspectAccessTokenParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IntrospectAccessTokenResponse;

      return this.apiClient.callApi(
        '/introspect-access-token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the introspectRpt operation.
     * @callback module:api/DevelopersApi~introspectRptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntrospectRptResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Introspect RPT
     * Introspect RPT
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/IntrospectRptParams} opts.introspectRptParams 
     * @param {module:api/DevelopersApi~introspectRptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntrospectRptResponse}
     */
    this.introspectRpt = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['introspectRptParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IntrospectRptResponse;

      return this.apiClient.callApi(
        '/introspect-rpt', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerSite operation.
     * @callback module:api/DevelopersApi~registerSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegisterSiteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register Site
     * Registers site at oxd-server
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterSiteParams} opts.registerSiteParams 
     * @param {module:api/DevelopersApi~registerSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RegisterSiteResponse}
     */
    this.registerSite = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['registerSiteParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RegisterSiteResponse;

      return this.apiClient.callApi(
        '/register-site', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeSite operation.
     * @callback module:api/DevelopersApi~removeSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateSiteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Site
     * Removes site from oxd-server
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/RemoveSiteParams} opts.removeSiteParams 
     * @param {module:api/DevelopersApi~removeSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdateSiteResponse}
     */
    this.removeSite = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['removeSiteParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UpdateSiteResponse;

      return this.apiClient.callApi(
        '/remove-site', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the umaRpGetClaimsGatheringUrl operation.
     * @callback module:api/DevelopersApi~umaRpGetClaimsGatheringUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UmaRpGetClaimsGatheringUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * UMA RP Get Claims Gathering URL
     * UMA RP Get Claims Gathering URL
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/UmaRpGetClaimsGatheringUrlParams} opts.umaRpGetClaimsGatheringUrlParams 
     * @param {module:api/DevelopersApi~umaRpGetClaimsGatheringUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UmaRpGetClaimsGatheringUrlResponse}
     */
    this.umaRpGetClaimsGatheringUrl = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['umaRpGetClaimsGatheringUrlParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UmaRpGetClaimsGatheringUrlResponse;

      return this.apiClient.callApi(
        '/uma-rp-get-claims-gathering-url', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the umaRpGetRpt operation.
     * @callback module:api/DevelopersApi~umaRpGetRptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UmaRpGetRptResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * UMA RP Get RPT
     * UMA RP Get RPT
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/UmaRpGetRptParams} opts.umaRpGetRptParams 
     * @param {module:api/DevelopersApi~umaRpGetRptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UmaRpGetRptResponse}
     */
    this.umaRpGetRpt = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['umaRpGetRptParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UmaRpGetRptResponse;

      return this.apiClient.callApi(
        '/uma-rp-get-rpt', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the umaRsCheckAccess operation.
     * @callback module:api/DevelopersApi~umaRsCheckAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UmaRsCheckAccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * UMA RS Check Access
     * UMA RS Check Access
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/UmaRsCheckAccessParams} opts.umaRsCheckAccessParams 
     * @param {module:api/DevelopersApi~umaRsCheckAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UmaRsCheckAccessResponse}
     */
    this.umaRsCheckAccess = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['umaRsCheckAccessParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UmaRsCheckAccessResponse;

      return this.apiClient.callApi(
        '/uma-rs-check-access', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the umaRsProtect operation.
     * @callback module:api/DevelopersApi~umaRsProtectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UmaRsProtectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * UMA RS Protect Resources
     * UMA RS Protect Resources. It&#39;s important to have a single HTTP method, mentioned only once within a given path in JSON, otherwise, the operation will fail.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/UmaRsProtectParams} opts.umaRsProtectParams 
     * @param {module:api/DevelopersApi~umaRsProtectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UmaRsProtectResponse}
     */
    this.umaRsProtect = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['umaRsProtectParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UmaRsProtectResponse;

      return this.apiClient.callApi(
        '/uma-rs-protect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSite operation.
     * @callback module:api/DevelopersApi~updateSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateSiteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Site
     * Updates site at oxd-server. If something changes in a pre-registered client, you can use this API to update your client in the OP.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/UpdateSiteParams} opts.updateSiteParams 
     * @param {module:api/DevelopersApi~updateSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdateSiteResponse}
     */
    this.updateSite = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['updateSiteParams'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UpdateSiteResponse;

      return this.apiClient.callApi(
        '/update-site', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
