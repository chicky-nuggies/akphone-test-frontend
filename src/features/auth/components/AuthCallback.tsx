import { useAuth } from "react-oidc-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { setAuthToken } from "../../../services/api";

const AuthCallback = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      // Inject access token to api instance
      setAuthToken(auth.user.access_token);
      // Redirect to index
      navigate("/", { replace: true });
    } else if (auth.error) {
      // Handle authentication error
      navigate("/login?error=auth_failed", { replace: true });
    }
  }, [auth.isAuthenticated, auth.error, navigate]);

  if (auth.isLoading) {
    return (
      <div>
        <p>Processing authentication...</p>
      </div>
    );
  }

  if (auth.error) {
    return (
      <div>
        <p>Authentication failed. Redirecting...</p>
      </div>
    );
  }

  return (
    <div>
      <p>Authentication successful. Redirecting...</p>
    </div>
  );
};

export default AuthCallback;
