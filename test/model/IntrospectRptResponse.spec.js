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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OxdServer);
  }
}(this, function(expect, OxdServer) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OxdServer.IntrospectRptResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('IntrospectRptResponse', function() {
    it('should create an instance of IntrospectRptResponse', function() {
      // uncomment below and update the code to test IntrospectRptResponse
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be.a(OxdServer.IntrospectRptResponse);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

    it('should have the property exp (base name: "exp")', function() {
      // uncomment below and update the code to test the property exp
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

    it('should have the property iat (base name: "iat")', function() {
      // uncomment below and update the code to test the property iat
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

    it('should have the property nbf (base name: "nbf")', function() {
      // uncomment below and update the code to test the property nbf
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

    it('should have the property sub (base name: "sub")', function() {
      // uncomment below and update the code to test the property sub
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

    it('should have the property aud (base name: "aud")', function() {
      // uncomment below and update the code to test the property aud
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

    it('should have the property iss (base name: "iss")', function() {
      // uncomment below and update the code to test the property iss
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

    it('should have the property jti (base name: "jti")', function() {
      // uncomment below and update the code to test the property jti
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instance = new OxdServer.IntrospectRptResponse();
      //expect(instance).to.be();
    });

  });

}));
