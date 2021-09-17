// TODO: Finish implementing partitioning method

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    // Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    // Insert last node
    insertLast(data){
        let node = new Node(data)
        let current;

        if (!this.head){
            this.head = node
        } else {
            current = this.head
            
            while(current.next) {
                current = current.next
            }

            current.next = node
        }
    }

    //Log list data
    logData(){
        let current = this.head
        while (current){
            console.log(current.data)
            current = current.next
        }
    }

    // Partition by x
    partition(x){
        // handle empty list
        if (this.head === null){
            return this.head
        }
        // handle list of one 
        if (!this.head.next){
            return this.head
        }
        let llLeft = new LinkedList()
        let llRight = new LinkedList()
        let current = this.head
        while (current){
            current = current.next
        }
    }
}

const ll = new LinkedList()

ll.insertFirst(1)
ll.insertFirst(3)
ll.insertFirst(5)
ll.insertLast(6)

ll.logData()

ll.partition(4)
console.log("Post partition")
ll.logData()