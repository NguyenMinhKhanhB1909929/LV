export const timeDeadline = (time) => {
  const day = Math.floor(time / 86400000);
  time = time % 86400000;
  const hours = Math.floor(time / 3600000);
  if (day < 0) return "Hết hạn";

  return `${day} ngày ${hours} giờ`;
};
