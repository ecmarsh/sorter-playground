import NumbersCollection from './NumbersCollection'
import CharStar from './CharStar'
import LinkedList from './LinkedList'

interface Drivable {
  print(): void
  sort(): void
}

const unsortedValues = [10, -3, -5, 0]
const unsortedString = 'XaAbyC'

const numbersCollection = new NumbersCollection(unsortedValues)
const charactersCollection = new CharStar(unsortedString)
const linkedListCollection = new LinkedList()
linkedListCollection.fillWith(unsortedValues)

const collections: Drivable[] = [
  numbersCollection,
  charactersCollection,
  linkedListCollection,
]

driver(collections)

function driver(drivables: Drivable[]): void {
  for (const drivable of drivables) {
    drivable.sort()
    drivable.print()
  }
}
