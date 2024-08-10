export const handleSliderPage = (index: number) => {
  if (
    index === 0 ||
    index === -1904 ||
    index === -3808 ||
    index === -5712 ||
    index === -1549 ||
    index === -3071 ||
    index === -4566 ||
    index === -27
  ) {
    return "#E50000";
  } else {
    return "#404040";
  }
};
