import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return React.createElement(
      "div",
      { className: "counter" },
      React.createElement("p", null, `Count: ${count}`),
      React.createElement(
        "button",
        { onClick: this.decrement, "aria-label": "Decrement" },
        "Decrement"
      ),
      React.createElement(
        "button",
        { onClick: this.increment, "aria-label": "Increment" },
        "Increment"
      )
    );
  }
}

Counter.propTypes = {
  initialValue: PropTypes.number,
};

Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
