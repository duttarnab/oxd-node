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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Condition', 'model/ErrorResponse', 'model/GetAccessTokenByRefreshTokenParams', 'model/GetAccessTokenByRefreshTokenResponse', 'model/GetAuthorizationUrlParams', 'model/GetAuthorizationUrlResponse', 'model/GetClientTokenParams', 'model/GetClientTokenResponse', 'model/GetDiscoveryParams', 'model/GetDiscoveryResponse', 'model/GetJwksParams', 'model/GetJwksResponse', 'model/GetLogoutUriParams', 'model/GetLogoutUriResponse', 'model/GetTokensByCodeParams', 'model/GetTokensByCodeResponse', 'model/GetUserInfoParams', 'model/GetauthorizationurlCustomParameters', 'model/IntrospectAccessTokenParams', 'model/IntrospectAccessTokenResponse', 'model/IntrospectRptParams', 'model/IntrospectRptResponse', 'model/JsonWebKey', 'model/OxdId', 'model/RegisterSiteParams', 'model/RegisterSiteResponse', 'model/RemoveSiteParams', 'model/RsResource', 'model/UmaRpGetClaimsGatheringUrlParams', 'model/UmaRpGetClaimsGatheringUrlResponse', 'model/UmaRpGetRptParams', 'model/UmaRpGetRptResponse', 'model/UmaRsCheckAccessParams', 'model/UmaRsCheckAccessResponse', 'model/UmaRsProtectParams', 'model/UmaRsProtectResponse', 'model/UpdateSiteParams', 'model/UpdateSiteResponse', 'api/DevelopersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Condition'), require('./model/ErrorResponse'), require('./model/GetAccessTokenByRefreshTokenParams'), require('./model/GetAccessTokenByRefreshTokenResponse'), require('./model/GetAuthorizationUrlParams'), require('./model/GetAuthorizationUrlResponse'), require('./model/GetClientTokenParams'), require('./model/GetClientTokenResponse'), require('./model/GetDiscoveryParams'), require('./model/GetDiscoveryResponse'), require('./model/GetJwksParams'), require('./model/GetJwksResponse'), require('./model/GetLogoutUriParams'), require('./model/GetLogoutUriResponse'), require('./model/GetTokensByCodeParams'), require('./model/GetTokensByCodeResponse'), require('./model/GetUserInfoParams'), require('./model/GetauthorizationurlCustomParameters'), require('./model/IntrospectAccessTokenParams'), require('./model/IntrospectAccessTokenResponse'), require('./model/IntrospectRptParams'), require('./model/IntrospectRptResponse'), require('./model/JsonWebKey'), require('./model/OxdId'), require('./model/RegisterSiteParams'), require('./model/RegisterSiteResponse'), require('./model/RemoveSiteParams'), require('./model/RsResource'), require('./model/UmaRpGetClaimsGatheringUrlParams'), require('./model/UmaRpGetClaimsGatheringUrlResponse'), require('./model/UmaRpGetRptParams'), require('./model/UmaRpGetRptResponse'), require('./model/UmaRsCheckAccessParams'), require('./model/UmaRsCheckAccessResponse'), require('./model/UmaRsProtectParams'), require('./model/UmaRsProtectResponse'), require('./model/UpdateSiteParams'), require('./model/UpdateSiteResponse'), require('./api/DevelopersApi'));
  }
}(function(ApiClient, Condition, ErrorResponse, GetAccessTokenByRefreshTokenParams, GetAccessTokenByRefreshTokenResponse, GetAuthorizationUrlParams, GetAuthorizationUrlResponse, GetClientTokenParams, GetClientTokenResponse, GetDiscoveryParams, GetDiscoveryResponse, GetJwksParams, GetJwksResponse, GetLogoutUriParams, GetLogoutUriResponse, GetTokensByCodeParams, GetTokensByCodeResponse, GetUserInfoParams, GetauthorizationurlCustomParameters, IntrospectAccessTokenParams, IntrospectAccessTokenResponse, IntrospectRptParams, IntrospectRptResponse, JsonWebKey, OxdId, RegisterSiteParams, RegisterSiteResponse, RemoveSiteParams, RsResource, UmaRpGetClaimsGatheringUrlParams, UmaRpGetClaimsGatheringUrlResponse, UmaRpGetRptParams, UmaRpGetRptResponse, UmaRsCheckAccessParams, UmaRsCheckAccessResponse, UmaRsProtectParams, UmaRsProtectResponse, UpdateSiteParams, UpdateSiteResponse, DevelopersApi) {
  'use strict';

  /**
   * oxd_server.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var OxdServer = require('index'); // See note below*.
   * var xxxSvc = new OxdServer.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new OxdServer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new OxdServer.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new OxdServer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 4.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Condition model constructor.
     * @property {module:model/Condition}
     */
    Condition: Condition,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The GetAccessTokenByRefreshTokenParams model constructor.
     * @property {module:model/GetAccessTokenByRefreshTokenParams}
     */
    GetAccessTokenByRefreshTokenParams: GetAccessTokenByRefreshTokenParams,
    /**
     * The GetAccessTokenByRefreshTokenResponse model constructor.
     * @property {module:model/GetAccessTokenByRefreshTokenResponse}
     */
    GetAccessTokenByRefreshTokenResponse: GetAccessTokenByRefreshTokenResponse,
    /**
     * The GetAuthorizationUrlParams model constructor.
     * @property {module:model/GetAuthorizationUrlParams}
     */
    GetAuthorizationUrlParams: GetAuthorizationUrlParams,
    /**
     * The GetAuthorizationUrlResponse model constructor.
     * @property {module:model/GetAuthorizationUrlResponse}
     */
    GetAuthorizationUrlResponse: GetAuthorizationUrlResponse,
    /**
     * The GetClientTokenParams model constructor.
     * @property {module:model/GetClientTokenParams}
     */
    GetClientTokenParams: GetClientTokenParams,
    /**
     * The GetClientTokenResponse model constructor.
     * @property {module:model/GetClientTokenResponse}
     */
    GetClientTokenResponse: GetClientTokenResponse,
    /**
     * The GetDiscoveryParams model constructor.
     * @property {module:model/GetDiscoveryParams}
     */
    GetDiscoveryParams: GetDiscoveryParams,
    /**
     * The GetDiscoveryResponse model constructor.
     * @property {module:model/GetDiscoveryResponse}
     */
    GetDiscoveryResponse: GetDiscoveryResponse,
    /**
     * The GetJwksParams model constructor.
     * @property {module:model/GetJwksParams}
     */
    GetJwksParams: GetJwksParams,
    /**
     * The GetJwksResponse model constructor.
     * @property {module:model/GetJwksResponse}
     */
    GetJwksResponse: GetJwksResponse,
    /**
     * The GetLogoutUriParams model constructor.
     * @property {module:model/GetLogoutUriParams}
     */
    GetLogoutUriParams: GetLogoutUriParams,
    /**
     * The GetLogoutUriResponse model constructor.
     * @property {module:model/GetLogoutUriResponse}
     */
    GetLogoutUriResponse: GetLogoutUriResponse,
    /**
     * The GetTokensByCodeParams model constructor.
     * @property {module:model/GetTokensByCodeParams}
     */
    GetTokensByCodeParams: GetTokensByCodeParams,
    /**
     * The GetTokensByCodeResponse model constructor.
     * @property {module:model/GetTokensByCodeResponse}
     */
    GetTokensByCodeResponse: GetTokensByCodeResponse,
    /**
     * The GetUserInfoParams model constructor.
     * @property {module:model/GetUserInfoParams}
     */
    GetUserInfoParams: GetUserInfoParams,
    /**
     * The GetauthorizationurlCustomParameters model constructor.
     * @property {module:model/GetauthorizationurlCustomParameters}
     */
    GetauthorizationurlCustomParameters: GetauthorizationurlCustomParameters,
    /**
     * The IntrospectAccessTokenParams model constructor.
     * @property {module:model/IntrospectAccessTokenParams}
     */
    IntrospectAccessTokenParams: IntrospectAccessTokenParams,
    /**
     * The IntrospectAccessTokenResponse model constructor.
     * @property {module:model/IntrospectAccessTokenResponse}
     */
    IntrospectAccessTokenResponse: IntrospectAccessTokenResponse,
    /**
     * The IntrospectRptParams model constructor.
     * @property {module:model/IntrospectRptParams}
     */
    IntrospectRptParams: IntrospectRptParams,
    /**
     * The IntrospectRptResponse model constructor.
     * @property {module:model/IntrospectRptResponse}
     */
    IntrospectRptResponse: IntrospectRptResponse,
    /**
     * The JsonWebKey model constructor.
     * @property {module:model/JsonWebKey}
     */
    JsonWebKey: JsonWebKey,
    /**
     * The OxdId model constructor.
     * @property {module:model/OxdId}
     */
    OxdId: OxdId,
    /**
     * The RegisterSiteParams model constructor.
     * @property {module:model/RegisterSiteParams}
     */
    RegisterSiteParams: RegisterSiteParams,
    /**
     * The RegisterSiteResponse model constructor.
     * @property {module:model/RegisterSiteResponse}
     */
    RegisterSiteResponse: RegisterSiteResponse,
    /**
     * The RemoveSiteParams model constructor.
     * @property {module:model/RemoveSiteParams}
     */
    RemoveSiteParams: RemoveSiteParams,
    /**
     * The RsResource model constructor.
     * @property {module:model/RsResource}
     */
    RsResource: RsResource,
    /**
     * The UmaRpGetClaimsGatheringUrlParams model constructor.
     * @property {module:model/UmaRpGetClaimsGatheringUrlParams}
     */
    UmaRpGetClaimsGatheringUrlParams: UmaRpGetClaimsGatheringUrlParams,
    /**
     * The UmaRpGetClaimsGatheringUrlResponse model constructor.
     * @property {module:model/UmaRpGetClaimsGatheringUrlResponse}
     */
    UmaRpGetClaimsGatheringUrlResponse: UmaRpGetClaimsGatheringUrlResponse,
    /**
     * The UmaRpGetRptParams model constructor.
     * @property {module:model/UmaRpGetRptParams}
     */
    UmaRpGetRptParams: UmaRpGetRptParams,
    /**
     * The UmaRpGetRptResponse model constructor.
     * @property {module:model/UmaRpGetRptResponse}
     */
    UmaRpGetRptResponse: UmaRpGetRptResponse,
    /**
     * The UmaRsCheckAccessParams model constructor.
     * @property {module:model/UmaRsCheckAccessParams}
     */
    UmaRsCheckAccessParams: UmaRsCheckAccessParams,
    /**
     * The UmaRsCheckAccessResponse model constructor.
     * @property {module:model/UmaRsCheckAccessResponse}
     */
    UmaRsCheckAccessResponse: UmaRsCheckAccessResponse,
    /**
     * The UmaRsProtectParams model constructor.
     * @property {module:model/UmaRsProtectParams}
     */
    UmaRsProtectParams: UmaRsProtectParams,
    /**
     * The UmaRsProtectResponse model constructor.
     * @property {module:model/UmaRsProtectResponse}
     */
    UmaRsProtectResponse: UmaRsProtectResponse,
    /**
     * The UpdateSiteParams model constructor.
     * @property {module:model/UpdateSiteParams}
     */
    UpdateSiteParams: UpdateSiteParams,
    /**
     * The UpdateSiteResponse model constructor.
     * @property {module:model/UpdateSiteResponse}
     */
    UpdateSiteResponse: UpdateSiteResponse,
    /**
     * The DevelopersApi service constructor.
     * @property {module:api/DevelopersApi}
     */
    DevelopersApi: DevelopersApi
  };

  return exports;
}));
