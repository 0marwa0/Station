import React from "react";
import CustomPage from "../shared/CustomPage";
import { BookingColumns } from "./Config";
import { BookingData } from "../../fakeData/index";
class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CustomPage
        pageTitle="Booking"
        columns={BookingColumns}
        data={BookingData}
      />
    );
  }
}

export default Booking;
