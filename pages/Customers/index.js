import React from "react";
import CustomPage from "../shared/CustomPage";
import { CustomersColumns } from "./Config";
import { CustomersData } from "../../fakeData";
class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CustomPage
        pageTitle="Customers"
        columns={CustomersColumns}
        data={CustomersData}
      />
    );
  }
}

export default Customers;
