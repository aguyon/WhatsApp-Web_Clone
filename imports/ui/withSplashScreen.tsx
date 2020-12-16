import React from 'react';
import { useHistory } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';

import { ThemeContext } from '../context/ThemeContext';

import StyledSplashScreen from './elements/StyledSplashScreen';

const withSplashScreen = (WrappedComponent: React.FC) => (): JSX.Element => {
  const { themeMode } = React.useContext(ThemeContext);
  const history = useHistory();

  const [loading, setLoading] = React.useState(true);

  const isAuthenticated = localStorage.getItem('Meteor.loginToken');

  React.useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setLoading(false);
        history.replace('/login');
      }, 1500);
    }
  }, []);

  return loading ? (
    <StyledSplashScreen>
      <img
        src={
          themeMode === 'light'
            ? './images/whatsapp-bg-light.jpg'
            : './images/whatsapp-bg-dark.jpg'
        }
        alt="logo"
        className="loader--image"
      />
      <h1 className="loader--message">Chargement...</h1>
      <div style={{ marginTop: '200px' }}>
        <BarLoader width={500} height={4} color="#009688" loading={loading} />
      </div>
    </StyledSplashScreen>
  ) : (
    <WrappedComponent />
  );
};

export default withSplashScreen;
