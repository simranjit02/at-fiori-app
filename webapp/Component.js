sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";
  return UIComponent.extend("sm.dev.tut.Component", {
    metadata: {},
    init: function () {
      UIComponent.prototype.init.apply(this);
    },
    createContent: function () {
      var oview1 = sap.ui.view({
        viewName: "sm.dev.tut.view.App",
        type: "XML",
        id: "app-view",
      });
      return oview1;
    },
  });
});
