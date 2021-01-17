import Home from "./pages/home"
import User from './pages/user'
import Music from './pages/music'
import Login from './pages/login'
import LoginByPhone from './pages/login/pages/loginbyphone'

export const RouterConfig = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/music',
    component: Music,
  },
  {
    path: '/login',
    component: Login,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom'
    }
  },
  {
    path: '/loginbyphone',
    component: LoginByPhone,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  }
];