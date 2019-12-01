const moment = require("moment");

export const formatDate = date => {
  return moment(date).format("dd mm Y, HH:mm");
};
