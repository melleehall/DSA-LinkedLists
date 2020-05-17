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

function reverseList (linkList) {
    // Traverse the list keeping track of where we were/are
    let currNode = linkList.head;
    let prevNode;
    let tempNode;
  
    // iterate while we have a current node
    while ( currNode ) {
  
        // Store the next node
        tempNode = currNode.next;
  
        // Set current node's next node to the previous node
        // If first node, this is null
        currNode.next = prevNode;
  
        // Set our previous node to be the current node
        prevNode = currNode;
  
        // set current node to the stored node that was originally next
        currNode = tempNode;
      }
  
    linkList.head = prevNode;
  
    return linkList;
  }
  
  console.log(reverseList(SLLLinkedList))


// BONUS: Solve this problem using both recursive and iterative algorithms.
// To do later


// 3rd from the end
// Write an algorithm to find the 3rd element from the end of a 
// linked list. Note You may be tempted to add a length property 
// to your linked list class. The length property is not a typical 
// property of linked list, therefore don't make any modification to 
// the linked list class that is provided to you.

function thirdFromEnd(linkedList) {
    let startNode = linkedList.head
    if (startNode === null || startNode.next === null || startNode.next.next === null) {
      return 'List must have a minimum of 3 items';
    }
  
    let endNode = startNode.next.next.next;
    console.log(endNode)
    
    while (endNode.next !== null) {
      startNode = startNode.next;
      endNode = endNode.next;
    }
  
    return startNode;
  }
  
  console.log(thirdFromEnd(SLLLinkedList))




// Middle of a list
// Write an algorithm to find the middle element of a linked list. 
// Note You may be tempted to add a length property to your linked 
// list class. The length property is not a typical property of 
// linked list, therefore don't make any modification to the linked 
// list class that is provided to you. Also, finding the size of the 
// linked list using the size() function and dividing it by half 
// will not find the correct middle of the linked list. So, don't 
// use either of these approaches.


function listMiddle(linkedList) {
    let items = [];

    if (linkedList.head === null) {
        return 'Linked list empty'
    }
    else {
        listItem = linkedList.head
    }

    while(listItem.next !== null) {
        items.push(listItem.value);
        listItem = listItem.next;
    }
    
    let middleIdx = Math.floor(items.length / 2)
    return items[middleIdx]
}

listMiddle(SLLLinkedList)

// Cycle in a list
// Write an algorithm to find whether a linked list has a 
// cycle (i.e., whether a node in the list has its next value 
// pointing to an earlier node in the list). 
// For this exercise, create a linked list with the name CycleList. 
// Be sure to insert nodes in the list so that it has a cycle. 
// Then test your program with a cycleList function.

// ****INCOMPLETE*****

function createCycleList() {
    let cycleList = new LinkedList();
  
    const items = ['A', 'B', 'C']
    for (let i = 0; i < items.length; i++) {
      cycleList.insertLast(items[i])
    }
  
    let firstNode = cycleList.find('A')
    let lastNode = cycleList.find('C')
    lastNode.next = firstNode
     
    return cycleList;
  }
  
  const cl = createCycleList()
  
  function isItACycle(linkedList, nodeInQuestion) { 
    let head = linkedList.head
    let end;
    if (!nodeInQuestion) {
      end = linkedList.head.next;
    } else {
      end = nodeInQuestion
    }
  
    console.log(end)
  
    // Base case
    // if we have looked at all of the nodes and none of them have returned 'true', exit
    if (nodeInQuestion.next === null) {
      return 'No cycles found'
    }
    
  
    // General case
    // start at the head 
  
    // while currNode !== end
  
    // iterate over the nodes checking if the end's pointer is to any of them
  
    // if so, return 'cycle'
  
  
    // otherwise, call isItACycle(linkedList, end.next)
  
  }
  
  isItACycle(cl)


// Sorting a list
// Write an algorithm that will sort a given linked list. 
// For example given a list such as 3->2->5->7->1, your program will 
// output the sorted version of this list which will be 1->2->3->5->7. 
// You may not use another list or any other data structure such as 
// an array to store the data.


// ****INCOMPLETE*****

function sortList(linkedList, startingNode, changes) {
    console.log(display(linkedList))
    console.log(startingNode)
    if (linkedList.head === null) {
      return null;
    }
    
    // we need to keep track of whether any changes are made and only call the function recursively if changes > 0
  
    // start with the first node
    let currNode = linkedList.head
  
    // update lowestNode as we come across any nodes with lower values while iterating over the list
    let lowestNode = currNode
   
    while (currNode !== null) {
      // replace the lowestNode with the currNode if its value is lower
      if (currNode.value < lowestNode.value) {
        lowestNode = currNode;
        changes = changes + 1;
      }
      // move to the next node
      currNode = currNode.next;
    }
  
    console.log(`changes: ${changes}`)
  
    // save the lowest value
    let tempValue = lowestNode.value;
    // remove it from its original spot in the linked list
    linkedList.remove(lowestNode.value);
    // insertLast the lowestNode's value 
    linkedList.insertFirst(tempValue)
  
    // if (changes > 0) {
    //   sortList(linkedList, tempValue, 0)
    // }
    
  }
  
  
  function createNumsLL() {
    const numsLL = new LinkedList()
    numsLL.insertLast(4)
    numsLL.insertLast(2)
    numsLL.insertLast(1)
    numsLL.insertLast(8)
    numsLL.insertLast(5)
  
    return numsLL
  }
  
  // const numsLL = createNumsLL()
  // sortList(numsLL, 0)