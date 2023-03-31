
import React, { useState } from "react";

function WeekSchedule() {
    const [events, setEvents] = useState([
        {
            name: 'ห้อง1',
            day: 'mon',
            start: 'h08',
            end: 'h20',
            className: 'color'
        },
        {
            name: 'ห้อง2',
            day: 'wed',
            start: 'h10',
            end: 'h19',
            className: 'color'
        },
        {
            name: 'ห้อง3',
            day: 'fri',
            start: 'h16',
            end: 'h23',
            className: 'color'
        },
        {
            name: 'ห้อง2',
            day: 'tue',
            start: 'h18',
            end: 'h20',
            className: 'color'
        },
    ]);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const hours = [
        '0:00 ', '01:00 ', '02:00 ', '03:00 ', '04:00 ',
        '05:00 ', '06:00 ', '07:00 ', '08:00 ', '09:00 ',
        '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ',
        '15:00 ', '16:00 ', '17:00 ', '18:00 ', '19:00 ',
        '20:00 ', '21:00 ', '22:00 ', '23:00 '
    ];

    return (
        <div className='body'>
            <div className="calendar weekly-byhour">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`event ${event.className}`}
                        style={{
                            gridColumn: `${event.day} / span 1`,
                            gridRow: `${event.start} / ${event.end}`
                        }}
                    >
                        {event.name}
                    </div>
                ))}

                {days.map((day, index) => (
                    <div key={index} className={`day ${day.toLowerCase()}`}>
                        {day}
                    </div>
                ))}

                {hours.map((hour, index) => (
                    <div key={index} className={`time h${index.toString().padStart(2, '0')}`}>
                        {hour}
                    </div>
                ))}

                {[...Array(139)].map((_, i) => (
                    <li key={`cell-${i}`} />              
                ))}
                <div className="corner"></div>
            </div>
        </div>

    );
};


export { WeekSchedule };
