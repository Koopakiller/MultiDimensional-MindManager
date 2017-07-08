import { Component } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "/Templates/App"
})
export class AppComponent {
    _text = "Test";

    public get text(){
        return this._text;
    }

    public set text(value){
        this._text = value;
    }
} 
  