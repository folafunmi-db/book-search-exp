/*jshint esversion: 10 */

import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup } from "react-bootstrap";
import { AiOutlineFileSearch } from "react-icons/ai";
import "./Global.styles.css";

import Gallery from '../Gallery/gallery.component';

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: [],
    };
  }

  search() {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${BASE_URL}${this.state.query}`, { method: "GET" })
      .then((response) => response.json())
      .then((json) => {
        let { items } = json;
        this.setState({ items });
      });
  }

  handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      query: "",
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Book Search Explorer</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              onChange={(event) => this.setState({ query: event.target.value })}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  this.search();
                  this.handleReset();
                }
              }}
            />
            <AiOutlineFileSearch
              className="search-button"
              onClick={() => this.search()}
            />
          </InputGroup>
        </FormGroup>
        <Gallery />
      </div>
    );
  }
}

export default Global;
