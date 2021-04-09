import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Splash } from './Splash';
import { Signup } from './Signup';
import { Signin } from './Signin';
import { NotFound } from './NotFound';

export const NavigationApp = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Splash}  />
            <Route path="/signup" component={Signup}  />
            <Route path="/signin" component={Signin}  />
            <Route path="*" component={NotFound}  />
        </Switch>
    </Router>
)