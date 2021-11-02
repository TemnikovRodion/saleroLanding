const getRoundedString = (value?: number, fractionDigits?: number): string => {
  return value || value === 0
    ? value.toLocaleString(undefined, { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits })
    : '-';
};

const getMoneyString = (value?: number): string => {
  return value || value === 0 ? value.toLocaleString(undefined, { maximumFractionDigits: 0 }) + ' ' : '-';
};

export const numberUtils = {
  getRoundedString,
  getMoneyString,
};
