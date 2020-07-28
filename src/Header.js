import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navLinksLeft = {
    display: "-webkit-box",
    display: "-webkit-flex",
    display: "-ms-flexbox",
    display: "flex",
    width: "22%",
    marginBottom: "5%",
    paddingLeft: "0px",
    listStyleType: "none",
    fontSize: "20px",
  };

  const navBar = {
    display: "-webkit-flex",
    display: "-ms-flexbox",
    display: "flex",
    width: "92%",
    marginTop: "1%",
    marginRight: "2%",
    marginLeft: "2%",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
    WebkitFlexDirection: "row",
    msFlexDirection: "row",
    flexDirection: "row",
    WebkitBoxPack: "center",
    WebkitJustifyContent: "center",
    msFlexPack: "center",
    justifyContent: "center",
    WebkitFlexWrap: "wrap",
    msFlexWrap: "wrap",
    flexWrap: "wrap",
    WebkitBoxAlign: "end",
    WebkitAlignItems: "flex-end",
    msFlexAlign: "end",
    alignItems: "flex-end",
    gridAutoColumns: "1fr",
    gridColumnGap: "16px",
    gridRowGap: "16px",
    msGridColumns: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto auto",
    msGridRows: "auto auto",
    textAlign: "center",
    zIndex: "5",
  };

  const navLink = {
    textDecoration: "none",
    paddingRight: "40px",
    color: "#cec9c9",
  };

  const navLink2 = {
    textDecoration: "none",
    paddingRight: "40px",
    color: "#cec9c9",
  };

  const navLink3 = {
    textDecoration: "none",
    color: "#cec9c9",
  };

  const heading = {
    marginTop: "2%",
    marginBottom: "5%",
    position: "static",
    display: "-webkit-box",
    display: "-webkit-fle",
    display: "-ms-flexbox",
    display: "flex",
    marginLeft: "20%",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
    WebkitFlexDirection: "row",
    msFlexDirection: "row",
    flexDirection: "row",
    msFlexAlign: "end",
    WebkitAlignSelf: "auto",
    msFlexItemAlign: "auto",
    alignSelf: "auto",
    WebkitBoxOrdinalGroup: "1",
    WebkitOrder: "0",
    msFlexOrder: "0",
    order: "0",
    WebkitBoxFlex: "1",
    WebkitFlex: "1",
    msFlex: "1",
    flex: "1",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#cec9c9",
    fontSize: "30px",
  };

  const name = {
    color: "#cec9c9",
    whiteSpace: "nowrap",
    listStyleType: "none",
    textDecoration: "none",
    opacity: ".4",
    paddingRight: "40px",
  };

  const navLinksRight = {
    display: "-webkit-box",
    display: "-webkit-flex",
    display: "-ms-flexbox",
    display: "flex",
    marginBottom: "5%",
    WebkitFlex: "0 auto",
    WebkitBoxFlex: "0",
    msFlex: "0 auto",
    listStyleType: "none",
    marginTop: "2%",
    fontSize: "20px",
    paddingLeft: "0px",
  };

  const navLink4 = {
    textDecoration: "none",
    color: "#cec9c9",
    paddingLeft: "40px",
  };

  return (
    <React.Fragment>
      <div style={navBar} id="navBar">
        <ul style={navLinksLeft} className="navLinksLeft">
          <li>
            <Link to="/" style={name} className="heading" title="Homepage">
              MASHA IVY
            </Link>
          </li>
          <li>
            <Link to="/about" style={navLink2}>
              about
            </Link>
          </li>
        </ul>
        <ul style={heading} className="name"></ul>
        <ul style={navLinksRight} className="navLinksRight">
          <li>
            <a href="https://github.com/mashachicken" style={navLink}>
              projects
            </a>
          </li>
          <li>
            <Link to="/contact" style={navLink3}>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default Header;
