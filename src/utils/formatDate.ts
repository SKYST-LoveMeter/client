export function formatDate(createdAt: string, daysBefore: number = 0) {
  const options = { month: "long", day: "numeric" };
  const date = new Date(createdAt);

  // 현재 날짜에서 daysBefore를 뺀 날짜를 구합니다.
  date.setDate(date.getDate() - daysBefore);

  return date.toLocaleDateString("ko-KR", options);
}
