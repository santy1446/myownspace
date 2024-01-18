const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "mf-notes": "https://myownspacewebsite.s3.amazonaws.com/mf-notes/remoteEntry.js",    
    "mf-contacts": "https://myownspacewebsite.s3.amazonaws.com/mf-contacts/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  sharedMappings: ['commons-lib'],

});
