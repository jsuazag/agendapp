import { Fragment } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Topbar } from "../../components/Topbar";

const USERS = ["Juan", "Luis", "Maria", "Jose", "Baltasar"];

export const CreateTask = ({ title }) => (
  <Fragment>
    <Topbar title={title} />
    <form>
      <Input label="Task title" type="text" placeholder="Enter task title" />
      <div>
        <label>Responsible </label>
        <select>
          {USERS.map((item, key) => (
            <option key={key}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Description:</label>
        <textarea rows="3"></textarea>
      </div>
      <div>
        <Button text="Create" />
      </div>
    </form>
  </Fragment>
);
