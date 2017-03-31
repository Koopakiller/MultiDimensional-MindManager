import { NgModule }                    from "@angular/core";
import { BrowserModule }               from "@angular/platform-browser";
import { HttpModule, JsonpModule }     from '@angular/http';
import { FormsModule }                 from '@angular/forms';
import { AppComponent }                from "./app.component.js";
import { InitialSelectorComponent }    from "./initialSelector.component.js";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule
    ],
  declarations: [
      AppComponent,
      InitialSelectorComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
