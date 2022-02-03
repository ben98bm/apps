import React, { useRef, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from "./components/addEventModal";
import { Button } from "react-bootstrap";
import axios from "axios";
import moment from "moment";


export default function () {

  const [modalOPen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title
    });
  };

  async function handleEventAdd(data) {
    console.log(data.event);
    await axios.post('/api/calendar/create-event', data.event);
  }

  async function handleDatesSet(data) {
    const response = await axios.get(
    "/api/calendar/get-events?start="  +
    moment(data.start).toISOString() +
    "&end=" + 
    moment(data.end).toISOString());
    setEvents(response.data);
  }
  return(
    <section>
      <Button onClick={() => setModalOpen(true)}>Add Event</Button>

        <div style={{position: "relative", zIndex: 0}}>
            <FullCalendar
              ref={calendarRef}
              events={events}
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              eventAdd={(event) => handleEventAdd(event)}
              datesSet={(date) => handleDatesSet(date)}
            />
        </div>

      <AddEventModal 
      isOpen={modalOPen} 
      onClose={() => setModalOpen(false)} 
      onEventAdded={event => onEventAdded(event)} 
      />
    </section>
  )
}