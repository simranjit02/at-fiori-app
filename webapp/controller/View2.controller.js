sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  return Controller.extend("sm.dev.tut.controller.View2", {
    onInit: function () {

    },
    gotoView1: function () {
      var parentCompo = this.getView().getParent();
      parentCompo.to("View1");
    },
  });
});
