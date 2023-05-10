import React, { ReactNode } from 'react';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  children: ReactNode;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};

export default ProfileCard;
