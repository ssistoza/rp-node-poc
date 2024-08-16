export const rando = 'random string';
export const noop = () => {};
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
