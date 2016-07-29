import React from "react";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="col-sm-8 col-sm-offset-2">
        <Header />

        <div>
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}
