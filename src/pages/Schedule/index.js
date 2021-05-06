import { Fragment, useEffect, useState } from "react";
import { Topbar } from "../../components/Topbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { SCREEN_VIEWPORT } from "../../constants/ViewPort";
import { useScreenViewPort } from "../../hooks/useScreenViewPort";
import { FormGroup } from "../../globalStyles";
import { Input } from "../../components/Input";
import { FaSearch } from 'react-icons/fa';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Tarea 1",
    start: new Date(),
    end: new Date(),
  },
];

const CALENDAR_VIEW_MODE = {
  DAY: "day",
  WEEK: "week",
};


export const Schedule = ({ title }) => {
  const [calendarDefaultView, setCalendarDefaultView] = useState(CALENDAR_VIEW_MODE.DAY);
  const [loading, setLoading] = useState(true);
  const { screenViewPort } = useScreenViewPort();
  
  useEffect(() => {
    const boostrap = async () => {
      await setLoading(true);
      if (screenViewPort) {
        await setCalendarDefaultView(
          screenViewPort === SCREEN_VIEWPORT.DESKTOP 
            ? CALENDAR_VIEW_MODE.WEEK 
            : CALENDAR_VIEW_MODE.DAY
        );
        await setLoading(false);
      }
    }
    boostrap();
  }, [screenViewPort]);

  return (
    <Fragment>
      <Topbar title={title} />
      <FormGroup>
        <Input type="text" placeholder="search..." icon={FaSearch} />
      </FormGroup>
      <br />
      {!loading && (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "70vh" }}
          defaultView={calendarDefaultView}
          views={["month", "week", "day"]}
        />
      )}
    </Fragment>
  );
};
