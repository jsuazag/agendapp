import { Fragment, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Topbar } from "../../components/Topbar";
import Select from "react-select";
import DatePicker from "react-date-picker";
import { useForm, Controller } from "react-hook-form";

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
  const {
    register,
    control,
    handleSubmit,
    formState: {
      errors: {},
    },
  } = useForm();

  const onSubmitCreate = (data) => {
    console.log("data form", data);
  };

  return (
    <Fragment>
      <Topbar title={title} />
      <form onSubmit={handleSubmit(onSubmitCreate)}>
        <Input label="Task title" type="text" placeholder="Enter task title" />
        <div>
          <label>Responsible</label>
          <Controller
            name="responsible"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select responsible"
                options={USERS}
              />
            )}
          />
        </div>
        <div>
          <label>Collaborators</label>
          <Select isMulti placeholder="Select collaborators" options={USERS} />
        </div>
        <div>
          <DatePicker
            locale="en-EN"
            format="dd-MM-yy"
            value={dueDateTask}
            onChange={setDueDateTask}
          />
        </div>
        <div>
          <label>Description:</label>
          <div>
            <textarea {...register("description")} rows="3"></textarea>
          </div>
        </div>
        <div>
          <Button type="submit" text="Create" />
        </div>
      </form>
    </Fragment>
  );
};
