# OxdServer.RegisterSiteParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizationRedirectUri** | **String** |  | 
**opHost** | **String** | If missing, must be present in defaults | [optional] 
**postLogoutRedirectUris** | **[String]** |  | [optional] 
**applicationType** | **String** |  | [optional] 
**responseTypes** | **[String]** |  | [optional] 
**grantTypes** | **[String]** |  | [optional] 
**scope** | **[String]** |  | [optional] 
**acrValues** | **[String]** |  | [optional] 
**clientName** | **String** | oxd will generate its own non-human readable name by default if client_name is not specified | [optional] 
**clientJwksUri** | **String** |  | [optional] 
**clientTokenEndpointAuthMethod** | **String** |  | [optional] 
**clientRequestUris** | **[String]** |  | [optional] 
**clientFrontchannelLogoutUris** | **[String]** |  | [optional] 
**clientSectorIdentifierUri** | **String** |  | [optional] 
**contacts** | **[String]** |  | [optional] 
**redirectUris** | **[String]** |  | [optional] 
**uiLocales** | **[String]** |  | [optional] 
**claimsLocales** | **[String]** |  | [optional] 
**claimsRedirectUri** | **[String]** |  | [optional] 
**clientId** | **String** | client id of existing client, ignores all other parameters and skips new client registration forcing to use existing client (client_secret is required if this parameter is set) | [optional] 
**clientSecret** | **String** | client secret of existing client, must be used together with client_id | [optional] 
**trustedClient** | **Boolean** | specifies whether client is trusted. Default value is false. | [optional] 
**accessTokenAsJwt** | **Boolean** | specifies whether access_token should be return as JWT or not. Default value is false. | [optional] 
**accessTokenSigningAlg** | **String** | sets signing algorithm used for JWT signing. Valid values are none, HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384, ES512 | [optional] 
**rptAsJwt** | **Boolean** | specifies whether RPT should be return as JWT or not. Default value is false. | [optional] 


