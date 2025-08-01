// src/pages/ProfileManagementPage.js
import React, { useEffect, useState } from 'react';
import './ProfileManagementPage.css';

const ProfileManagementPage = () => {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (!profile.first_name || !profile.last_name || !profile.email) {
      setError('❌ All fields are required.');
      return;
    }
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setMessage('✅ Profile updated successfully.');
    setError('');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const { current, newPass, confirm } = passwords;
    if (!current || !newPass || !confirm) {
      setError('❌ Please fill out all password fields.');
      return;
    }
    if (newPass !== confirm) {
      setError('❌ New passwords do not match.');
      return;
    }
    setMessage('✅ Password changed successfully');
    setError('');
    setPasswords({ current: '', newPass: '', confirm: '' });
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      {message && <div className="success-msg">{message}</div>}
      {error && <div className="error-msg">{error}</div>}

      <div className="profile-forms-wrapper">
        <form className="profile-form" onSubmit={handleSaveChanges}>
          <h3>Profile Settings</h3>
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={profile.first_name}
            onChange={handleProfileChange}
            required
          />
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={profile.last_name}
            onChange={handleProfileChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            required
          />
          <button type="submit">Save Changes</button>
        </form>

        <form className="password-form" onSubmit={handleChangePassword}>
          <h3>Password Settings</h3>
          <label>Current Password:</label>
          <input
            type="password"
            name="current"
            placeholder="Current"
            value={passwords.current}
            onChange={handlePasswordChange}
          />
          <label>New Password:</label>
          <input
            type="password"
            name="newPass"
            placeholder="New"
            value={passwords.newPass}
            onChange={handlePasswordChange}
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirm"
            placeholder="Confirm"
            value={passwords.confirm}
            onChange={handlePasswordChange}
          />
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileManagementPage;
