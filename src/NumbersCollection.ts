export default class NumbersCollection {
  constructor(public data: number[]) {
    this.compare = this.compare.bind(this)
    this.swap = this.compare.bind(this)
  }

  public get length() {
    return this.data.length
  }

  public compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx]
  }

  public swap(leftIdx: number, rightIdx: number): void {
    const dataLeft = this.data[leftIdx]
    this.data[leftIdx] = this.data[rightIdx]
    this.data[rightIdx] = dataLeft
  }

  public print(): void {
    console.log(this.constructor.name + ': [' + this.data + ']')
  }
}
