import { Navigate } from "react-router-dom";

export function isAuthenticated() {
  if (typeof window == 'undefined') return false;
  if (typeof window !== 'undefined' && localStorage.getItem('token') !== 'undefined') {
    return localStorage.getItem('token') || sessionStorage.getItem('token')
  };
};

// export function getAuthUser() {
//   if (typeof window == 'undefined') return false;
//   if (typeof window !== 'undefined' && localStorage.getItem('token') !== 'undefined') {
//     return JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'))
//   };
// };

export function AuthUserRoute({ children }) {
  let auth = isAuthenticated();
  return auth ? <Navigate to='/' /> : children;
}