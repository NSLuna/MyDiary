import { useEffect, useState } from "react";

function LeftSidebar() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks/week/")
      .then(res => {
        if (!res.ok) {
          throw new Error("네트워크 응답 오류");
        }
        return res.json();
      })
      .then(data => {
        setTasks(data);
      })
      .catch(err => {
        console.error("Weekly Task 불러오기 실패:", err);
      });
  }, []);

  return (
    <aside className="left-sidebar">
      
      {/* 주 정보 */}
      <div className="week-header">
        <div className="week-number">Week 12</div>
        <div className="today-date">2025.12.18</div>
      </div>

      {/* 미니 캘린더 */}
      <div className="mini-calendar">
        <div className="month-label">January 2026</div>
        <div className="calendar-grid">
          {["S","M","T","W","T","F","S"].map((d, idx) => (
            <div key={`${d}-${idx}`} className="calendar-day">
              {d}
            </div>
          ))}
        </div>
      </div>

      {/* 기분 그래프 */}
      <div className="mood-graph">
        <div className="section-title">Mood Graph</div>
        <div className="graph-placeholder">[Graph]</div>
      </div>

      {/* 우선순위 */}
      <div className="priorities">
        <div className="section-title">Priorities</div>
        <ul>
          <li>병원 일정</li>
          <li>프로젝트 마감</li>
        </ul>
      </div>

      {/* 핵심 체크리스트 (This Week) */}
      <div className="weekly-checklist">
        <div className="section-title">This Week</div>
        <ul>
          {tasks.length === 0 && (
            <li className="empty-task">이번 주 할 일이 없어요</li>
          )}

          {tasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.is_done}
                readOnly
              />
              <span>{task.content}</span>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
}

export default LeftSidebar;
