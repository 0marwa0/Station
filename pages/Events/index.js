import React from "react";
import { EventsColumns } from "./Config";
import { EventsData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CustomPage
        pageTitle="Events"
        columns={EventsColumns}
        data={EventsData}
      />
    );
  }
}

export default Events;
