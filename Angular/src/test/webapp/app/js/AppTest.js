// Tests for
// src/webapp/app/js/directives/AddDirectives.js
//
describe("AddDirectives testing", function() {
  describe("angularPOC Module:", function() {
	  
	  var chai = require("chai");
	  var expect = chai.expect;

	  expect(module).not.to.equal(null);
    it("should be registered", function() {
    	
    	var module = angular.module("angularPOC");
    	alert("dada");
    	expect(module).not.to.equal(null);
    	if (module != 'undefined' && module != null) {
    		alert("OK");
    	} else {
    		alert("FAIL");
    	}
    });

    describe("Dependencies:", function() {

      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };
//      var deps = module.value('angularPOC').requires;

      //you can also test the module's dependencies
      it("should have ngRoute as a dependency", function() {
//        expect(hasModule('angularPOC.ngRoute')).to.equal(true);
      });

      it("should have AngularTranslate as a dependency", function() {
//        expect(hasModule('angularPOC.AngularTranslate')).to.equal(true);
      });
    });
  });
});
