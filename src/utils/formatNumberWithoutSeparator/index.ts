import { convertPersianNumberToEnglish } from '../convertPersianNumberToEnglish';

export const formatNumberWithoutSeparator = (input: number | string, separator: string) =>
  +input?.toString()?.replace(new RegExp(`\\${separator}`, 'gi'), '');

export const formatNumberWithSeparator = (number: number) => {
  if (number === 0 || number) {
    let formattedNumber = number.toString().replace(/,/g, '');
    formattedNumber = convertPersianNumberToEnglish(number).res || '';
    const parts = formattedNumber.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
  return '';
};
