import React, { Fragment, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Splash } from "./Splash";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
import { NotFound } from "./NotFound";
import { Menu } from "../components/Menu";
import { PageWrapperMenu } from "../globalStyles";
import { useSelector, useDispatch } from "react-redux";
import { autologin } from "../store";
import { Loading } from "../components/Loading";

const Home = React.lazy(() => import("./Home"));
const Schedule = React.lazy(() => import("./Schedule"));
const CreateTask = React.lazy(() => import("./CreateTask"));
const TaskDetail = React.lazy(() => import("./TaskDetail"));

const AuthenticatedUser = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("pathname", pathname);
  }, [pathname]);

  return (
    <Fragment>
      <PageWrapperMenu>{children}</PageWrapperMenu>
      <Menu pathname={pathname} />
    </Fragment>
  );
};

const NotAuthenticatedUser = ({ children }) => {
  return children;
};

export const NavigationApp = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(autologin());
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userData.splash) {
    return <Splash />;
  }

  return (
    <Router>
      {!userData.isAuth && (
        <NotAuthenticatedUser>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="*" component={NotFound} />
          </Switch>
        </NotAuthenticatedUser>
      )}

      {userData.isAuth && (
        <AuthenticatedUser>
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </AuthenticatedUser>
      )}
    </Router>
  );
};
