import { NgModule }                    from "@angular/core";
import { BrowserModule }               from "@angular/platform-browser";
import { HttpModule, JsonpModule }     from "@angular/http";
import { FormsModule }                 from "@angular/forms";
import { AppComponent }                from "./Components/app.js";
import { InitialSelectorComponent }    from "./Components/initialSelector.js";
import { DataTableComponent }          from "./Components/dataTable.js";
import { CommonLegendComponent }       from "./Components/commonLegend.js";
import { CircularReferenceComponent }  from "./Components/circularReference.js";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule
    ],
  declarations: [
      AppComponent,
      InitialSelectorComponent,
      DataTableComponent,
      CommonLegendComponent,
      CircularReferenceComponent
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
