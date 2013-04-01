define([
  'backbone',
  'vm'
], function (Backbone, Vm) {

  var AppRouter = Backbone.Router.extend({

    routes: {

      // pages
      'settings': 'settings',

      // default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options) {

    var appView = options.appView;
    var router = new AppRouter(options);

    var viewOptions = {
      el: '.main-container'
    };

    // Settings
    router.on('route:settings', function() {
      require(['view/settings/settings'], function(SettingsPage) {
        Vm.create(appView, 'SettingsPage', SettingsPage, viewOptions);
      });
    });

    // Index - default
    router.on('route:defaultAction', function(action) {
      require(['view/index/index'], function(MainPage) {
        Vm.create(appView, 'MainPage', MainPage, viewOptions);
      });
    });

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
