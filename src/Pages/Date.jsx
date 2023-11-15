import React from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

class RangeCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDates: ["24 Jun 2023", "30 Jun 2023"], 
    };
  }

  handleDateChange = (selectedDates) => {
    this.setState({ selectedDates });
  };

  render() {
    const { selectedDates } = this.state;

    return (
      <div>
        <Flatpickr
          options={{
            mode: "range",
            dateFormat: "d M, Y",
            
          }}
          value={selectedDates}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default RangeCalendar;
