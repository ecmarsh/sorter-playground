export interface Printable {
  displayName: string
}

export default abstract class Printer {
  abstract displayName: string

  print() {
    console.log(this.displayName)
  }
}
