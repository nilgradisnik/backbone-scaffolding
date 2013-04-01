
define([
  'hbs!template/header/header'
], function(headerTemplate) {

  var headerView = Backbone.View.extend({

    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(headerTemplate);
    }
  });

  return headerView;
});
