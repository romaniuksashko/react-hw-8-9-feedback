import { Component } from "react";

import { Box } from "./FeedbackOptions.style";
import { Btn } from "./FeedbackOptions.style";

class FeedbackOptions extends Component {
  render() {
    const {options, onLeaveFeedback} = this.props

    return (
      <Box>
        {options.map((item) => {
          return (
            <Btn key={item} grade={item} type="button" onClick={() => onLeaveFeedback(item)}>{item}</Btn>
          )
        })}
      </Box>
    );
  }
}

export default FeedbackOptions;