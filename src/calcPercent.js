export function calcPercent(valueAgePeriod) {
  if (valueAgePeriod !== null) {
    const COUNTER = 439;
    return Number(((valueAgePeriod * 100) / COUNTER).toFixed(1));
  }
}
