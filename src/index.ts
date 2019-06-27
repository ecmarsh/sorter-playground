import collectionsFactory from './Collections'
import Drivable, { generateDrivables } from './Drivable'

const drivableCollections = generateDrivables(collectionsFactory)

function drive(drivables: Drivable[]): void {
  for (const drivable of drivables) {
    drivable.sort()
    drivable.print()
  }
}

drive(drivableCollections)
