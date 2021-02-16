/**
 * Creates a chain of Functions that will be executed in sequnce (from left to right), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 * @param ...fns - One or more function to execute (in sequential order) on a value that will be supplied later
 * @returns A single Function that is ready to receive a value and pass it through the piped chain of Functions
 */
export default function pipe(): (...params: any[]) => (val: any) => any
