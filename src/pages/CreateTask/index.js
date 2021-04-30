import { Fragment, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Topbar } from "../../components/Topbar";
import Select from "react-select";
import DatePicker from "react-date-picker";

const USERS = [
  { value: 1, label: "Juan" },
  { value: 2, label: "Luis" },
  { value: 3, label: "Maria" },
  { value: 4, label: "Jose" },
  { value: 5, label: "Baltasar" },
  { value: 6, label: "Gaspar" },
];

export const CreateTask = ({ title }) => {
  const [dueDateTask, setDueDateTask] = useState(new Date());
  const [description, setDescription] = useState('');

  return (
    <Fragment>
      <Topbar title={title} />
      <form>
        <Input label="Task title" type="text" placeholder="Enter task title" />
        <div>
          <label>Responsible </label>
          <Select placeholder="Select responsible" options={USERS} />
        </div>
        <div>
          <label>Collaborators</label>
          <Select isMulti placeholder="Select collaborators" options={USERS} />
        </div>
        <div>
          <DatePicker locale="en-EN" format="dd-MM-yy" value={dueDateTask} onChange={setDueDateTask} />
        </div>
        <div>
          <label>Description:</label>
          <div>
            <textarea onChange={ (e) => setDescription(e.target.value)  } value={description} rows="3"></textarea>
            {description}
          </div>
        </div>
        <div>
          <Button text="Create" />
        </div>
      </form>
    </Fragment>
  );
};
