import dayjs from "dayjs";
import "dayjs/locale/ja";

const defaultDateFormat = "YYYY-MM-DD";
const defaultYearMonthFormat = "YYYY-MM";

dayjs.locale("ja");

/**
 * 指定した長さの連番の配列を返す
 * e.g. numberRange(5) => [1, 2, 3, 4, 5]
 * @param n
 */
function numberRange(n: number) {
  return [...Array(n).keys()];
}

/**
 * 渡した文字列の日付を返す
 * @param dateStr
 */
export function getDate(dateStr: string) {
  return dayjs(dateStr).date();
}

/**
 * 渡した日付の曜日を返す
 * 0 (日曜日)) to 6 (土曜日).
 * @param dateStr
 */
export function getDayOfWeek(dateStr: string) {
  return dayjs(dateStr).day();
}

/**
 * 渡した文字列の日付が含まれる週の開始日を返す
 * @param dateStr
 * @param format
 */
export function getFirstDateOfWeek(
  dateStr: string,
  format = defaultDateFormat
) {
  const base = getDayOfWeek(dateStr);
  return dayjs(dateStr)
    .subtract(base, "day")
    .format(format);
}

/**
 * 渡した文字列の日付が含まれる週の最終日を返す
 * @param dateStr
 * @param format
 */
export function getLastDateOfWeek(dateStr: string, format = defaultDateFormat) {
  const base = getDayOfWeek(dateStr);
  return dayjs(dateStr)
    .add(6 - base, "day")
    .format(format);
}

/**
 * 渡した文字列の年月の開始日を返す
 * @param yearMonth
 * @param format
 */
export function getFirstDateOfMonth(
  yearMonth: string,
  format = defaultDateFormat
) {
  return dayjs(yearMonth)
    .startOf("month")
    .format(format);
}

/**
 * 渡した文字列の年月の最終日を返す
 * @param yearMonth
 * @param format
 */
export function getLastDateOfMonth(
  yearMonth: string,
  format = defaultDateFormat
) {
  return dayjs(yearMonth)
    .endOf("month")
    .format(format);
}

/**
 * 渡した文字列の年月の前月を返す
 * @param dateStr
 * @param format
 */
export function getPreviousYearMonth(
  dateStr: string,
  format = defaultYearMonthFormat
) {
  return dayjs(dateStr)
    .subtract(1, "month")
    .format(format);
}

/**
 * 渡した文字列の年月の翌月を返す
 * @param dateStr
 * @param format
 */
export function getNextYearMonth(
  dateStr: string,
  format = defaultYearMonthFormat
) {
  return dayjs(dateStr)
    .add(1, "month")
    .format(format);
}

/**
 * 指定範囲の日付を返す
 * @param startDateStr
 * @param endDateStr
 * @param format
 */
export function getPeriod(
  startDateStr: string,
  endDateStr: string,
  format = defaultDateFormat
) {
  const start = dayjs(startDateStr);
  const days = dayjs(endDateStr).diff(start, "day") + 1;
  return numberRange(days).map(n => start.add(n, "day").format(format));
}
