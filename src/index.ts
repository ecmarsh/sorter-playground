import Sorter, { Sortable } from './Sorter'
import NumbersCollection from './NumbersCollection'
import CharStar from './CharStar'
import LinkedList from './LinkedList'

const unsortedValues = [10, -3, -5, 0]
const unsortedString = 'XaAbyC'

const numbersCollection = new NumbersCollection(unsortedValues)
const charactersCollection = new CharStar(unsortedString)
const linkedListCollection = new LinkedList()
linkedListCollection.fillWith(unsortedValues)

const collections: Sortable[] = [
  numbersCollection,
  charactersCollection,
  linkedListCollection,
]

driver(collections)

function driver(sortables: Sortable[]): void {
  for (const sortable of sortables) {
    const sorter = new Sorter(sortable)
    sorter.sort()
    sorter.print()
  }
}
