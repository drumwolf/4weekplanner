class CalendarData {
  monthsPerYear = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  daysPerMonth  = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  constructor(dateString) {
    let dates  = this.createDateStrings(dateString);
    let months = this.createMonthString(dates);
    this.data  = { 'dates': dates, 'month': months }
  }

  /***** SET DATE STRINGS *****/

  createDateStrings(dateString) {
    let baseDate = this.setBaseDate(dateString);
    let dateStrings = [];
    for (let i = 0; i < 28; i++) {
      const dateCopy = new Date(baseDate);
      dateCopy.setDate(  dateCopy.getDate() + i  );
      dateStrings.push( this.dateToString(dateCopy) );
    }
    return dateStrings;
  }

  dateToString(date) {
    let yy = date.getYear() + 1900;
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (mm < 10) { mm = `0${mm}` }
    if (dd < 10) { dd = `0${dd}` }
    return `${yy}-${mm}-${dd}`;
  }

  findPreviousSunday(date) {
    const sundayInt  = date.setDate( date.getDate() - date.getDay() );
    const sundayDate = new Date(sundayInt);
    sundayDate.setHours(0,0,0,0);
    return sundayDate;
  }

  isValidDate(yy, mm, dd) {
    // verify that month value is valid
    if (mm < 1 || mm > 12) { return false; }
    // verify that date value is valid
    if (yy % 4 === 0) { this.daysPerMonth[2] = 29; }
    if (dd < 1 || dd > this.daysPerMonth[mm]) { return false; }
    // if you've gotten this far, the date is correct
    return true;
  }

  setDateParts(dateString) {
    /* THIS METHOD WILL RETURN EITHER "false" OR AN ARRAY: [yy, mm, dd] */
    // verify that string follows basic date format
    if ( !dateString || !dateString.match(/^\d{4}-\d{1,2}-\d{1,2}$/) ) { return false; }
    // parse year, month and date vars from string argument
    const [yy, mm, dd] = dateString.split('-').map( num => Number(num) );
    return [yy, mm, dd];
  }

  setBaseDate(dateString) {
    const dateParts = this.setDateParts(dateString);
    const isValidDate = dateParts && this.isValidDate(...dateParts);
    const paramDate = (isValidDate) ? new Date(dateParts[0], dateParts[1] - 1, dateParts[2]) : new Date();
    return this.findPreviousSunday(paramDate);
  }

  /***** SET MONTH STRING *****/

  createMonthString(dateStrings) {
    const firstDate   = dateStrings[0].split('-'), lastDate = dateStrings[dateStrings.length - 1].split('-');
    const firstMonth  = this.monthsPerYear[ Number(firstDate[1]) ];
    const lastMonth   = this.monthsPerYear[ Number(lastDate[1]) ];
    const firstYear   = firstDate[0];
    const lastYear    = lastDate[0];
    const isSameYear  = (firstYear === lastYear && firstMonth !== lastMonth);
    const isSameMonth = (firstYear === lastYear && firstMonth === lastMonth);
    if (isSameMonth) {
      return `${firstMonth} ${lastYear}`;
    } else  if (isSameYear) {
      return `${firstMonth} / ${lastMonth} ${firstYear}`;
    } else {
      return `${firstMonth} ${firstYear} / ${lastMonth} ${lastYear}`;
    }
  }

}

export default CalendarData;
