import React, { useState } from 'react';
import Profile from './Profile';
import EditProfile from './EditProfile';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    email: "savely.crylov@yandex.ru",
    hashpwd: "hashed_password",
    first: "Savelii",
    last: "Cry_love",
    course_num: "2",
    group: "ИБ-21",
    avatar: "https://via.placeholder.com/150"
  });
  const [editMode, setEditMode] = useState(false);

  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
    setEditMode(false);
  };

  return (
    <div className="user-profile-container">
      <div className="profile-container">
        <label className="toggle-switch">
          <input type="checkbox" checked={editMode} onChange={() => setEditMode(!editMode)} />
          <span className="slider">
            <span className="slider-text">{editMode ? "Edit Profile" : "Show Profile"}</span>
          </span>
        </label>
        {editMode ? (
          <EditProfile user={user} onUpdate={handleUpdate} />
        ) : (
          <Profile user={user} />
        )}
      </div>
    </div>
  );
};

export default UserProfile;