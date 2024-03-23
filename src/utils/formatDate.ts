export function formatDate(createdAt: string) {
  const options = { month: "long", day: "numeric" };
  const date = new Date(createdAt);
  return date.toLocaleDateString("ko-KR", options);
}
