import { Component } from "react";

import { Text } from "./Notification.style";

class Notification extends Component {
  render() {
    const {message} = this.props
    return (
      <Text>{message}</Text>
    );
  }
}

export default Notification;