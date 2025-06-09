sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, Filter, FilterOperator) {
    return Controller.extend("sm.dev.tut.controller.View1", {
      onInit: function () {},
      gotoView2: function () {
        var parentCompo = this.getView().getParent();
        parentCompo.to("View2");
      },
      filterFruit: function (oEvent) {
        var oQuery = oEvent.getParameter("newValue");
        var nFilter = new Filter("name", FilterOperator.Contains, oQuery);
        var tFilter = new Filter("taste", FilterOperator.Contains, oQuery);
        var aFilter = [nFilter, tFilter];
        var masterFilter = new Filter({
          filters: aFilter,
          and: false,
        });
        var oList = this.getView().byId("idFruitList");
        oList.getBinding("items").filter(masterFilter);
      },
      onDelete: function (oEvent) {
        var delItem = oEvent.getParameter("listItem");
        var oList = oEvent.getSource();
        oList.removeItem(delItem);
      },
    });
  }
);
