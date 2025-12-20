import LeftSidebar from "./LeftSidebar";
import RightBookmark from "./RightBookmark";

function MainLayout() {
  return (
    <div className="layout">
      <LeftSidebar />

      <main className="main-content">
        <div className="paper">
          <h2 className="section-title">Weekly Overview</h2>

          <div className="weekly-overview">
            {[
              { day: "SUN", date: 4 },
              { day: "MON", date: 5 },
              { day: "TUE", date: 6 },
              { day: "WED", date: 7 },
              { day: "THU", date: 8 },
              { day: "FRI", date: 9 },
              { day: "SAT", date: 10 },
            ].map(({ day, date }) => (
              <div key={day} className="day-row">
                
                {/* 왼쪽 날짜 컬럼 */}
                <div className="day-date">
                  <div className="date-number">{date}</div>
                  <div className="day-name">{day}</div>
                </div>

                {/* 오른쪽 내용 컬럼 */}
                <div className="day-tasks">
                  <div className="task-line"></div>
                  <div className="task-line"></div>
                  <div className="task-line"></div>
                </div>

              </div>
            ))}
          </div>
          
        <div className="ai-entry">
          <span className="ai-icon">💬</span>
          <span className="ai-label">AI와 대화하기</span>
        </div>


        </div>
      </main>

      <RightBookmark />
    </div>
  );
}

export default MainLayout;
