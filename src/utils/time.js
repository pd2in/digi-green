function getFormattedTime({ hour, minute }) {
  return `${String(hour).padStart(2, '0')}:${String(
      minute
  ).padStart(2, '0')}`;
}

export default getFormattedTime;
