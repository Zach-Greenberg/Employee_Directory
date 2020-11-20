import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Employee List directory. Search and Organize the Employee database</p>
            </div>
        </div>
    )
}

export default Header;