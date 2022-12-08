import { GoogleLogin } from "react-google-login";

const clientId =
  "975614919993-ht8pilt54vaht18rpkr4bvdsjuoj18kg.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log('LOGIN SUCCESS! Current user: ', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('LOGIN FAILED! res: ', res);
    }


  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}        
      />
    </div>
  );
}

export default Login; 
