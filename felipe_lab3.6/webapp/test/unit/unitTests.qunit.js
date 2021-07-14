/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"felipe_logali/felipe_lab3.6/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
