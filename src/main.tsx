import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority:
    "https://cognito-idp.ap-southeast-5.amazonaws.com/ap-southeast-5_iJO7L0oM1",
  client_id: "1l8p4kqq5avkf0dtf8ur64e68l",
  redirect_uri: `${window.location.origin}/auth/callback`,
  response_type: "code",
  scope: "phone openid email",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
