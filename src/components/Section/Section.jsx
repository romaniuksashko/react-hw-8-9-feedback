import { Component } from "react";

import { Piece } from "./Section.style";

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <Piece>
        <h2>{title}</h2>
        {children}
      </Piece>      
    );
  }
}

export default Section;