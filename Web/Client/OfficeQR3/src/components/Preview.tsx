import * as React from "react";


export class PreviewProps {
    public dataString: string;
}

export class Preview extends React.Component<PreviewProps, undefined> {
    render() {
        return <div>
            Preview<br />
            {this.props.dataString}
        </div>;
    }
}
