import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [popupStatus, setPopupStatus] = useState(false); // for popUp
  const [updateEmployee, setUpdateEmployee] = useState({
    item: [],
    edit: false,
  });

  const api = "http://localhost:5000/employees";

  useEffect(() => {
    getEmployeeData();
  }, [employees]);

  const getEmployeeData = async () => {
    await axios
      .get(api)
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete Employee

  const handleDelete = async (id) => {
    if (window.confirm("Are You Sure You want to delete this employee?")) {
      await axios.delete(`${api}/${id}`);
    }
  };

  //Add Employee

  const addEmployee = async (newEmployee) => {
    await axios.post(api, {
      profileImage: newEmployee.profileImage,
      name: newEmployee.name,
      designation: newEmployee.designation,
      workOrders: newEmployee.workOrders,
      tasks: newEmployee.tasks,
      roles: newEmployee.roles,
    });
  };

  //Get Employee

  const getEmployee = (employee) => {
    setUpdateEmployee({
      item: employee,
      edit: true,
    });
  };

  // Update Employee

  const handleEmployeeUpdate = async (id, employee) => {
    console.log(employee);

    await axios.put(`${api}/${id}`, {
      profileImage: employee.profileImage,
      name: employee.name,
      designation: employee.designation,
      workOrders: employee.workOrders,
      tasks: employee.tasks,
      roles: employee.roles,
    });
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
