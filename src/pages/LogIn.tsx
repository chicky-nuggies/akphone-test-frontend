import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  // const signOutRedirect = () => {
  //   const clientId = "1l8p4kqq5avkf0dtf8ur64e68l";
  //   const logoutUri = "http://localhost:5173/login";
  //   const cognitoDomain =
  //     "https://ap-southeast-5ijo7l0om1.auth.ap-southeast-5.amazoncognito.com";
  //   window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
  //     logoutUri
  //   )}`;
  // };

  // if (auth.isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (auth.error) {
  //   return <div>Encountering error... {auth.error.message}</div>;
  // }

  if (auth.isAuthenticated) {
    navigate("/", { replace: true });
    // return (
    //   <div>
    //     <pre> Hello: {auth.user?.profile.email} </pre>
    //     <pre> ID Token: {auth.user?.id_token} </pre>
    //     <pre> Access Token: {auth.user?.access_token} </pre>
    //     <pre> Refresh Token: {auth.user?.refresh_token} </pre>

    //     <button onClick={() => signOutRedirect()}>Sign out</button>
    //   </div>
    // );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      {/* <button onClick={() => signOutRedirect()}>Sign out</button> */}
    </div>
  );
};

export default LogIn;
