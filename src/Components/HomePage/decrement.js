const decrease = (num, length) => {
  return num - 1 < 0 ? (num = length - 1) : num - 1;
};

export { decrease };
