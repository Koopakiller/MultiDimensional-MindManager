import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { AppModule }              from './app/app.module';
import Appmodule = require("./app.module.js");
platformBrowserDynamic().bootstrapModule(Appmodule.AppModule);
