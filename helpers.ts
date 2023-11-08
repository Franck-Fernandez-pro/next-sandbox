export const getCurrencyValue = (v: number) =>
  v < 0.1 ? `$${v}` : `$${new Intl.NumberFormat('en-US').format(v)}`;
