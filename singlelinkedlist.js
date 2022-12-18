//single linked list example
let head = null;

function pushToLinkListFront(data_value) {
    let tempNode = new Node(data_value);
    tempNode.next = head;
    head = tempNode;
}

function prindNodeList() {
    let temp = head;
    while (temp != null) {
        console.log(temp.data, ' -> ')
        temp = temp.next;
    }
}
prindNodeList(); 
pushToLinkListFront(3)
prindNodeList(); 
pushToLinkListFront(2)
prindNodeList(); 
pushToLinkListFront(5)
prindNodeList(); 
pushToLinkListFront(8)
prindNodeList(); 
pushToLinkListFront(10)
prindNodeList(); 