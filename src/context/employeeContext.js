import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { employessData } from "../data/employessData";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(employessData);
  const [popupStatus, setPopupStatus] = useState(false); // for popUp
  const [updateEmployee, setUpdateEmployee] = useState({
    item: [],
    edit: false,
  });

  const api = "http://localhost:5000/employees";

  // Delete Employee

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure You want to delete this employee?")) {
      setEmployees(employees.filter((employee) => employee.id !== id));
    }
  };

  //Add Employee

  const addEmployee = (newEmployee) => {
    newEmployee.id = uuidv4();
    setEmployees([newEmployee, ...employees]);
  };

  //Get Employee

  const getEmployee = (employee) => {
    setUpdateEmployee({
      item: employee,
      edit: true,
    });
  };

  // Update Employee

  const handleEmployeeUpdate = (id, employee) => {
    setEmployees(
      employees.map((item) =>
        item.id === id ? { ...item, ...employee } : item
      )
    );
  };

  // handle Popup

  const handlePopup = () => {
    setPopupStatus(!popupStatus);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        popupStatus,
        updateEmployee,
        handleDelete,
        addEmployee,
        getEmployee,
        handlePopup,
        handleEmployeeUpdate,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
