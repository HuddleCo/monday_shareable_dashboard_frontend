import React from "react";
import ReactTooltip from "react-tooltip";
import { Button, Row, Col } from "react-bootstrap";

const DashboardUrl = ({ fileUrl }) => {
  return (
    <>
      <h3>Share this dashboard link with your client!</h3>
      <br /> <br />
      <Row>
        <Col sm={11}>
          <br />
          <p>{fileUrl}</p>
        </Col>
        <Col sm={1}>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(fileUrl);
            }}
            className="my-2"
            type="submit"
            data-tip="Copy to Clipboard!"
          >
            Copy
          </Button>
        </Col>
      </Row>
      <ReactTooltip
        place="top"
        backgroundColor="#31C3ED"
        textColor="white"
        effect="float"
      />
    </>
  );
};

export default DashboardUrl;
