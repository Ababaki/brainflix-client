import React from "react";
import "./Header.scss";
import logo from "../../assets/logo/Logo-brainflix.svg"
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Btn from "../Button/Button"
import iconUpload from "../../assets/icons/upload.svg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <Link to="/" className="header__link">
          <img className="header__logo" src={logo} alt="brainflix logo" />
        </Link>
      </div>
      <div className="header__action">
        <input name="upload video" className="header__search" type="text" placeholder="Search" />
        <img className="header__avatar" src={avatar} alt="avatar" />
        <Link to={"/upload"} className="header__upload-link">
          <Btn icon={iconUpload} btnText="UPLOAD" />
        </Link>
      </div>
    </div>
  );
}

export default Header;


