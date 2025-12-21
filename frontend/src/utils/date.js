export function getCurrentWeek() {
  const today = new Date();
  const day = today.getDay(); // 0(SUN) ~ 6(SAT)

  // 월요일 기준
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((day + 6) % 7));

  return Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);

    return {
      date, // Date 객체
      dateStr: date.toISOString().slice(0, 10), // YYYY-MM-DD
      dayLabel: ["MON","TUE","WED","THU","FRI","SAT","SUN"][i],
    };
  });
}
