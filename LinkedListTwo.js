class _Node {
    constructor (value, next) {
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor () {
        this.head = null;
    }

    insertFirst(item) {
        console.log(`insertFirst(${item})`)
        // the head is null bc this is the 1st item in the list and therefore not pointing at anything
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        console.log(`insertLast(${item})`)
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
          console.log(`find(${item})`)
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

      remove(item) {
          console.log(`remove(${item})`)
          if (!this.head) {
              return null;
          }

          //if node to be removed is head, make next node head
          if (this.head.value === item) {
              this.head = this.head.next;
              return;
          }

          // start at head
          let currNode = this.head;
          // keep track of previous
          let previousNode = this.head;
          while((currNode !== null) && (currNode.value !== item)) {
              // save previous node
              previousNode = currNode;
              currNode = currNode.next;
          }
          if (currNode === null) {
              console.log('item not found')
              return;
          }
          previousNode.next = currNode.next
      }

      insertBefore(item, target) {
        // if linked list is empty meaning target doesn't exist
        if (!this.head) {
          console.log('Target not found - list is empty');
          return null;
        }

        let currNode = this.head;
        let prevNode = this.head;

        while(currNode.value !== target) {
          if (currNode.next === null) {
            console.log('Target not found');
            return null;
          }
          else {
            // when the target is identified, the new item will be inserted after prevNode and before currNode
            prevNode = currNode;
            currNode = currNode.next;
          }
        }
        prevNode.next = new _Node(item, currNode)
      };

      insertAfter(item, target) {
        // list is empty
        if (!this.head) {
          console.log('Target not found - list is empty');
          return null;
        }

        // note that we don't need to keep track of the previous node since we are inserting the new value after the node that matches target.  We will point the new node to what the target node was pointing to (currNode.next)
        let currNode = this.head;

        while (currNode.value !== target) {
          if (currNode.next === null) {
            console.log('Target not found');
            return null;
          }
          else {
            // once target is identified, item will be inserted after currNode
            currNode = currNode.next;
          }
        }
        // save the node that the currNode (the target) was pointing to
        let ptr = currNode.next
        currNode.next = new _Node(item, ptr)
      }

      insertAt(value, idx) {
        if (idx === 0) {
          this.insertFirst(value)
        }
      
        let count = 0
        let prevNode = this.head
        let currNode = this.head
      
        while((count < idx) && (currNode.next !== null)) {
          prevNode = currNode;
          currNode = currNode.next;
          count++;
        }
 
        prevNode.next = new _Node(value, currNode)
      }

}