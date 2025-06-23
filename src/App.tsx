// import { useState, useEffect } from 'react';
// import { apiService } from './services/api';
// import { Header } from './components/Header';
// import { UserCard } from './components/UserCard';
// import { Loading } from './components/Loading';
// import { ErrorMessage } from './components/ErrorMessage';
// import type { User } from './types/api';
// import './App.css';

// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const fetchedUsers = await apiService.getUsers();
//       setUsers(fetchedUsers);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to fetch users. Please make sure the API server is running on http://localhost:8000');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   if (loading) {
//     return (
//       <div className="app">
//         <Header userCount={0} />
//         <main className="app-main">
//           <Loading />
//         </main>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="app">
//         <Header userCount={0} />
//         <main className="app-main">
//           <ErrorMessage message={error} onRetry={fetchUsers} />
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       <Header userCount={users.length} />
//       <main className="app-main">
//         <div className="users-container">
//           <div className="users-header">
//             <h2>All Users</h2>
//             <button className="refresh-button" onClick={fetchUsers}>
//               Refresh my balls hehe
//             </button>
//           </div>

//           <div className="users-grid">
//             {users.map((user) => (
//               <UserCard key={user.id} user={user} />
//             ))}
//           </div>

//           {users.length === 0 && (
//             <div className="empty-state">
//               <p>No users found.</p>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LogIn from "./pages/LogIn";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";
import AuthCallback from "./features/auth/components/AuthCallback";
import { withAuthenticationRequired } from "react-oidc-context";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          }
          // element={withAuthenticationRequired(Index)()}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
