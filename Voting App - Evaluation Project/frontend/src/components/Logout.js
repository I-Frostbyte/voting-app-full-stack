import { GoogleLogout } from "react-google-login";

const clientId =
  "975614919993-ht8pilt54vaht18rpkr4bvdsjuoj18kg.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Log out successfull!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientid={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
