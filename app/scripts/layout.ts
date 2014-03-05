/// <reference path="../../typings/things.ts" />


var viewModel = function(names){
  var self = this;
  this.things = ko.observableArray(names);
  this.sum = ko.computed(function(){
      return self.things()[0].name() + " <3 " + self.things()[1].name();
  });
};

var t1 = new Thing("Steve");
var t2 = new Thing("Jessi");

var VM = new viewModel([t1, t2]);
ko.applyBindings(VM);
