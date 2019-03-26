import React from "react";
import PropTypes from "prop-types";
import "./App.scss";

export default class App extends React.Component {
  state = {
    isOpen: false,
    activeAcc: "",
    accordions: [
      {
        id: "0",
        name: "accordion 1",
        pannel: "pannel 1"
      },
      {
        id: "1",
        name: "accordion 2",
        pannel: "pannel 2"
      },
      {
        id: "2",
        name: "accordion 3",
        pannel: "pannel 3"
      }
    ]
  };

  handleClick = id => {
    this.setState(prevState => ({
      activeAcc: id,
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { accordions, isOpen, activeAcc } = this.state;
    return (
      <div>
        {accordions.map(accordion => (
          <div key={accordion.id} className="accordion">
            <div onClick={() => this.handleClick(accordion.id)}>
              {accordion.name}
            </div>
            {activeAcc === accordion.id && isOpen ? (
              <div className="pannel">{accordion.pannel}</div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

App.propTypes = {
  isOpen: PropTypes.bool,
  activeAcc: PropTypes.string,
  accordions: PropTypes.array
};
