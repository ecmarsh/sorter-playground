import Sorter, { Sortable } from './Sorter'
import Printer, { Printable } from './Printer'
import { applyMixins } from './applyMixins'
import { Factory } from './Collections'

export default class Drivable implements Sorter, Printer {
	constructor(public drivable: Sortable & Printable) { }

	// Sortable
	compare: (l: number, r: number) => boolean = this.drivable.compare.bind(this.drivable)
	swap: (l: number, r: number) => void = this.drivable.swap.bind(this.drivable)
	length: number = this.drivable.length
	sort!: () => void;
	// Printable
	get displayName() {
		return this.drivable.displayName
	}
	print!: () => void
}
applyMixins(Drivable, [Printer, Sorter])

export function generateDrivables(factory: Factory): Array<Drivable> {
	// Object.values(factory)
	let items = []
	for (const key in factory) {
		const fn = factory[key]
		items.push(fn())
	}
	return items.map(item => new Drivable(item))
}