import { useState, useEffect } from "react";
import { apiService } from "../services/api";
import { Header } from "../components/Header";
import { UserCard } from "../components/UserCard";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";
import type { User } from "../types/api";
import "./Index.css";

import { useAuth } from "react-oidc-context";

function Index() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "1l8p4kqq5avkf0dtf8ur64e68l";
    const logoutUri = "http://localhost:5173/login";
    const cognitoDomain =
      "https://ap-southeast-5ijo7l0om1.auth.ap-southeast-5.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
    auth.removeUser();
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedUsers = await apiService.getUsers();
      setUsers(fetchedUsers);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to fetch users. Please make sure the API server is running on http://localhost:8000"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(auth);
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <Header userCount={0} />
        <main className="app-main">
          <Loading />
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header userCount={0} />
        <main className="app-main">
          <ErrorMessage message={error} onRetry={fetchUsers} />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Header userCount={users.length} />
      <main className="app-main">
        <div className="users-container">
          <div className="users-header">
            <h2>All Users</h2>
            <button className="refresh-button" onClick={fetchUsers}>
              Refresh my balls hehe
            </button>
            <button onClick={() => signOutRedirect()}>Sign out</button>
            <h1 className="health-indicator healthy">
              Group:{" "}
              {Array.isArray(auth.user?.profile["cognito:groups"])
                ? auth.user?.profile["cognito:groups"][0]
                : ""}
            </h1>
            <div className="health-indicator healthy">
              <p> Hello: {auth.user?.profile.email} </p>
              <p> ID Token: {auth.user?.id_token} </p>
              {/* <p> Access Token: {auth.user?.access_token} </p> */}
              {/* <p> Refresh Token: {auth.user?.refresh_token} </p> */}
            </div>
          </div>

          <div className="users-grid">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          {users.length === 0 && (
            <div className="empty-state">
              <p>No users found.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Index;
