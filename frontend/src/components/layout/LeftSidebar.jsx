function LeftSidebar() {
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
          {["S","M","T","W","T","F","S"].map(d => (
            <div key={d} className="calendar-day">{d}</div>
          ))}
        </div>
      </div>
      {/* 우선순위 */}
      <div className="priorities">
        <div className="section-title">Priorities</div>
        <ul>
          <li>병원 일정</li>
          <li>프로젝트 마감</li>
        </ul>
      </div>

      {/* 핵심 체크리스트 */}
      <div className="weekly-checklist">
        <div className="section-title">This Week</div>
        <ul>
          <li><input type="checkbox" /> 병원 가기</li>
          <li><input type="checkbox" /> 서류 제출</li>
          <li><input type="checkbox" /> 빨래</li>
        </ul>
      </div>

    </aside>
  );
}

export default LeftSidebar;
