import React, { useState } from 'react';

const EditProfile = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    email: user.email,
    first: user.first,
    last: user.last,
    course_num: user.course_num,
    group: user.group,
    avatar: user.avatar
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form className="edit-profile" onSubmit={handleSubmit}>
      <div className="edit-avatar">
        <img src={formData.avatar} alt="Avatar" className="edit-avatar-img" />
        <input
          type="file"
          name="avatar"
          onChange={handleAvatarChange}
          accept="image/*"
        />
      </div>
      <div className="edit-info">
        <p>Email: {user.email}</p>
        <input
          type="text"
          name="first"
          value={formData.first}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="last"
          value={formData.last}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="course_num"
          value={formData.course_num}
          onChange={handleChange}
          placeholder="Course Number"
        />
        <input
          type="text"
          name="group"
          value={formData.group}
          onChange={handleChange}
          placeholder="Group"
        />
        <button type="submit" className="edit-button">Update</button>
      </div>
    </form>
  );
};

export default EditProfile;