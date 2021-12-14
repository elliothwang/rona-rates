import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utilities/refreshToken';

const clientId =
  '533247774785-7t4n50gqkt8mp67k9t90g8jnnqljbvub.apps.googleusercontent.com';

function GoogleIn({ auth, user, setUser, closeAuthPopUp }) {
  function onSuccess(res) {
    setUser(res.profileObj);

    refreshTokenSetup(res);
    user && closeAuthPopUp();
  }

  function onFailure(res) {
    console.log('[Login Failure] res:', res);
    user && closeAuthPopUp();
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText={`${auth} with Google`}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleIn;
