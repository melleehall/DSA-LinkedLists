// Write a function main. Within the function, using the linked 
// list class above, create a linked list with the name SLL and 
// add the following items to your linked list: Apollo, Boomer, 
// Helo, Husker, Starbuck.
// Add Tauhida to the list.
// Remove Husker from the list.

// Add Athena before Boomer using your insertBefore() function.
// Add Hotdog after Helo using the insertAfter() method.
// Using the insertAt() method insert Kat in the 3rd position of the list.
// Remove Tauhida from the list.

function main() {
    const SLL = new LinkedList;
    const names = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck', 'Tauhida']

    for (let i = 0; i <= names.length; i++) {
      SLL.insertLast(names[i])
    }
   
    SLL.remove('Husker')

    SLL.insertBefore('Athena', 'Boomer')
 

    SLL.insertAfter('Hotdog', 'Helo')

    SLL.insertAt('Kat', 2)

    SLL.remove('Tauhida')

    return SLL
}

let SLLLinkedList = main()



// Supplemental functions for a linked list
// Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

// display: displays the linked list

function display(linkedList) {

    let items = [];

    if (linkedList.head === null) {
        return 'Linked list empty'
    }
    else {
        listItem = linkedList.head
        console.log(listItem)
    }

    while(listItem.next !== null) {
        console.log(listItem.value);
        listItem = listItem.next;
    }
}

display(SLLLinkedList);

// size: returns the size of the linked list

function size(linkedList) {
    if (linkedList.head === null) {
        return 'Linked list empty'
    }
    else {
        listItem = linkedList.head
    }

    let size = 0;

    while(listItem.next !== null) {
        size++;
        listItem = listItem.next;
    }
    return size;
}

size(SLLLinkedList);


// isEmpty: finds if the list is empty or not (without using the size() function)

function isEmpty(linkedList) {
    if (linkedList.head === null) {
      return 'Yes, it is empty'
    } else {
      return 'No, not empty'
    }
}

isEmpty(SLLLinkedList)

// findPrevious: finds the node before the item you are looking for

function findPrevious(linkedList, item) {
    if (linkedList.head === null) {
      return 'List is empty.  Cannot find target item or previous node'
    } 
    
    let prevNode = linkedList.head;
    let currNode = linkedList.head;
    
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return 'Item not found'
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    return prevNode
  }
  
  // Expected output: 'Boomer' node
  findPrevious(SLLLinkedList, 'Helo')


// findLast: returns the last node in the linked list

function findLastNode(linkedList) {
    if (linkedList.head === null) {
      return 'List is empty.  Cannot find target item or previous node'
    } 
    
    let prevNode = linkedList.head
    let currNode = linkedList.head;
    
    while (currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    return prevNode;
  }
  
  // Expected output: 'Boomer' node
  findLastNode(SLLLinkedList)



// Mystery program
// Analyze the following function (without running it in an IDE) 
// to determine what problem it is trying to solve. What is the time 
// complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// Removes adjacent duplicates from the LinkedList
// O(n) because it passes over the list once



// Reverse a list
// Write an algorithm to reverse a linked list. 
// The time complexity of your algorithm should be linear (O(n)). 
// For this exercise, notice we are not asking you just to print the 
// linked list in reverse or use another linked list to store the 
// value in reverse order. Your program should reverse the direction 
// of a given singly linked list. In other words, all pointers 
// should point backward. 


// BONUS: Solve this problem using both recursive and iterative algorithms.
