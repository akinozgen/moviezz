import * as React from "react";
import "./index.css";

export default class Footer extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <footer className="bg-dark text-light">
        <div className="container">
          <p>
            Copyright © 2018 - Akın Özgen{" "}
            <a href="http://twitter.com/akinozgen17">@akinozgen17</a>
          </p>
          <p className="powered">
            <span>Powered by.</span>
            <div className="images">
              <a href="http://surge.sh" target="_blank">
                <img
                  src="https://cdn-images-1.medium.com/max/1200/1*qqOrP7lca1XW70IzPg9Mmw.png"
                  alt=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Surge.sh"
                />
              </a>
              <a href="http://themoviedb.org" target="_blank">
                <img
                  src="https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/the-movie-db-api.png?itok=7BBMG08l"
                  alt=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="The Movie Database"
                />
              </a>
              <a href="http://reactjs.org" target="_blank">
                <img
                  src="https://www.shareicon.net/data/128x128/2016/08/01/640324_logo_512x512.png"
                  alt=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js"
                />
              </a>
              <a href="http://typescriptlang.org" target="_blank">
                <img
                  src="https://d1eq8vvyuam4eq.cloudfront.net/tutorials/typescript/logo-typescript.svg?ver=1528125604"
                  alt=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Typescript"
                />
              </a>
            </div>
          </p>
        </div>
      </footer>
    );
  }
}
