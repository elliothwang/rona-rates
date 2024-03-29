import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { refreshTokenSetup } from '../../utilities/refreshToken';

const clientId =
  '533247774785-7t4n50gqkt8mp67k9t90g8jnnqljbvub.apps.googleusercontent.com';

function GoogleIn({ auth, setUser, setError, closeAuthPopUp }) {
  function onSuccess(res) {
    setUser(res.profileObj);
    refreshTokenSetup(res);
    closeAuthPopUp();
  }

  function onFailure(res) {
    console.log('[Login Failure] res:', res);
    setError('Log In Failed - Please Try Again');
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="googleAuth">
        <GoogleLogin
          buttonText={`${auth} with Google`}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleIn;
