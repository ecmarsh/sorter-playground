import Sorter, { Sortable } from './Sorter'
import Printer, { Printable } from './Printer'
import { applyMixins } from './applyMixins'
import { Factory } from './Collections'

type SortablePrintable = Sortable & Printable

export default class Drivable<T extends SortablePrintable> implements Sorter, Printer {
	constructor(public drivable: T) { }

	compare: Compare = this.drivable.compare
	swap: Swap = this.drivable.swap
	length: number = this.drivable.length
	get displayName() {
		return this.drivable.displayName
	}

	// Sortable mixin
	sort!: () => void;
	// Printable mixin
	print!: () => void
}
applyMixins(Drivable, [Printer, Sorter])

type GenerateDrivables = (factory: Factory) => Drivable<SortablePrintable>[]

export const generateDrivables: GenerateDrivables = factory => {
	const generateAllFactoryValues = () => {
		let values = []
		for (const key in factory) {
			const fn = factory[key]
			const value = fn()
			values.push(value)
		}
		return values
	}

	const nondrivables = generateAllFactoryValues()
	return nondrivables.map(nondrivable => new Drivable(nondrivable))
}