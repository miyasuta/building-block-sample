sap.ui.define([
        "sap/fe/core/AppComponent",
        "sap/ui/Device",
        "ns/ui/model/models"
    ],
    function (AppComponent, Device, models) {
        "use strict";

        return AppComponent.extend("ns.ui.Component", {
            metadata: {
                manifest: "json"
            },

            // /**
            //  * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
            //  * @public
            //  * @override
            //  */
            // init: function () {
            //     // call the base component's init function
            //     AppComponent.prototype.init.apply(this, arguments);

            //     // enable routing
            //     this.getRouter().initialize();

            //     // set the device model
            //     this.setModel(models.createDeviceModel(), "device");
            // }
        });
    }
);