sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";
  return UIComponent.extend("sm.dev.tut.Component", {
    metadata: {
      manifest: "json"
    },
    init: function () {
      UIComponent.prototype.init.apply(this);
    },
    createContent: function () {
      var oViewApp = sap.ui.view({
        viewName: "sm.dev.tut.view.App",
        type: "XML",
        id: "app-view",
      });
      var oView1 = sap.ui.view({
        viewName: "sm.dev.tut.view.View1",
        type: "XML",
        id: "View1",
      });
      var oView2 = sap.ui.view({
        viewName: "sm.dev.tut.view.View2",
        type: "XML",
        id: "View2",
      });
      var appCon = oViewApp.byId("app-container");
      appCon.addMasterPage(oView1).addDetailPage(oView2);
      return appCon;
    },
  });
});
