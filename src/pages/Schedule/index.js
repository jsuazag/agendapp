import { Fragment, useEffect, useState } from "react";
import { Topbar } from "../../components/Topbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Tarea 1",
    start: new Date(),
    end: new Date(),
  },
];

const CALENDAR_VIEW_MODE = {
  DAY: 'day',
  WEEK: 'week'
}

export const Schedule = ({ title }) => {
  const [calendarDefaultView, setCalendarDefaultView] = useState(CALENDAR_VIEW_MODE.DAY);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const desktop = window.innerWidth > 768;
    setCalendarDefaultView(desktop ? CALENDAR_VIEW_MODE.WEEK : CALENDAR_VIEW_MODE.DAY);
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Topbar title={title} />
      {
        !loading && (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "70vh" }}
            defaultView={calendarDefaultView}
            views={["month", "week", "day"]}
          />
        )
      }
      
    </Fragment>
  );
};
