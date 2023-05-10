import { ProfileCard, ProfileName, ProfilePicture, ProfileBio } from './components';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <ProfileCard>
        <ProfilePicture
          src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
          alt="Profile"
        />
        <ProfileName name="John Doe" />
        <ProfileBio bio="Software developer and tech enthusiast." />
      </ProfileCard>
    </div>
  );
}
export default App;