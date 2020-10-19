import {
  Col,
  Row,
  Progress,
  Checkbox,
  Table,
  Tooltip,
  Tag,
  Space,
  Button,
  Input,
} from "antd";
import React from "react";
import { BiImport, BiExport } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import SideBar from "../Sidebar";
import { BiDotsVerticalRounded } from "react-icons/bi";
import styled from "styled-components";

import { UserImage } from "../Sidebar";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const CustomPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-left: 100px;
  margin-right: 40px;
`;
const PageBtn = styled.div`
  display: flex;
  flex-cirection: row;
  justify-content: space-between;
  margin-bottom: 17px;
  width: 100%;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
const PageTitle = styled.div`
  color: var(--black);
  font-size: 30px;
  font-weight: bold;
  padding: 20px 0;
`;
const Pagination = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 0px 20px;
  color: var(--darkGray);
  border: 1px solid var(--lighterGray);
  border-radius: 0 0 10px 10px;
  border-top: none;
`;
const PageText = styled.div`
  color: var(--darkGray);
  margin-top: 12px;
`;
const PageNmber = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const IconCss = styled.span`
  color: var(--yellow);
`;
const CustomButton = ({ lable, children, Main, filter }) => {
  return (
    <Button
      style={{
        backgroundColor: Main ? "var(--yellow)" : "var(--lightGray)",
        borderRadius: "7px",
        border: "none",
        display: "flex",
        gap: "5px",
        padding: Main ? "0 15px" : "0 6px",
        alignItems: "center",
        height: "30px",
      }}
    >
      {children}
      {lable}
      {filter ? <RiArrowDownSFill color="var(--lighterGray)" /> : ""}
    </Button>
  );
};
class CustomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let pageTitle = this.props.pageTitle;
    const columns = this.props.columns;
    const data = this.props.data;
    return (
      <CustomPageWrapper>
        <SideBar />
        <PageContent>
          <Row>
            <Col>
              <PageTitle>{this.props.pageTitle}</PageTitle>
            </Col>
          </Row>
          <Row>
            <PageBtn>
              <ButtonGroup>
                <Input
                  style={{
                    borderRadius: "6px",
                    border: "1px solid var(--lighterGray)",
                    height: "30px",
                    color: "var(--lighterGray)",
                    width: "300px",
                  }}
                  placeholder="Search"
                />
                <CustomButton lable="Filter" filter>
                  <FiFilter />
                </CustomButton>
              </ButtonGroup>
              <ButtonGroup>
                <CustomButton lable="Import">
                  <BiImport />
                </CustomButton>
                <CustomButton lable="Export">
                  <BiExport />
                </CustomButton>
                <CustomButton Main lable={`New ${pageTitle}`}>
                  <AiOutlinePlus />
                </CustomButton>
              </ButtonGroup>
            </PageBtn>
          </Row>
          <Row>
            <Col style={{ width: "100%" }}>
              <Table
                columns={columns}
                rowClassName="tableRow"
                pagination={false}
                dataSource={data}
              />
              <Pagination>
                <PageText>
                  View search of 12 from 1,232 search we got .
                </PageText>
                <PageNmber>
                  <LeftOutlined />
                  <p style={{ marginTop: "12px" }}> 1/ 12</p>
                  <IconCss>
                    <RightOutlined />
                  </IconCss>
                </PageNmber>
              </Pagination>
            </Col>
          </Row>
        </PageContent>
      </CustomPageWrapper>
    );
  }
}

export default CustomPage;
