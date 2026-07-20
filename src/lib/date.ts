export function getTodayInputValue() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localDate = new Date(now.getTime() - offset * 60_000);

  return localDate.toISOString().split("T")[0];
}

export function subscribeToLocalDate(onDateChange: () => void) {
  const intervalId = window.setInterval(onDateChange, 60_000);
  return () => window.clearInterval(intervalId);
}

export const getServerDateInputValue = () => "";
