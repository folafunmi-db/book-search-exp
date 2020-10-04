/*jshint esversion: 10 */

import React, { Component } from "react";
import "./gallery.styles.css";

export default class Gallery extends Component {
  render() {
    let alternate = "../../Assets/no-image.png";

    return (
      <div>
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a
              key={index}
              className="book"
              href={infoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  imageLinks !== undefined ? imageLinks.thumbnail : alternate
                }
                alt={`${title} Book Cover`}
                className="book-image"
              />
              <div className="book-text">{title}</div>
            </a>
          );
        })}
      </div>
    );
  }
}
