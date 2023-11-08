export const getCurrencyValue = (v: number) => `$${new Intl.NumberFormat('en-US').format(v)}`;
