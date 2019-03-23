class CalendarData {
  monthsPerYear = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  daysPerMonth  = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  constructor(dateParam) {
    let dates  = this.createDateStrings(dateParam);
    let months = this.createMonthString(dates);
    this.data  = { 'dates': dates, 'months': months, 'today': this.today, 'prev': this.prev, 'next': this.next }
  }

  /***** SET DATE STRINGS *****/

  createDateStrings(dateParam) {
    let baseDate = this.setBaseDate(dateParam);
    let dateStrings = [];
    // create dateStrings
    for (let i = 0; i < 28; i++) {
      const dateCopy = new Date(baseDate);
      let dateString;
      dateCopy.setDate(  dateCopy.getDate() + i  );
      dateString = this.dateToString(dateCopy);
      dateStrings.push( dateString );
      if (this.isToday(dateCopy)) { this.today = dateString; }
      // create 'next' date
      if (i === 7) {
        this.next = dateString;
      }
    }
    // create 'prev' date
    let prevDate = new Date(baseDate);
    prevDate.setDate( prevDate.getDate() - 7 );
    this.prev = this.dateToString(prevDate);
    // return dateStrings
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

  isToday(date) {
    const today = new Date();
    return (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear() );
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
