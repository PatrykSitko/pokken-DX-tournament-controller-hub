import React from "react";
import { connect } from "react-redux";
import "./title.scss";

const mapStateToProps = ({ state: { title } }) => ({ title });
function TitleBar({ title }) {
  return (
    <header draggable="false" className="title">
      {title}
    </header>
  );
}

export default connect(mapStateToProps)(TitleBar);
