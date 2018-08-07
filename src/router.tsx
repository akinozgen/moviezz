import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

export default class Router extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <div>
            <Route path="/" exact={true} key="HomePage" component={HomePage} />
            <Route path="/movie/:id" key="Movie Page" component={MoviePage} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
