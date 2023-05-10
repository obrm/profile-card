import profileData from './data/profileData';

import { Profile } from './components';

import './styles/global.scss';

function App() {
  const { name, imageUrl, altText, bio } = profileData;

  return (
    <div className="App">
      <Profile
        name={name}
        imageUrl={imageUrl}
        altText={altText}
        bio={bio} />
    </div>
  );
}
export default App;