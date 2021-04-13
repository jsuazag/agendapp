import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Splash } from './Splash';
import { Signup } from './Signup';
import { Signin } from './Signin';
import { NotFound } from './NotFound';
import { Home } from './Home';
import { Schedule } from './Schedule';
import { CreateTask } from './CreateTask';
import { TaskDetail } from './TaskDetail';

export const NavigationApp = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Splash}  />
            <Route path="/signup" component={Signup}  />
            <Route path="/signin" component={Signin}  />
            <Route path="/home" component={Home}  />
            <Route path="/schedule" component={Schedule}  />
            <Route path="/create" component={CreateTask}  />
            <Route path="/detail" component={TaskDetail}  />
            <Route path="*" component={NotFound}  />
        </Switch>
    </Router>
)