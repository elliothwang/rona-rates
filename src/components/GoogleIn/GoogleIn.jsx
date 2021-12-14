import { GoogleLogin } from 'react-google-login';

const clientId =
  '533247774785-7t4n50gqkt8mp67k9t90g8jnnqljbvub.apps.googleusercontent.com';

function GoogleIn({ auth, setUser, closeAuthPopUp }) {
  function onSuccess(res) {
    setUser(res.profileObj);
    closeAuthPopUp();
  }

  function onFailure(res) {
    console.log('[Login Failure] res:', res);
    closeAuthPopUp();
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText={`${auth} with Google`}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default GoogleIn;
