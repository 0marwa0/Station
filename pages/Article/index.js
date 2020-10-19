import React from "react";
import { ArticlesColumns } from "./Config";
import { ArticlesData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
class Aritcle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CustomPage
        pageTitle="Articles"
        columns={ArticlesColumns}
        data={ArticlesData}
      />
    );
  }
}

export default Aritcle;
