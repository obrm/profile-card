import React from 'react';

import { ProfileBio, ProfileName, ProfilePicture } from '..';

import styles from './ProfileCard.module.scss';

const ProfileCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <ProfilePicture
        src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
        alt="Profile"
      />
      <ProfileName name="John Doe" />
      <ProfileBio bio="Software developer and tech enthusiast." />
    </div>
  );
};

export default ProfileCard;
