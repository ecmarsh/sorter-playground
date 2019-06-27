import CharStar from './CharStar'
import NumbersCollection from './NumbersCollection'
import LinkedList from './LinkedList'

export type Collection = LinkedList | NumbersCollection | CharStar

export type Factory = {
	[key: string]: () => Collection
}

enum Collections {
	LinkedList = 'LinkedList',
	Numbers = 'Numbers',
	CharStar = 'CharStar',
}

function create(collection?: string): Collection {
	const unsorted = {
		numbers: [10, -3, -5, 0],
		string: 'XaAbyC',
		default: [5, 4, 3, 2, 1]
	}

	let sampleData: number[] | string = unsorted.numbers
	switch (collection) {
		case Collections.CharStar: {
			sampleData = unsorted.string
			return new CharStar(sampleData)
		}
		case Collections.LinkedList: {
			return LinkedList.fromValues(sampleData)
		}
		case Collections.Numbers: {
			return new NumbersCollection(sampleData)
		}
		default: {
			class Default extends NumbersCollection {
				constructor(data: number[]) { super(data) }
			}
			return new Default(unsorted.default)
		}
	}
}

export default {
	createNumbers: () => create(Collections.Numbers),
	createLinkedList: () => create(Collections.LinkedList),
	createString: () => create(Collections.CharStar),
	createDefault: () => create(),
}