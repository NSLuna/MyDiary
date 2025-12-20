function RightBookmark() {
  const months = [
    "JAN","FEB","MAR","APR","MAY","JUN",
    "JUL","AUG","SEP","OCT","NOV","DEC"
  ];

  return (
    <aside className="right-bookmark">
      <div className="month-tabs">
        {months.map(month => (
          <div key={month} className="month-tab">
            {month}
          </div>
        ))}
      </div>

      <div className="bookmark-divider" />

      <div className="settings-tab">
        ⚙
      </div>
    </aside>
  );
}

export default RightBookmark;
