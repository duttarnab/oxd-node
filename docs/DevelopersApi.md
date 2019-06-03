# OxdServer.DevelopersApi

All URIs are relative to *https://gluu.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccessTokenByRefreshToken**](DevelopersApi.md#getAccessTokenByRefreshToken) | **POST** /get-access-token-by-refresh-token | Get Access Token By Refresh Token
[**getAuthorizationUrl**](DevelopersApi.md#getAuthorizationUrl) | **POST** /get-authorization-url | Get Authorization Url
[**getClientToken**](DevelopersApi.md#getClientToken) | **POST** /get-client-token | Get Client Token
[**getDiscovery**](DevelopersApi.md#getDiscovery) | **POST** /get-discovery | Get OP Discovery Configuration
[**getJsonWebKeySet**](DevelopersApi.md#getJsonWebKeySet) | **POST** /get-jwks | Get JSON Web Key Set
[**getLogoutUri**](DevelopersApi.md#getLogoutUri) | **POST** /get-logout-uri | Get Logout URL
[**getTokensByCode**](DevelopersApi.md#getTokensByCode) | **POST** /get-tokens-by-code | Get Tokens By Code
[**getUserInfo**](DevelopersApi.md#getUserInfo) | **POST** /get-user-info | Get User Info
[**healthCheck**](DevelopersApi.md#healthCheck) | **GET** /health-check | Health Check
[**introspectAccessToken**](DevelopersApi.md#introspectAccessToken) | **POST** /introspect-access-token | Introspect Access Token
[**introspectRpt**](DevelopersApi.md#introspectRpt) | **POST** /introspect-rpt | Introspect RPT
[**registerSite**](DevelopersApi.md#registerSite) | **POST** /register-site | Register Site
[**removeSite**](DevelopersApi.md#removeSite) | **POST** /remove-site | Remove Site
[**umaRpGetClaimsGatheringUrl**](DevelopersApi.md#umaRpGetClaimsGatheringUrl) | **POST** /uma-rp-get-claims-gathering-url | UMA RP Get Claims Gathering URL
[**umaRpGetRpt**](DevelopersApi.md#umaRpGetRpt) | **POST** /uma-rp-get-rpt | UMA RP Get RPT
[**umaRsCheckAccess**](DevelopersApi.md#umaRsCheckAccess) | **POST** /uma-rs-check-access | UMA RS Check Access
[**umaRsProtect**](DevelopersApi.md#umaRsProtect) | **POST** /uma-rs-protect | UMA RS Protect Resources
[**updateSite**](DevelopersApi.md#updateSite) | **POST** /update-site | Update Site


<a name="getAccessTokenByRefreshToken"></a>
# **getAccessTokenByRefreshToken**
> GetAccessTokenByRefreshTokenResponse getAccessTokenByRefreshToken(opts)

Get Access Token By Refresh Token

Get Access Token By Refresh Token

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'getAccessTokenByRefreshTokenParams': new OxdServer.GetAccessTokenByRefreshTokenParams() // GetAccessTokenByRefreshTokenParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccessTokenByRefreshToken(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **getAccessTokenByRefreshTokenParams** | [**GetAccessTokenByRefreshTokenParams**](GetAccessTokenByRefreshTokenParams.md)|  | [optional] 

### Return type

[**GetAccessTokenByRefreshTokenResponse**](GetAccessTokenByRefreshTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAuthorizationUrl"></a>
# **getAuthorizationUrl**
> GetAuthorizationUrlResponse getAuthorizationUrl(opts)

Get Authorization Url

Gets authorization url

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'getAuthorizationUrlParams': new OxdServer.GetAuthorizationUrlParams() // GetAuthorizationUrlParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthorizationUrl(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **getAuthorizationUrlParams** | [**GetAuthorizationUrlParams**](GetAuthorizationUrlParams.md)|  | [optional] 

### Return type

[**GetAuthorizationUrlResponse**](GetAuthorizationUrlResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientToken"></a>
# **getClientToken**
> GetClientTokenResponse getClientToken(opts)

Get Client Token

Gets Client Token

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'getClientTokenParams': new OxdServer.GetClientTokenParams() // GetClientTokenParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClientToken(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientTokenParams** | [**GetClientTokenParams**](GetClientTokenParams.md)|  | [optional] 

### Return type

[**GetClientTokenResponse**](GetClientTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscovery"></a>
# **getDiscovery**
> GetDiscoveryResponse getDiscovery(opts)

Get OP Discovery Configuration

Get OP Discovery Configuration

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'getDiscoveryParams': new OxdServer.GetDiscoveryParams() // GetDiscoveryParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscovery(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDiscoveryParams** | [**GetDiscoveryParams**](GetDiscoveryParams.md)|  | [optional] 

### Return type

[**GetDiscoveryResponse**](GetDiscoveryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJsonWebKeySet"></a>
# **getJsonWebKeySet**
> GetJwksResponse getJsonWebKeySet(opts)

Get JSON Web Key Set

Get JSON Web Key Set

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'getJwksParams': new OxdServer.GetJwksParams() // GetJwksParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJsonWebKeySet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **getJwksParams** | [**GetJwksParams**](GetJwksParams.md)|  | [optional] 

### Return type

[**GetJwksResponse**](GetJwksResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLogoutUri"></a>
# **getLogoutUri**
> GetLogoutUriResponse getLogoutUri(opts)

Get Logout URL

Get Logout URL

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'getLogoutUriParams': new OxdServer.GetLogoutUriParams() // GetLogoutUriParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLogoutUri(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **getLogoutUriParams** | [**GetLogoutUriParams**](GetLogoutUriParams.md)|  | [optional] 

### Return type

[**GetLogoutUriResponse**](GetLogoutUriResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTokensByCode"></a>
# **getTokensByCode**
> GetTokensByCodeResponse getTokensByCode(opts)

Get Tokens By Code

Get tokens by code

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'getTokensByCodeParams': new OxdServer.GetTokensByCodeParams() // GetTokensByCodeParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTokensByCode(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **getTokensByCodeParams** | [**GetTokensByCodeParams**](GetTokensByCodeParams.md)|  | [optional] 

### Return type

[**GetTokensByCodeResponse**](GetTokensByCodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserInfo"></a>
# **getUserInfo**
> {&#39;String&#39;: Object} getUserInfo(opts)

Get User Info

Get User Info

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'getUserInfoParams': new OxdServer.GetUserInfoParams() // GetUserInfoParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserInfo(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **getUserInfoParams** | [**GetUserInfoParams**](GetUserInfoParams.md)|  | [optional] 

### Return type

**{&#39;String&#39;: Object}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="healthCheck"></a>
# **healthCheck**
> healthCheck()

Health Check

Health Check endpoint is for quick check whether oxd-server is alive.

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.healthCheck(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="introspectAccessToken"></a>
# **introspectAccessToken**
> IntrospectAccessTokenResponse introspectAccessToken(opts)

Introspect Access Token

Introspect Access Token

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'introspectAccessTokenParams': new OxdServer.IntrospectAccessTokenParams() // IntrospectAccessTokenParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.introspectAccessToken(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **introspectAccessTokenParams** | [**IntrospectAccessTokenParams**](IntrospectAccessTokenParams.md)|  | [optional] 

### Return type

[**IntrospectAccessTokenResponse**](IntrospectAccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="introspectRpt"></a>
# **introspectRpt**
> IntrospectRptResponse introspectRpt(opts)

Introspect RPT

Introspect RPT

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'introspectRptParams': new OxdServer.IntrospectRptParams() // IntrospectRptParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.introspectRpt(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **introspectRptParams** | [**IntrospectRptParams**](IntrospectRptParams.md)|  | [optional] 

### Return type

[**IntrospectRptResponse**](IntrospectRptResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerSite"></a>
# **registerSite**
> RegisterSiteResponse registerSite(opts)

Register Site

Registers site at oxd-server

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'registerSiteParams': new OxdServer.RegisterSiteParams() // RegisterSiteParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerSite(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerSiteParams** | [**RegisterSiteParams**](RegisterSiteParams.md)|  | [optional] 

### Return type

[**RegisterSiteResponse**](RegisterSiteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSite"></a>
# **removeSite**
> UpdateSiteResponse removeSite(opts)

Remove Site

Removes site from oxd-server

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'removeSiteParams': new OxdServer.RemoveSiteParams() // RemoveSiteParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeSite(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **removeSiteParams** | [**RemoveSiteParams**](RemoveSiteParams.md)|  | [optional] 

### Return type

[**UpdateSiteResponse**](UpdateSiteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="umaRpGetClaimsGatheringUrl"></a>
# **umaRpGetClaimsGatheringUrl**
> UmaRpGetClaimsGatheringUrlResponse umaRpGetClaimsGatheringUrl(opts)

UMA RP Get Claims Gathering URL

UMA RP Get Claims Gathering URL

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'umaRpGetClaimsGatheringUrlParams': new OxdServer.UmaRpGetClaimsGatheringUrlParams() // UmaRpGetClaimsGatheringUrlParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.umaRpGetClaimsGatheringUrl(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **umaRpGetClaimsGatheringUrlParams** | [**UmaRpGetClaimsGatheringUrlParams**](UmaRpGetClaimsGatheringUrlParams.md)|  | [optional] 

### Return type

[**UmaRpGetClaimsGatheringUrlResponse**](UmaRpGetClaimsGatheringUrlResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="umaRpGetRpt"></a>
# **umaRpGetRpt**
> UmaRpGetRptResponse umaRpGetRpt(opts)

UMA RP Get RPT

UMA RP Get RPT

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'umaRpGetRptParams': new OxdServer.UmaRpGetRptParams() // UmaRpGetRptParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.umaRpGetRpt(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **umaRpGetRptParams** | [**UmaRpGetRptParams**](UmaRpGetRptParams.md)|  | [optional] 

### Return type

[**UmaRpGetRptResponse**](UmaRpGetRptResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="umaRsCheckAccess"></a>
# **umaRsCheckAccess**
> UmaRsCheckAccessResponse umaRsCheckAccess(opts)

UMA RS Check Access

UMA RS Check Access

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'umaRsCheckAccessParams': new OxdServer.UmaRsCheckAccessParams() // UmaRsCheckAccessParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.umaRsCheckAccess(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **umaRsCheckAccessParams** | [**UmaRsCheckAccessParams**](UmaRsCheckAccessParams.md)|  | [optional] 

### Return type

[**UmaRsCheckAccessResponse**](UmaRsCheckAccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="umaRsProtect"></a>
# **umaRsProtect**
> UmaRsProtectResponse umaRsProtect(opts)

UMA RS Protect Resources

UMA RS Protect Resources. It&#39;s important to have a single HTTP method, mentioned only once within a given path in JSON, otherwise, the operation will fail.

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'umaRsProtectParams': new OxdServer.UmaRsProtectParams() // UmaRsProtectParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.umaRsProtect(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **umaRsProtectParams** | [**UmaRsProtectParams**](UmaRsProtectParams.md)|  | [optional] 

### Return type

[**UmaRsProtectResponse**](UmaRsProtectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSite"></a>
# **updateSite**
> UpdateSiteResponse updateSite(opts)

Update Site

Updates site at oxd-server. If something changes in a pre-registered client, you can use this API to update your client in the OP.

### Example
```javascript
var OxdServer = require('oxd_server');

var apiInstance = new OxdServer.DevelopersApi();

var opts = { 
  'authorization': "authorization_example", // String | 
  'updateSiteParams': new OxdServer.UpdateSiteParams() // UpdateSiteParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSite(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **updateSiteParams** | [**UpdateSiteParams**](UpdateSiteParams.md)|  | [optional] 

### Return type

[**UpdateSiteResponse**](UpdateSiteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

