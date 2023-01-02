let cardId=1;
let listItemId=1;
let card=" ";
let cardLinkValue=1;
function addItem(){
    const addItemBtn=document.getElementById('add_item_btn');
    addItemBtn.addEventListener("click",function(){
        document.getElementById('todo_popup').style.display="block";
        document.getElementById('main-section').style.filter="blur(8px)";
        document.getElementById('main-section').style.webkitFilter= "blur(8px)";
    })
}
addItem();

function closeAddItem(){
    const closeAddItem_btn=document.getElementById('Cancel_todo_item_btn');
    closeAddItem_btn.addEventListener("click",function(){
        document.getElementById('todo_popup').style.display="none";
        document.getElementById('main-section').style.filter="none";
        document.getElementById('main-section').style.webkitFilter= "none";
    })
}
closeAddItem();

function addToDOItem(){
    
    const addToDOItem_btn=document.getElementById('Add_todo_item_btn');
    const taskContainer=document.getElementById('tasks_container');
    addToDOItem_btn.addEventListener("click",function(){
        document.getElementById('todo_popup').style.display="none";
        document.getElementById('main-section').style.filter="none";
        document.getElementById('main-section').style.webkitFilter= "none";
        document.getElementById('no_list_text').innerText=" ";
        const toDoItemName=document.getElementById('toDoNameInput').value;
        const ele=document.createElement('div');
        console.log(toDoItemName);
        ele.classList.add('todo_card');
        ele.setAttribute('id' ,`card${cardId}`);
        ele.innerHTML=`
          <div class="todo_header"><i class="cardLink" value=${cardId}>${toDoItemName}</i></div><hr>
          <div class="todo_body" id="cardBody${cardId}">
          </div>
            <div class="todo_btns">
              <button class="add_todo_list_btn" id="addItem-${cardId}" value=${cardId}>+</button>
              <button class="delete_todo_btn" id="deleteBtnContainer" value=${cardId} >
                <i class="fa-solid fa-trash-can" value=${cardId}></i>
              </button>
        </div>`;
        taskContainer.appendChild(ele);
        cardId++;
    })
    
}
addToDOItem();

function addItemsToDoList(){
    const tasksContainer=document.getElementById('tasks_container');
    const listItems=document.getElementById('listItem_popup');
    let id=0;
    tasksContainer.addEventListener("click",(e)=>{
        if(e.target.classList.contains('add_todo_list_btn')){
             document.getElementById('main-section').style.filter="blur(8px)";
             document.getElementById('main-section').style.webkitFilter= "blur(8px)";
            const listItemName=document.getElementById('listItemInput').value;
            listItems.style.display="block";
            id=e.target.value;
            // document.getElementById('cardBody'+e.target.getAttribute('id')).innerText=" helo0o0";
        console.log(id);

    }
    if(e.target.classList.contains('fa-trash-can')){
            let valueOfDeleteBtn=e.target.parentElement.value;
            // console.log(e.target.parentElement);
            // console.log(valueOfDeleteBtn);
            const card=document.getElementById('card'+valueOfDeleteBtn);
            card.remove();
            // console.log("delete");
            
        }
        if(e.target.classList.contains('markDonebtn')){
            let markDoneValue=e.target.value;
            document.getElementById('listText'+markDoneValue).style.textDecoration="line-through";
        }
        if(e.target.classList.contains('cardLink')){
            console.log(e.target);
            console.log(e.target.value);
            cardLinkValue=e.target.getAttribute('value');
            card=document.getElementById('card'+cardLinkValue);
            showCard();

        }
        })
        const addToDoList=document.getElementById('Add_list_item_btn');
        addToDoList.addEventListener("click",function(){
        document.getElementById('listItem_popup').style.display="none";
        document.getElementById('main-section').style.filter="none";
        document.getElementById('main-section').style.webkitFilter= "none";
            const listItemName=document.getElementById('listItemInput').value;
            const listNameText=document.getElementById('listItem'+id)
            const listItem=document.createElement('div');
            const listItemSpan=document.createElement('span');
            const markDoneBtn=document.createElement('button');
            markDoneBtn.classList.add('markDonebtn');
            markDoneBtn.setAttribute('value',`${listItemId}`);
            listItemSpan.setAttribute('id',`listText${listItemId}`);
            listItemSpan.innerText=listItemName;
            markDoneBtn.innerText="mark done";
            listItems.style.display="none";
            listItem.appendChild(listItemSpan);
            listItem.appendChild(markDoneBtn);
            document.getElementById('cardBody'+id).append(listItem);
            listItemId++;
        })
}
addItemsToDoList();


function closeItemsToDoList(){
    const closeAddListItem_btn=document.getElementById('Cancel_list_item_btn');
    closeAddListItem_btn.addEventListener("click",function(){
        document.getElementById('listItem_popup').style.display="none";
        document.getElementById('main-section').style.filter="none";
        document.getElementById('main-section').style.webkitFilter= "none";
    })
}
closeItemsToDoList();

// function deleteTodo(){
//     const tasksContainer=document.getElementById('tasks_container');
//     tasksContainer.addEventListener("click",(e)=>{
//         if(e.target.classList.contains('delete_todo_btn')){
//             let valueOfDeleteBtn=e.target.value;
//             // document.removeChild(e.target.parentElement.parentElement);
//             console.log("delete");
//         }
//     })
// }
// // deleteTodo();

function taskContainerClick(){
     const tasksContainer=document.getElementById('tasks_container');
     tasksContainer.addEventListener("click",function(){

     })

}
function showCard(){
    // document.appendChild(card);
    let cards=document.getElementsByClassName('todo_card');
    console.log(cardLinkValue);
    for(let i=0;i<cards.length;i++){
        let a=(cards[i].getAttribute('id'));
        console.log(typeof(a));
        if(!cards[i].getAttribute('id')==='card'+cardLinkValue){
            cards[i].style.display="none";
        }

    }

}
