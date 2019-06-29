export default class CharStar {

  constructor(public data: string) { }

  public get length(): number {
    return this.data.length
  }

  public get displayName(): string {
    return `${this.constructor.name}: "${this.data}"`
  }

  public compare: Compare = (leftIdx, rightIdx) => {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase()
  }

  public swap: Swap = (leftIdx, rightIdx) => {
    const characters = this.data.split('')

    const characterLeft = characters[leftIdx]
    characters[leftIdx] = characters[rightIdx]
    characters[rightIdx] = characterLeft

    this.data = characters.join('')
  }
}
