function apiThrottle(fn: Function, delay: number) {
  let lastCall = 0;
  return function (...args: any) {
    const now = new Date().getTime();
    console.log({ now, lastCall, delay });
    if (now - lastCall < delay) {
      return;
    }
      lastCall = now;
      return fn(...args);
  }
};

export default apiThrottle;