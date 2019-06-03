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
    instance = new OxdServer.GetauthorizationurlCustomParameters();
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

  describe('GetauthorizationurlCustomParameters', function() {
    it('should create an instance of GetauthorizationurlCustomParameters', function() {
      // uncomment below and update the code to test GetauthorizationurlCustomParameters
      //var instance = new OxdServer.GetauthorizationurlCustomParameters();
      //expect(instance).to.be.a(OxdServer.GetauthorizationurlCustomParameters);
    });

    it('should have the property param1 (base name: "param1")', function() {
      // uncomment below and update the code to test the property param1
      //var instance = new OxdServer.GetauthorizationurlCustomParameters();
      //expect(instance).to.be();
    });

    it('should have the property param2 (base name: "param2")', function() {
      // uncomment below and update the code to test the property param2
      //var instance = new OxdServer.GetauthorizationurlCustomParameters();
      //expect(instance).to.be();
    });

  });

}));
