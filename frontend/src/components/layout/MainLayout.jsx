import LeftSidebar from "./LeftSidebar";
import RightBookmark from "./RightBookmark";

function MainLayout() {
  return (
    <div className="layout">
      <LeftSidebar />
      <main className="main-content">
        <h2>Weekly Overview</h2>
      </main>
      <RightBookmark />
    </div>
  );
}

export default MainLayout;
