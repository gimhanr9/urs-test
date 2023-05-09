import EditProfilePage from '../pages/edit-profile';
import LoginPage from '../pages/login';
import ProfilePage from '../pages/profile';
import RegisterPage from '../pages/register';
import SuccessPage from '../pages/success-screen';

export const routes = [
  { path: 'login', component: <LoginPage /> },
  { path: 'register', component: <RegisterPage /> },
  { path: 'success', component: <SuccessPage /> },
];

export const protectedRoutes = [
  { path: '/', component: <ProfilePage /> },
  { path: 'edit-profile', component: <EditProfilePage /> },
];
