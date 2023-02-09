import { GoogleLogout } from '@react-oauth/google';

const clientId =
  '533247774785-7t4n50gqkt8mp67k9t90g8jnnqljbvub.apps.googleusercontent.com';

function GoogleOut({ setUser }) {
  function onSuccess() {
    setUser(null);
  }

  return (
    <div className="googleAuth">
      <GoogleLogout
        clientId={clientId}
        buttonText={`Log out`}
        onSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default GoogleOut;
