const getRetirementTime = (joiningdate, age) => {
  const joindate = new Date(joiningdate);
  const retirementTime = joindate.setFullYear(
    joindate.getFullYear() + (65 - age)
  );
  const retire = new Date(retirementTime);
  const today = new Date();
  const time_difference = Math.abs(retire - today);

  let day = Math.ceil(time_difference / (1000 * 60 * 60 * 24)) - 1;
  const totalDays = day;
  const year = Math.floor(day / 365);
  day %= 365;
  const month = Math.floor(day / 30);
  day %= 30;

  return { day, month, year, totalDays };
};

export default getRetirementTime;
