sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  return Controller.extend("sm.dev.tut.controller.View1", {
    onInit: function () {
      console.log("View1");
    },
    gotoView2: function () {
      var parentCompo = this.getView().getParent();
      parentCompo.to("View2");
    },
  });
});
