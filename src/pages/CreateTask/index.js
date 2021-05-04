import { Fragment } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Topbar } from "../../components/Topbar";
import Select from "react-select";
import DatePicker from "react-date-picker";
import { useForm, Controller } from "react-hook-form";
import { Textarea, LabelError } from "./styles";

const USERS = [
  { value: 1, label: "Juan" },
  { value: 2, label: "Luis" },
  { value: 3, label: "Maria" },
  { value: 4, label: "Jose" },
  { value: 5, label: "Baltasar" },
  { value: 6, label: "Gaspar" },
];

export const CreateTask = ({ title }) => {
  
  const {
    register,
    control,
    handleSubmit,
    formState: {
      errors
    },
  } = useForm();

  const onSubmitCreate = (data) => {
    console.log("data form", data);
  };

  return (
    <Fragment>
      <Topbar title={title} />
      <form onSubmit={handleSubmit(onSubmitCreate)}>
        <Input register={register}  name="taskTitle" label="Task title" type="text" placeholder="Enter task title" />
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
          <Controller
            name="collaborators"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                placeholder="Select collaborators"
                options={USERS}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="dueDateTask"
            control={control}
            defaultValue={new Date()}
            render={({ field }) => (
              <DatePicker {...field} locale="en-EN" format="dd-MM-yy" />
            )}
          />
        </div>
        <div>
          <label>Description:</label>
          <div>
            <Textarea 
              {...register("description", { required: true } )} 
              rows="3"
              errors={ errors.description }
            />
          </div>
          <LabelError>{ errors.description && 'field required' }</LabelError>
        </div>
        <div>
          <Button type="submit" text="Create" />
        </div>
      </form>
    </Fragment>
  );
};
