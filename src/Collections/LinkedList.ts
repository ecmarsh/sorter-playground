class Node<T> {
  constructor(public value: T, public next: Node<any> | null = null) { }
}

export default class LinkedList {
  static fromValues(data: Array<any>): LinkedList {
    const linkedListInstance = new LinkedList()
    for (const element of data) {
      linkedListInstance.addAtTail(element)
    }
    return linkedListInstance
  }

  constructor(
    public data: { head: Node<any> | null } = { head: null },
    protected size: number = 0
  ) { }

  public get length(): number {
    return this.size
  }

  public get displayName(): string {
    let currentNode: Node<any> | null = this.data.head
    const linkedListPrettified: Node<any>[] = []
    while (currentNode) {
      const nodePrettified = Object.assign({}, currentNode)
      delete nodePrettified.next
      linkedListPrettified.push(nodePrettified)
      currentNode = currentNode.next
    }

    return `${this.constructor.name}: ${JSON.stringify(linkedListPrettified)}`
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

  public addAtTail<T>(value: T): void {
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

  public accessAt(index: number): Node<any> | void {
    let currentNode: Node<any> | null = this.data.head

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

  private incrementSize() {
    this.size++
  }

  private addAtHead<T>(value: T) {
    this.data.head = new Node(value)
  }

  protected throwAcessError(index: number) {
    throw Error(`Cannot access at index ${index}`)
  }
}
