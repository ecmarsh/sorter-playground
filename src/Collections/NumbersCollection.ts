export default class NumbersCollection {
  constructor(public data: number[]) { }

  public get length(): number {
    return this.data.length
  }

  public compare: Compare = (leftIdx, rightIdx) => {
    return this.data[leftIdx] > this.data[rightIdx]
  }

  public swap: Swap = (leftIdx, rightIdx) => {
    const dataLeft = this.data[leftIdx]
    this.data[leftIdx] = this.data[rightIdx]
    this.data[rightIdx] = dataLeft
  }

  public get displayName(): string {
    return `${this.constructor.name}: [${this.data}]`
  }
}
