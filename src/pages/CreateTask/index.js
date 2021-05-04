import { Fragment, useEffect } from "react";
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

  useEffect(() => {
    console.log('errors', errors);
  }, [errors?.taskTitle])

  return (
    <Fragment>
      <Topbar title={title} />
      <form onSubmit={handleSubmit(onSubmitCreate)}>
        <Input 
          register={register} 
          name="taskTitle" 
          rules={{ required: true, minLength: 6 }}
          label="Task title" 
          type="text" 
          placeholder="Enter task title" 
        />
        { errors.taskTitle?.type === 'required' && <LabelError>Field required</LabelError> }
        { errors.taskTitle?.type === 'minLength' && <LabelError>Min Length 6 characters</LabelError> }

        <div>
          <label>Responsible</label>
          <Controller
            name="responsible"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select responsible"
                options={USERS}
              />
            )}
          />
          { errors.responsible && <LabelError>Field required</LabelError> }
        </div>
        <div>
          <label>Collaborators</label>
          <Controller
            name="collaborators"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                placeholder="Select collaborators"
                options={USERS}
              />
            )}
          />
          { errors.collaborators && <LabelError>Field required</LabelError> }
        </div>
        <div>
          <Controller
            name="dueDateTask"
            control={control}
            defaultValue={new Date()}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker {...field} locale="en-EN" format="dd-MM-yy" />
            )}
          />
          { errors.dueDateTask && <LabelError>Field required</LabelError> }
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
          { errors.description && <LabelError>Field required</LabelError> }
        </div>
        <div>
          <Button type="submit" text="Create" />
        </div>
      </form>
    </Fragment>
  );
};
