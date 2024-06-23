import React from "react";
import "./Footer.css";
import AppContext from "../App/AppContext";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { connect } from "react-redux";

function Footer() {
  const { isLoggedIn } = React.useContext(AppContext);

  return (
    <div className="App-footer">
      {isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.ui.get("user"),
});

export default connect(mapStateToProps)(Footer);
