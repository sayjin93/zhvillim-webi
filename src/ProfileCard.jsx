import React from "react";

function ProfileCard({ title, handle, image, description }) {
  // const { title, handle, image, description } = props; // Destructuring props to extract the values

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-title">{title}</div>
      <div className="card-handle">{handle}</div>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default ProfileCard;
