import React, { useContext } from "react";
import { FaTimes, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import EmployeeContext from "../../context/employeeContext";

import { CardStyle } from "./Card.style";

function Card(props) {
  const {
    id,
    profileImage,
    name,
    designation,
    workOrders,
    tasks,
    roles,
    handleDelete,
    handlePopup,
  } = props;

  const { getEmployee } = useContext(EmployeeContext);

  return (
    <CardStyle>
      <button className="delete-button" onClick={() => handleDelete(id)}>
        <FaTimes className="cross-icon" />
      </button>

      {profileImage && (
        <picture className="user-profile-placeholder">
          <img src={profileImage} alt={name} className="user-image" />
        </picture>
      )}

      <figcaption className="profile-details">
        {name && <h2 className="name">{name}</h2>}
        {designation && <h3 className="designation">{designation}</h3>}

        <button
          className="edit"
          onClick={() => {
            handlePopup();
            getEmployee(props);
          }}
        >
          <FaUserEdit />
        </button>

        <article className="counter-wrapper">
          <article className="counter">
            <h2 className="number">{workOrders}</h2>
            <h3 className="title">work orders</h3>
          </article>
          <article className="counter">
            <h2 className="number">{tasks}</h2>
            <h3 className="title">Tasks</h3>
          </article>
          <article className="counter">
            <h2 className="number">{roles}</h2>
            <h3 className="title">Roles</h3>
          </article>
        </article>

        <Link to={`user-profile/${id}`} className="view-profile-button">
          View Profile
        </Link>
      </figcaption>
    </CardStyle>
  );
}

export default Card;
