class Node {
  constructor(public value: number, public next: Node | null = null) {}
}

export default class LinkedList {
  constructor(
    public data: { head: Node | null } = { head: null },
    protected size: number = 0
  ) {
    this.compare = this.compare.bind(this)
    this.swap = this.swap.bind(this)
  }

  public get length(): number {
    return this.size
  }

  public compare(leftIdx: number, rightIdx: number): boolean {
    const leftNode = this.accessAt(leftIdx)
    const rightNode = this.accessAt(rightIdx)

    if (leftNode && rightNode) {
      return leftNode.value > rightNode.value
    }

    return false
  }

  public swap(leftIdx: number, rightIdx: number): void {
    const leftNode = this.accessAt(leftIdx)
    const rightNode = this.accessAt(rightIdx)

    if (leftNode && rightNode) {
      const leftNodeValue = leftNode.value
      leftNode.value = rightNode.value
      rightNode.value = leftNodeValue
    }
  }

  public addAtTail(value: number): void {
    let currentNode = this.data.head

    if (!currentNode) {
      this.addAtHead(value)
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = new Node(value)
    }

    this.incrementSize()
  }

  public accessAt(index: number): Node | void {
    let currentNode: Node | null = this.data.head

    let counter = 0
    while (currentNode) {
      if (counter === index) {
        return currentNode
      }

      counter++
      currentNode = currentNode.next
    }

    this.throwAcessError(index)
  }

  public fillWith(values: number[]) {
    for (const value of values) {
      this.addAtTail(value)
    }
  }

  public print(): void {
    let currentNode: Node | null = this.data.head
    const linkedListPrettified: Node[] = []
    while (currentNode) {
      const nodePrettified = { ...currentNode }
      delete nodePrettified.next
      linkedListPrettified.push(nodePrettified)
      currentNode = currentNode.next
    }

    console.log(this.constructor.name + ':', linkedListPrettified)
  }

  private incrementSize() {
    this.size++
  }

  private addAtHead(value: number) {
    this.data.head = new Node(value)
  }

  protected throwAcessError(index: number) {
    throw Error(`Cannot access at index ${index}`)
  }
}
