export const timeFormat = (dateString: string): string => {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.format(date);
};
