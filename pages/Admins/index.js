import Sider from "antd/lib/layout/Sider";
import React from "react";
import CustomPage from "../shared/CustomPage";
import SideBar from "../Sidebar";
import { AdminsData } from "../../fakeData/index";
import { AdminsColumns } from "./Config";
class Admins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CustomPage
          pageTitle="Admins"
          columns={AdminsColumns}
          data={AdminsData}
        />
      </div>
    );
  }
}

export default Admins;
