export default class CharStar {
  constructor(public data: string) {}

  public get length(): number {
    return this.data.length
  }

  public compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase()
  }

  public swap(leftIdx: number, rightIdx: number): void {
    const characters = this.data.split('')

    const characterLeft = characters[leftIdx]
    characters[leftIdx] = characters[rightIdx]
    characters[rightIdx] = characterLeft

    this.data = characters.join('')
  }

  public print(): void {
    console.log(this.constructor.name + ': "' + this.data + '"')
  }
}
