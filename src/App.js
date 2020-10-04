/*jshint esversion: 10 */

import React from "react";
import { FormGroup, FormControl, InputGroup } from "react-bootstrap";
import { AiOutlineFileSearch } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <h2>Book Search Explorer</h2>
      <FormGroup>
        <InputGroup>
          <FormControl type="text" placeholder="Search for a book" />
          <AiOutlineFileSearch />
        </InputGroup>
      </FormGroup>
    </div>
  );
}

export default App;
