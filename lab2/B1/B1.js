const events = [
    [5, 'Goal'],
    [23, 'Substitution'],
    [34, 'Yellow Card'],
    [64, 'Red Card'],
    [64, 'Yellow Card'], 
    [84, 'Goal'],
  ];
  
  // 1. Tạo mảng sự kiện không trùng nhau
  const uniqueEvents = [...new Set(events.map((event) => event[1]))];
  
  // 2. Xóa sự kiện không đúng (Yellow Card ở phút 64)
  const correctedEvents = events.filter((event) => !(event[0] === 64 && event[1] === 'Yellow Card'));
  
  // 3. In ra console số sự kiện và trung bình mỗi 9 phút
  const totalEvents = events.length;
  const averageEvents = totalEvents / 90; // Mỗi trận đấu có 90 phút
  console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${Math.round(averageEvents)} phút.`);
  
  // 4. Lặp toàn bộ mảng sự kiện và in ra màn hình
  correctedEvents.forEach((event) => {
    const [minute, action] = event;
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    const adjustedMinute = minute <= 45 ? minute : minute - 45;
    console.log(`[${half}] ${adjustedMinute}: ${action}`);
  });
  