import { useEffect, useState } from "react";
import { getCurrentWeek } from "../../utils/date";

function WeeklyOverview() {
  const [week, setWeek] = useState([]);
  const [logs, setLogs] = useState({});

  useEffect(() => {
    const days = getCurrentWeek();
    setWeek(days);

    const start = days[0].dateStr;
    const end = days[6].dateStr;

    fetch(`http://127.0.0.1:8000/api/dailylogs/?start=${start}&end=${end}`)
      .then(res => res.json())
      .then(data => {
        const map = {};
        data.forEach(log => {
          map[log.date] = log;
        });
        setLogs(map);
      });
  }, []);

  return (
    <div className="weekly-overview">
        {week.map((day, idx) => (
            <div key={`${day.dateStr}-${idx}`} className="day-row">
                <div className="day-date">
                    <div className="date-number">{day.date.getDate()}</div>
                    <div className="day-name">{day.dayLabel}</div>
            </div>

            <div className="day-tasks">
                {logs[day.dateStr]?.text || (
                    <span className="empty-text">기록 없음</span>
                )}
                </div>
            </div>
        ))}
    </div>
  );
}

export default WeeklyOverview;
