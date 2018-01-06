import * as React from "react";
import { RouteComponentProps } from "react-router";

export class Thanks extends React.Component<RouteComponentProps<{}>, {}> {
    public render():JSX.Element {
        return <div>
            <h1 id="thanks">Thanks!</h1>
            <p>We will be in touch</p>
        </div>;
    }
}
