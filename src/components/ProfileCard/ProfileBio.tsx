import React from 'react';

interface ProfileBioProps {
  bio: string;
}

const ProfileBio: React.FC<ProfileBioProps> = ({ bio }) => {
  return <p className="profile-bio">{bio}</p>;
};

export default ProfileBio;
