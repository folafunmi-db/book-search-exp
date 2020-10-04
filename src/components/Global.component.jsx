/*jshint esversion: 10 */

import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup } from "react-bootstrap";
import { AiOutlineFileSearch } from "react-icons/ai";

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  search() {
    console.log(this.state.query);
  }

  render() {
    return (
      <div>
        <h2>Book Search Explorer</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              onChange={(event) => this.setState({ query: event.target.value })}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <AiOutlineFileSearch onClick={() => this.search()} />
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default Global;
