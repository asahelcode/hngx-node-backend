function getDayOfTheWeek() {
  const dayOfTheWeek = new Date().getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayOfTheWeek];
}

function getUTCTime() {
  const date = new Date();
  const utctime = date.toISOString();

  return utctime.slice(0, 19) + "Z";
}

function validatedUTC(utctime) {
  const date = new Date(utctime);

  const currentTime = new Date();

  const timeDifference = Math.abs(currentTime.getTime() - date.getTime());

  // will be working in milliseconds
  const tolerance = 2 * 60 * 60 * 1000;

  return timeDifference <= tolerance ? utctime : "Invalid UTC time";
}

export { getDayOfTheWeek, getUTCTime, validatedUTC };
