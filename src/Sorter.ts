export interface Sortable {
  data: any
  length: number
  compare: Compare
  swap: Swap
}

export default abstract class Sorter {
  abstract length: number
  abstract compare: Compare
  abstract swap: Swap

  sort() {
    const { length } = this
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        const [leftIdx, rightIdx] = [j, j + 1]
        if (this.compare(leftIdx, rightIdx)) {
          this.swap(leftIdx, rightIdx)
        }
      }
    }
  }
}
