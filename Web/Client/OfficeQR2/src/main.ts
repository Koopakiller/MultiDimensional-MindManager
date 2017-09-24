/// <reference path="../dev/typings/office-js/index.d.ts"/>

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./App/app.module";
import { environment } from "./Environments/environment";

if (environment.production) {
  enableProdMode();
}

function launch() {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
}

let flag :boolean;

if (window.hasOwnProperty("Office") && (window.hasOwnProperty("Word") || window.hasOwnProperty("Excel") || window.hasOwnProperty("PowerPoint"))) {
  Office.initialize = (reason) => {
    launch();
  }
}
else {
  launch();
}