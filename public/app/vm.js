define([
  'backbone'
], function(Backbone) {

  var views = {};

  var create = function(context, name, View, options) {

    if (typeof views[name] !== 'undefined') {

      views[name].undelegateEvents();

      // call 'clean' on the view if exists
      if (typeof views[name].clean === 'function') {
        views[name].clean();
      }
    }

    var view = new View(options);
    views[name] = view;

    if (typeof context.children === 'undefined') {
      context.children = {};
    }
    context.children[name] = view;

    return view;
  };

  var get = function(name) {
    return views[name];
  };

  return {
    create: create,
    get: get
  };
});
