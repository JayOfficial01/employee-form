import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import EmployeeContext from "../../context/employeeContext";

import {
  ProfileDetailsStyle,
  ProfileImageStyle,
  UserProfileStyle,
} from "./UserProfile.style";

const ProfileImage = (props) => {
  const { name, profileImage } = props;
  return (
    <ProfileImageStyle>
      {profileImage && (
        <picture className="image-placeholder">
          <img src={profileImage} alt={name} />
        </picture>
      )}
    </ProfileImageStyle>
  );
};

const ProfileDetails = (props) => {
  const { name, designation, workOrders, tasks, roles } = props;
  return (
    <ProfileDetailsStyle className="profile-details">
      <h1 className="name">{name}</h1>
      <h3 className="designation">{designation}</h3>

      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, modi
        voluptatibus asperiores saepe minus neque ducimus est deleniti rem
        reprehenderit cum vel eum. Sed tempore aperiam debitis adipisci maxime
        ipsam, doloremque possimus beatae quisquam harum reiciendis unde!
        Accusantium, et culpa.
      </p>

      <article className="work-details">
        <h3 className="title">See my work</h3>

        <article className="counter-wrapper">
          <article className="counter">
            {workOrders && <h2 className="counter-number">{workOrders}</h2>}
            <h3 className="heading">work order</h3>
          </article>
          <article className="counter">
            {tasks && <h2 className="counter-number">{tasks}</h2>}
            <h3 className="heading">tasks</h3>
          </article>
          <article className="counter">
            {roles && <h2 className="counter-number">{roles}</h2>}
            <h3 className="heading">roles</h3>
          </article>
        </article>
      </article>
    </ProfileDetailsStyle>
  );
};

function UserProfile() {
  const employeeID = useParams();
  const { employees } = useContext(EmployeeContext);
  let employee = employees.filter((item) => item.id == employeeID.userSlug);

  return (
    <UserProfileStyle>
      <Link to="/" className="back-button">
        <FaArrowLeft />

        <span className="lebel">GO Back</span>
      </Link>

      {employee.map((employee) => (
        <>
          <ProfileDetails {...employee} />
          <ProfileImage {...employee} />
        </>
      ))}
    </UserProfileStyle>
  );
}

export default UserProfile;
