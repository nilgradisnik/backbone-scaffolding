define([
  'hbs!template/index/index'
], function(mainPageTemplate) {

  var mainPage = Backbone.View.extend({

    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(mainPageTemplate);
    }
  });

  return mainPage;
});
