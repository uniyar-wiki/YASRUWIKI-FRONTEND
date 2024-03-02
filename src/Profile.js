import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.avatar} alt="Avatar" className="profile-avatar" />
      <div className="profile-info">
        <p>Email: {user.email}</p>
        <p>First Name: {user.first}</p>
        <p>Last Name: {user.last}</p>
        <p>Course Number: {user.course_num}</p>
        <p>Group: {user.group}</p>
        <button className="profile-button">Change Password</button>
      </div>
    </div>
  );
};

export default Profile;