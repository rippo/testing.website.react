import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="row">

            <div className="col-sm-2">
            <br/><br/>
                <img src="/static/images/puppeteer.png" className="img-responsive pull-left"/>
            </div>

            <div className="col-sm-10">
            <h1>Hello from Rippo!</h1>
            <h3>
                Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.    
            </h3>

            <p>Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples to get you started:</p>
            <ul>
            <li>Generate screenshots and PDFs of pages.</li>
            <li>Crawl a SPA and generate pre-rendered content (i.e. "SSR").</li>
            <li>Scrape content from websites.</li>
            <li>Automate form submission, UI testing, keyboard input, etc.</li>
            <li>Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.</li>
            <li>Capture a timeline trace of your site to help diagnose performance issues.</li>
            </ul>
            </div>

        </div>;
    }
}
