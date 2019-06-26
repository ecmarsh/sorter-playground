export interface Sortable {
  data: any
  length: number
  compare(leftIdx: number, rightIdx: number): boolean
  swap(leftIdx: number, rightIdx: number): void
  print(): void
  sort(): void
}

export default abstract class Sorter {
  abstract length: number
  abstract compare(leftIdx: number, rightIdx: number): boolean
  abstract swap(leftIdx: number, rightIdx: number): void
  abstract print(): void

  public sort(): void {
    const { length } = this
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }

  public basePrint(): void {
    this.print()
  }
}
