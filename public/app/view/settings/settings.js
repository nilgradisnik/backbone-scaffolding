define([
  'hbs!template/settings/settings'
], function(settingsTemplate) {

  var settingsView = Backbone.View.extend({

    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(settingsTemplate);
    }
  });

  return settingsView;
});