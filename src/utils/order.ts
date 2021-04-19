/* eslint-disable no-unused-vars */
export enum Order {
  Desc,
  Asc,
}

type CompareFunction = (a: number, b: number) => number

type CompareFunctions = Record<Order, CompareFunction>

export const compareFunctions: CompareFunctions = {
  [Order.Asc]: (a, b) => a - b,
  [Order.Desc]: (a, b) => b - a,
}
