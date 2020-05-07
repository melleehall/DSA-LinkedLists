class _NodeTwo {
    constructor (value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedListTwo {
    constructor () {
        this.head = null;
    }

    insertFirst(item) {
        // the head is null bc this is the 1st item in the list and therefore not pointing at anything
        this.head = new _NodeTwo(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
                tempNode.next = new _Node(item, null);
            }
        }

        find(item) {
            // start at the head
            let currNode = this.head;
            // if list empty
            if (!this.head) {
                return null
            }

            // checking for the item
            while (currNode.value !== item) {
                if (currNode.next === null) {
                    return null;
                }
                // otherwise keep looking
                else {
                    currNode = currNode.next;
                }
            }
            return currNode;
        }
}