import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { Splash } from "./Splash";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
import { NotFound } from "./NotFound";
import Home from "./Home";
import { Schedule } from "./Schedule";
import { CreateTask } from "./CreateTask";
import { TaskDetail } from "./TaskDetail";
import { Menu } from "../components/Menu";
import { PageWrapperMenu } from "../globalStyles";
import { useSelector } from 'react-redux';

const AuthenticatedUser = ({children}) => {

  const {pathname } = useLocation();

  useEffect(() => {
    console.log('pathname', pathname);
  }, [pathname]);

  return (
    <Fragment>
      <PageWrapperMenu>
        {children}
      </PageWrapperMenu>
      <Menu pathname={pathname} />
    </Fragment>
  )
}

const NotAuthenticatedUser = ({children}) => {
  return children;
}

export const NavigationApp = () => {

  const userData = useSelector(state => state.user);

  //const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />
  }

  return (
    <Router>
      {
        !userData.isAuth && (
          <NotAuthenticatedUser>
            <Switch>
              <Route exact path="/" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="*" component={NotFound} />
            </Switch>
          </NotAuthenticatedUser>
        )
      }

      {
        userData.isAuth && (
          <AuthenticatedUser>
            <Switch>
              <Route exact path="/">
                <Home title="Tasks" />
              </Route>
              <Route path="/schedule">
                <Schedule title="Schedules" />
              </Route>
              <Route path="/create">
                <CreateTask title="Create new task" />
              </Route>
              <Route path="/detail/:id">
                <TaskDetail title="Task detail" />
              </Route>
              <Route path="*" component={NotFound} />
            </Switch>
          </AuthenticatedUser>
        )
      }
        
    </Router>
  );
};
