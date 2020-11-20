import React from "react";
import "./Table.css";


function TableHeader(props) {
    return (
        <>
          <thead className="tableHead">
            <tr>
              <th scope="col">Photo</th>
              <th scope="col" className="hover">Employee Name <i className="fas fa-sort" onClick={() => props.handleSortClick()}></i>
              </th>
              <th scope="col"className="hover">Telephone No. <i className="fas fa-sort" onClick={() => props.handleSortClickPhone()}></i></th>
              <th scope="col" className="hover">Email Address <i className="fas fa-sort" onClick={() => props.handleSortClickEmail()}></i></th>
              <th scope="col" className="hover">Birthday <i className="fas fa-sort" onClick={() => props.handleSortClickBday()}></i></th>
            </tr>
          </thead>
        </>
    )
}

export default TableHeader;