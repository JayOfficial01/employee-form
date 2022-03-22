import React, { useState, useContext, useEffect } from "react";

import { FaUserAlt, FaTimes } from "react-icons/fa";

import EmployeeContext from "../../context/employeeContext";
import { DropDownsStyle, PopupStyle, ProfileImageStyle } from "./Popup.style";

const DropDowns = (props) => {
  const { employee, handleInput } = props;
  return (
    <DropDownsStyle>
      <article className="form-content">
        <label>Work Orders</label>
        <select
          name="workOrders"
          value={employee.workOrders}
          onChange={(e) => handleInput(e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </article>
      <article className="form-content">
        <label>Tasks</label>
        <select
          name="tasks"
          value={employee.tasks}
          onChange={(e) => handleInput(e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </article>
      <article className="form-content">
        <label>Roles</label>
        <select
          name="roles"
          value={employee.roles}
          onChange={(e) => handleInput(e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </article>
    </DropDownsStyle>
  );
};

const ProfileImage = (props) => {
  const { image, setImage, setProfileImage, profileImage } = props;

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setProfileImage(null);
    }
  }, [image]);

  return (
    <ProfileImageStyle htmlFor="user-profile">
      {profileImage ? (
        <img
          src={profileImage}
          className="preview-image"
          onClick={() => setImage(null)}
          alt="profile Image"
        />
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            id="user-profile"
          />

          <span className="icon">
            <FaUserAlt />
          </span>
        </>
      )}
    </ProfileImageStyle>
  );
};

function Popup(props) {
  const { popupStatus, handlePopup } = props;
  const [image, setImage] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    workOrders: 0,
    tasks: 0,
    roles: 0,
  });
  const { addEmployee, updateEmployee, handleEmployeeUpdate } =
    useContext(EmployeeContext);

  useEffect(() => {
    if (updateEmployee.edit === true) {
      setEmployee({
        name: updateEmployee.item.name,
        designation: updateEmployee.item.designation,
        workOrders: updateEmployee.item.workOrders,
        tasks: updateEmployee.item.tasks,
        roles: updateEmployee.item.roles,
      });

      setProfileImage(updateEmployee.item.profileImage);
    }
  }, [updateEmployee]);

  const handleInput = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
      profileImage,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployee({
      name: "",
      designation: "",
      workOrders: 0,
      tasks: 0,
      roles: 0,
    });

    if (updateEmployee.edit === true) {
      handleEmployeeUpdate(updateEmployee.item.id, employee);
      updateEmployee.edit = false;
    } else {
      addEmployee(employee);
      setImage(null);
    }
  };

  const disablePopupChanges = () => {
    setEmployee({
      name: "",
      designation: "",
      workOrders: 0,
      tasks: 0,
      roles: 0,
    });

    setProfileImage(null);
    setImage(null);
  };

  return (
    <PopupStyle show={popupStatus}>
      <article className="form-wrapper">
        <button
          className="cross-btn"
          onClick={() => {
            disablePopupChanges();
            handlePopup();
          }}
        >
          <FaTimes />
        </button>
        <form onSubmit={handleSubmit}>
          <ProfileImage
            image={image}
            setImage={setImage}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
          />

          <article className="form-content">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={employee.name}
              onChange={(e) => handleInput(e)}
            />
          </article>

          <article className="form-content">
            <label>Designation</label>
            <input
              type="text"
              placeholder="Designation"
              name="designation"
              value={employee.designation}
              onChange={(e) => handleInput(e)}
            />
          </article>

          <DropDowns employee={employee} handleInput={handleInput} />

          <button className="create-btn" onClick={handlePopup}>
            Create
          </button>
        </form>
      </article>
    </PopupStyle>
  );
}

export default Popup;
