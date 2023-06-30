const isFileInput = element => element.type === "file";
const isCheckbox = element => element.type === "checkbox";
const isMultiSelect = element => element.options && element.multiple;
const isValidElement = element => element.name && element.value;
const isValidValue = element =>
  !["checkbox", "radio"].includes(element.type) || element.checked;
const removeStrAtIndex = (str, subStr, idx) =>
  str.slice(str.lastIndexOf(subStr, idx) + 1);

const getCookie = cname => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const isArray = myArray => Array.isArray(myArray);
const isset = obj => typeof obj != "undefined" && obj !== null;
const getType = checkedVar => typeof checkedVar;
const isObject = checkedVar => getType(checkedVar) === "object";
const isString = checkedVar => getType(checkedVar) === "string";

/**
 * Determine if the provided variable is empty and return true, and false if otherwise
 * First determine if value is null or of type {undefined} then is considered empty else continue.
 * If it's {String} confirm that the length is less tha 1 else check if it's a number and confirm if the number is lesser than or equal to 0
 * else return false
 *
 * @param checkedVar {String|Number} Variable to check for emptiness, string or unsigned integers only as empty numbers are numbers less than or equal to 0
 * @returns {boolean}
 */
const empty = checkedVar => {
  if (checkedVar == null) return true;
  else if (!isset(checkedVar)) return true;
  else if (isObject(checkedVar)) return Object.keys(checkedVar).length === 0;
  else if (isArray(checkedVar)) return checkedVar.length < 1;
  else if (getType(checkedVar) === "string")
    return checkedVar.trim().length < 1;
  else if (getType(checkedVar) === "number") return checkedVar <= 0;

  return false;
};

/**
 * To prototype kindly include this to your script:
 *
 * import {equalsIgnoreCase} from "PATH_TO_UTILITIES/utils";
 *
 * if (!String.prototype.equalsIgnoreCase) {
 *      String.prototype.equalsIgnoreCase = function (str) {
 *          return equalsIgnoreCase(this, str);
 *      };
 * }
 *
 * @param str1
 * @param str2
 * @returns {boolean}
 */
const equalsIgnoreCase = (str1, str2) => {
  if (getType(str1) !== "string" || getType(str2) !== "string") return false;
  return str1.toLowerCase() === str2.toLowerCase();
};

const today = () => new Date();

const yearAgo = numberOfYears => {
  const cDate = new Date();
  cDate.setFullYear(cDate.getFullYear() - numberOfYears);
  return cDate;
};

const yearLater = numberOfYears => {
  const cDate = new Date();
  cDate.setFullYear(cDate.getFullYear() + numberOfYears);
  return cDate;
};

const isValidDateFormat = date => {
  // regular expression to match required date format
  const re = /^\d{4}-\d{2}-\d{2}$/;
  return !(empty(date) || !date.match(re));
};

/**
 * Check if the provided date of birth first meet the YYYY-MM-DD date format else return false and continue if true,
 * If your current age based on the provided `dob` is greater than or equal to the `minAge` then is valid else, is not.
 *
 * @param dob {String} Date of birth to be validated if it's up to the required minAge
 * @param minAge {Integer} Minimum age required for validation
 * @param checkFormatValidity {boolean} Check dob string format conforms with YYYY-MM-DD if true else ignore format check
 * @returns {boolean} true if current age based on the provided `dob` is greater than or equal to the `minAge` , and false if otherwise.
 */
const isValidMinAgeDateFormat = (dob, minAge, checkFormatValidity) => {
  const cDate = new Date();
  if (checkFormatValidity && !isValidDateFormat(cDate)) return false; //If it's not a valid date return false already
  const iDate = new Date(dob);
  return cDate.getFullYear() - iDate.getFullYear() >= minAge;
};

/**
 * Check if your current age based on the provided `dob` is greater than or equal to the `minAge` then is valid else, is not.
 *
 * @param dob {String} Date of birth to be validated if it's up to the required minAge
 * @param minAge {Integer} Minimum age required for validation
 * @returns {boolean} true if current age based on the provided `dob` is greater than or equal to the `minAge` , and false if otherwise.
 */
const isValidMinAge = (dob, minAge) => {
  return isValidMinAgeDateFormat(dob, minAge, false);
};

// eslint-disable-next-line no-useless-escape
const isValidEmail = email =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
// eslint-disable-next-line no-useless-escape
const isValidPhone = phone =>
  /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/.test(
    phone
  );

const ucwords = str => {
  if (!isset(str)) return "";
  str = str.toLowerCase();
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function($1) {
    return $1.toUpperCase();
  });
};

const ucfirst = str => {
  if (!isset(str)) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const groupBy = (xs, key) => {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const getYearsArray = yearCountFrom => {
  const years = [];
  let year = new Date().getFullYear();
  for (let i = yearCountFrom; i >= 1; i--) years.push(year--);
  return years;
};

const arrayToCommaString = arr => arr.join(", ");
const arrayToCommaSeparated = arr => arr.join(",");

const arrayValues = arr => {
  const temp = [];
  for (let [key, value] of Object.entries(arr)) {
    if (!empty(key)) temp.push(Number(value));
  }
  return temp;
};
const arrayIdValues = arr => {
  const temp = [];
  for (let [key, value] of Object.entries(arr)) {
    if (!empty(key)) temp.push(Number(value.id));
  }
  return temp;
};
const precedeZeroFix = number => {
  return `${number}`.length < 2 ? `0${number}` : number;
};
String.prototype.ucwords = ucwords;

const isMobile = () => {
  let check = false;
  // eslint-disable-next-line no-useless-escape
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const isWorkingDay = (day, month, fullYear) => {
  month = month - 1; //January = 0, and December = 11
  const d = new Date(fullYear, month, day);
  return d.getDay() >= 1 && d.getDay() <= 6; //Sunday = 0 and Saturday = 6
};

export {
  isFileInput,
  isCheckbox,
  isMultiSelect,
  isValidElement,
  isValidValue,
  removeStrAtIndex,
  getCookie,
  precedeZeroFix,
  isWorkingDay,
  daysInMonth,
  isMobile,
  arrayIdValues,
  arrayValues,
  arrayToCommaSeparated,
  arrayToCommaString,
  getYearsArray,
  groupBy,
  ucfirst,
  ucwords,
  isset,
  empty,
  isArray,
  today,
  yearAgo,
  isValidMinAgeDateFormat,
  isValidMinAge,
  yearLater,
  isValidDateFormat,
  getType,
  isObject,
  isValidEmail,
  isValidPhone,
  isString,
  equalsIgnoreCase
};
