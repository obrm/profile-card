import { ProfileBio, ProfileCard, ProfileName, ProfilePicture } from '.';

interface ProfileProps {
  name: string;
  imageUrl: string;
  altText: string;
  bio: string;
}

const Profile: React.FC<ProfileProps> = ({ name, imageUrl, altText, bio }) => {
  return (
    <ProfileCard>
      <ProfilePicture src={imageUrl} alt={altText} />
      <ProfileName name={name} />
      <ProfileBio bio={bio} />
    </ProfileCard>
  );
};

export default Profile;