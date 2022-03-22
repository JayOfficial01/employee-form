import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import Card from "../../components/Card/Card";

import { AddEmployeeStyle, UserListStyle } from "./UsersList.style";
import EmployeeContext from "../../context/employeeContext";
import Popup from "../../components/Popup/Popup";

const AddEmployee = (props) => {
  const { handlePopup } = props;
  return (
    <AddEmployeeStyle onClick={handlePopup}>
      <span className="icon">
        <FaPlus />
      </span>

      <p className="text">Add New</p>
    </AddEmployeeStyle>
  );
};

function UsersList() {
  const { employees, handleDelete, popupStatus, handlePopup } =
    useContext(EmployeeContext);

  return (
    <UserListStyle>
      <Popup popupStatus={popupStatus} handlePopup={handlePopup} />
      <AddEmployee handlePopup={handlePopup} />

      {employees.map((employee) => (
        <Card
          {...employee}
          key={employee.id}
          handleDelete={handleDelete}
          handlePopup={handlePopup}
        />
      ))}
    </UserListStyle>
  );
}

export default UsersList;
