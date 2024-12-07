import moment from 'jalali-moment';

const convertToJalali = (dateString) => {
  return moment(dateString)
  .locale("fa")
  .format('jD jMMMM jYYYY');
};

export default convertToJalali;
