const isDateInFuture = (date: Date) => {
  const todayDate = new Date();
  const userDate = new Date(date);

  return userDate.getTime() > todayDate.getTime();
};

export default isDateInFuture;
