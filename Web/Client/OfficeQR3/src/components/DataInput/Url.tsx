import * as React from "react";


export class UrlState {
    public url: string;
}

export class Url extends React.Component<undefined, UrlState> {

    constructor(props: undefined) {
        super(props);
        this.state = new UrlState();

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return <div>
            <form>
                <input type="text" value={this.state.url}
                       placeholder="https://example.com/" required
                       onChange={this.handleChange} />
            </form>
        </div>;
    }

    handleChange(event: any) {
        let state: UrlState = this.state;
        state.url = event.target.value;
        this.setState(state)
        console.log(this.state);
    }
}
