function Node(value){
    this.data = value;
    this.next = null;
}
let head = null;

function pushLinkedListFront(data_value){
    let tempNode = new Node(data_value)
    tempNode.next = head;
    head = tempNode;
}

function printNodeList(){
    let temp = head;
    while(temp != null){
        console.log(temp.data,"->")
        temp = temp.next;
    }
}
function insertPosition(position,data){
    if(position < 1)
    console.log("invalid position");
    if(position ==1){
        pushLinkedListFront(data);
    }
    else{
        let temp = head;
        while (position != 0){
            if(position ==1){
                let tempNode = new Node(data);
                tempNode.next = temp;
                temp = tempNode;
                break;
            }
            position--;
            temp = temp.next;
        }
        if(positon !=1)
        console.log("out of Range");
    }
}
printNodeList();
pushLinkedListFront(23);
printNodeList();
pushLinkedListFront(20);
