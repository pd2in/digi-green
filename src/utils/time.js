function getFormattedTime(object) {
  const { hour, minute } = object;
  const formattedTime = `${String(hour).padStart(2, '0')}:${String(
    minute
  ).padStart(2, '0')}`;
  return formattedTime;
}

export default getFormattedTime;
