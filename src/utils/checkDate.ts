const isDateInFuture = (date: string) => new Date(date).getTime() > new Date().getTime();

export default isDateInFuture;
