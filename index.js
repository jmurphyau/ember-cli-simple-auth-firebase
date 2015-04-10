/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-simple-auth-firebase',

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth.js');
    this.app.import(app.bowerDirectory + '/firebase/firebase.js');
    this.app.import(app.bowerDirectory + '/firebase-es6-shim/firebase-es6-shim.js');
  }
};
