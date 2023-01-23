export const limit = (min: number, max: number) => (value: number) => value <= min ? min : value >= max ? max : value;
