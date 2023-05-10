import React from 'react';

interface ProfileNameProps {
  name: string;
}

const ProfileName: React.FC<ProfileNameProps> = ({ name }) => {
  return <h2 className="profile-name">{name}</h2>;
};

export default ProfileName;
