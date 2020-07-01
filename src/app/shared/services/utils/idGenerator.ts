const FIB_NUMBERS: number[] = [144, 233, 377, 610];

const generateSecondNumber = (maxNumber: number) => {
  let num: number = 0;
  while (num < 100) {
    num = Math.round(Math.random()*maxNumber);
  }
  return num;
};

export const generateUniqueId = (): number => {
  const fibonacciNumber: number = FIB_NUMBERS[Math.round(Math.random()*3)];
  const maxNumber: number = 999 - fibonacciNumber;
  const secondNumber: number = generateSecondNumber(maxNumber);
  const firstNumber: number = secondNumber + fibonacciNumber;
  return Number(`${firstNumber}${secondNumber}${fibonacciNumber}`);
};