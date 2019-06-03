# oxd_server

OxdServer - JavaScript client for oxd_server
oxd-server
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 4.0
- Package version: 4.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install oxd_server --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your oxd_server from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('oxd_server')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/oxd_server
then install it via:

```shell
    npm install YOUR_USERNAME/oxd_server --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OxdServer = require('oxd_server');

var api = new OxdServer.DevelopersApi()

var opts = { 
  'authorization': "authorization_example", // {String} 
  'getAccessTokenByRefreshTokenParams': new OxdServer.GetAccessTokenByRefreshTokenParams() // {GetAccessTokenByRefreshTokenParams} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAccessTokenByRefreshToken(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://gluu.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OxdServer.DevelopersApi* | [**getAccessTokenByRefreshToken**](docs/DevelopersApi.md#getAccessTokenByRefreshToken) | **POST** /get-access-token-by-refresh-token | Get Access Token By Refresh Token
*OxdServer.DevelopersApi* | [**getAuthorizationUrl**](docs/DevelopersApi.md#getAuthorizationUrl) | **POST** /get-authorization-url | Get Authorization Url
*OxdServer.DevelopersApi* | [**getClientToken**](docs/DevelopersApi.md#getClientToken) | **POST** /get-client-token | Get Client Token
*OxdServer.DevelopersApi* | [**getDiscovery**](docs/DevelopersApi.md#getDiscovery) | **POST** /get-discovery | Get OP Discovery Configuration
*OxdServer.DevelopersApi* | [**getJsonWebKeySet**](docs/DevelopersApi.md#getJsonWebKeySet) | **POST** /get-jwks | Get JSON Web Key Set
*OxdServer.DevelopersApi* | [**getLogoutUri**](docs/DevelopersApi.md#getLogoutUri) | **POST** /get-logout-uri | Get Logout URL
*OxdServer.DevelopersApi* | [**getTokensByCode**](docs/DevelopersApi.md#getTokensByCode) | **POST** /get-tokens-by-code | Get Tokens By Code
*OxdServer.DevelopersApi* | [**getUserInfo**](docs/DevelopersApi.md#getUserInfo) | **POST** /get-user-info | Get User Info
*OxdServer.DevelopersApi* | [**healthCheck**](docs/DevelopersApi.md#healthCheck) | **GET** /health-check | Health Check
*OxdServer.DevelopersApi* | [**introspectAccessToken**](docs/DevelopersApi.md#introspectAccessToken) | **POST** /introspect-access-token | Introspect Access Token
*OxdServer.DevelopersApi* | [**introspectRpt**](docs/DevelopersApi.md#introspectRpt) | **POST** /introspect-rpt | Introspect RPT
*OxdServer.DevelopersApi* | [**registerSite**](docs/DevelopersApi.md#registerSite) | **POST** /register-site | Register Site
*OxdServer.DevelopersApi* | [**removeSite**](docs/DevelopersApi.md#removeSite) | **POST** /remove-site | Remove Site
*OxdServer.DevelopersApi* | [**umaRpGetClaimsGatheringUrl**](docs/DevelopersApi.md#umaRpGetClaimsGatheringUrl) | **POST** /uma-rp-get-claims-gathering-url | UMA RP Get Claims Gathering URL
*OxdServer.DevelopersApi* | [**umaRpGetRpt**](docs/DevelopersApi.md#umaRpGetRpt) | **POST** /uma-rp-get-rpt | UMA RP Get RPT
*OxdServer.DevelopersApi* | [**umaRsCheckAccess**](docs/DevelopersApi.md#umaRsCheckAccess) | **POST** /uma-rs-check-access | UMA RS Check Access
*OxdServer.DevelopersApi* | [**umaRsProtect**](docs/DevelopersApi.md#umaRsProtect) | **POST** /uma-rs-protect | UMA RS Protect Resources
*OxdServer.DevelopersApi* | [**updateSite**](docs/DevelopersApi.md#updateSite) | **POST** /update-site | Update Site


## Documentation for Models

 - [OxdServer.Condition](docs/Condition.md)
 - [OxdServer.ErrorResponse](docs/ErrorResponse.md)
 - [OxdServer.GetAccessTokenByRefreshTokenParams](docs/GetAccessTokenByRefreshTokenParams.md)
 - [OxdServer.GetAccessTokenByRefreshTokenResponse](docs/GetAccessTokenByRefreshTokenResponse.md)
 - [OxdServer.GetAuthorizationUrlParams](docs/GetAuthorizationUrlParams.md)
 - [OxdServer.GetAuthorizationUrlResponse](docs/GetAuthorizationUrlResponse.md)
 - [OxdServer.GetClientTokenParams](docs/GetClientTokenParams.md)
 - [OxdServer.GetClientTokenResponse](docs/GetClientTokenResponse.md)
 - [OxdServer.GetDiscoveryParams](docs/GetDiscoveryParams.md)
 - [OxdServer.GetDiscoveryResponse](docs/GetDiscoveryResponse.md)
 - [OxdServer.GetJwksParams](docs/GetJwksParams.md)
 - [OxdServer.GetJwksResponse](docs/GetJwksResponse.md)
 - [OxdServer.GetLogoutUriParams](docs/GetLogoutUriParams.md)
 - [OxdServer.GetLogoutUriResponse](docs/GetLogoutUriResponse.md)
 - [OxdServer.GetTokensByCodeParams](docs/GetTokensByCodeParams.md)
 - [OxdServer.GetTokensByCodeResponse](docs/GetTokensByCodeResponse.md)
 - [OxdServer.GetUserInfoParams](docs/GetUserInfoParams.md)
 - [OxdServer.GetauthorizationurlCustomParameters](docs/GetauthorizationurlCustomParameters.md)
 - [OxdServer.IntrospectAccessTokenParams](docs/IntrospectAccessTokenParams.md)
 - [OxdServer.IntrospectAccessTokenResponse](docs/IntrospectAccessTokenResponse.md)
 - [OxdServer.IntrospectRptParams](docs/IntrospectRptParams.md)
 - [OxdServer.IntrospectRptResponse](docs/IntrospectRptResponse.md)
 - [OxdServer.JsonWebKey](docs/JsonWebKey.md)
 - [OxdServer.OxdId](docs/OxdId.md)
 - [OxdServer.RegisterSiteParams](docs/RegisterSiteParams.md)
 - [OxdServer.RegisterSiteResponse](docs/RegisterSiteResponse.md)
 - [OxdServer.RemoveSiteParams](docs/RemoveSiteParams.md)
 - [OxdServer.RsResource](docs/RsResource.md)
 - [OxdServer.UmaRpGetClaimsGatheringUrlParams](docs/UmaRpGetClaimsGatheringUrlParams.md)
 - [OxdServer.UmaRpGetClaimsGatheringUrlResponse](docs/UmaRpGetClaimsGatheringUrlResponse.md)
 - [OxdServer.UmaRpGetRptParams](docs/UmaRpGetRptParams.md)
 - [OxdServer.UmaRpGetRptResponse](docs/UmaRpGetRptResponse.md)
 - [OxdServer.UmaRsCheckAccessParams](docs/UmaRsCheckAccessParams.md)
 - [OxdServer.UmaRsCheckAccessResponse](docs/UmaRsCheckAccessResponse.md)
 - [OxdServer.UmaRsProtectParams](docs/UmaRsProtectParams.md)
 - [OxdServer.UmaRsProtectResponse](docs/UmaRsProtectResponse.md)
 - [OxdServer.UpdateSiteParams](docs/UpdateSiteParams.md)
 - [OxdServer.UpdateSiteResponse](docs/UpdateSiteResponse.md)


## Documentation for Authorization

 All endpoints do not require authorization.

