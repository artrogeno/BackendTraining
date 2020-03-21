const moment = require("moment-timezone");



const convertDate = data => {
  const timezone = data.timezone;
  const country = data.country;
  const date = data.date;
  const letters = Array.from(data.country) ;
  const result = {
    country: country,
    frst_letter: letters[0],
    country: country,
    date: moment(date)
      .tz(timezone)
      .format("DD/MM/YYYY, H:mm:ss")
  };
  return result;
};

module.exports = { convertDate };
