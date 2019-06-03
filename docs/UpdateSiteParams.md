# OxdServer.UpdateSiteParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oxdId** | **String** |  | 
**authorizationRedirectUri** | **String** |  | [optional] 
**postLogoutRedirectUris** | **[String]** |  | [optional] 
**responseTypes** | **[String]** |  | [optional] 
**grantTypes** | **[String]** |  | [optional] 
**scope** | **[String]** |  | [optional] 
**acrValues** | **[String]** |  | [optional] 
**clientJwksUri** | **String** |  | [optional] 
**clientTokenEndpointAuthMethod** | **String** |  | [optional] 
**clientRequestUris** | **[String]** |  | [optional] 
**clientSectorIdentifierUri** | **String** |  | [optional] 
**contacts** | **[String]** |  | [optional] 
**uiLocales** | **[String]** |  | [optional] 
**claimsLocales** | **[String]** |  | [optional] 
**accessTokenAsJwt** | **Boolean** | specifies whether access_token should be return as JWT or not. Default value is false. | [optional] 
**accessTokenSigningAlg** | **String** | sets signing algorithm used for JWT signing. Valid values are none, HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384, ES512 | [optional] 
**rptAsJwt** | **Boolean** | specifies whether RPT should be return as JWT or not. Default value is false. | [optional] 


