import React from "react";
import { useState } from "react";

function EditProfileForm({ currentUser,Switch }) {
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState(" ");
  return (
    <div>
      <h1 className="edit-profile-title">Edit Your Profile</h1>
      <h2 className="edit-profile-title-2">Public information</h2>
      <form className="edit-profile-form">
        <label htmlFor="name">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About Me</h3>
          <textarea
            value={about}
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched Tags</h3>
          <p>Add tags separated by 1 space</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Save profile"
          className="'user-submit-btn"
        />
        <button type="button" className="user-cancel-btn" onClick={Switch(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditProfileForm;
