import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { FontawesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import './UsersProfile.css'
function UserProfile() {
  const { id } = useParams();
  const user = useSelector((state) => state.usersReducer);
  const currentProfile = user.filter((user) => user.id === id)[0];
  const currentUser = useSelector((state) => state.currenUsertReducer);
  const [Switch, setSwitch] = useState(false);
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="3.5rem"
                px="3.3rem"
                py="2.6rem"
              >
                {currentProfile?.name.charAt(0).toUpperCase}
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontawesomeIcon icon={faBirthdayCake} />
                  Member for{moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result.id === id && (
              <button
                type="buton"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontawesomeIcon icon={faPen} />
                Edit Profile
              </button>
            )}
          </div>
          <>{Switch ? <EditProfileForm currentUser={currentUser} switch={setSwitch}/> : <ProfileBio currentProfile={currentProfile}/>}</>
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
