import * as React from "react";
import { Url } from "./DataInput/Url";


export class Input extends React.Component {
    render() {
        return <div>
                   <a>Url</a>
                   <Url/>
               </div>;
    }
}
