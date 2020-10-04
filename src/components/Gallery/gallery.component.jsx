/*jshint esversion: 10 */

import React, { Component } from "react";
import "./gallery.styles.css";

export default class Gallery extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          let { title } = item.volumeInfo;
          return <div id={index}>{title}</div>;
        })}
      </div>
    );
  }
}
