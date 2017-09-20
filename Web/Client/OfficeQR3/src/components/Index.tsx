import * as React from "react";
import { Input } from "./Input"
import { Settings } from "./Settings";
import { Preview } from "./Preview";


export class Index extends React.Component<undefined, undefined> {
    render() {
        return <div>

            <h1>Input</h1>
            <Input></Input>

            <h1>Settings</h1>
            <Settings></Settings>

            <h1>Settings</h1>
            <Preview dataString="Test"></Preview>

        </div>;
    }
}
