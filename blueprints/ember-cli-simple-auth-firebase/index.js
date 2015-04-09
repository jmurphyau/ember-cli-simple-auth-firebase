module.exports = {
  name: 'ember-cli-simple-auth-firebase',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth.js');
    app.import(app.bowerDirectory + '/firebase/firebase.js');
    app.import(app.bowerDirectory + '/firebase-es6-shim/firebase-es6-shim.js');
  }
};