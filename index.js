let filterInput= document.getElementById('filter-input');
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // get value of input
    let filterValue = filterInput.value.toLowerCase(); 

    // get the ul
    let names= document.getElementById('names');
    // get items
    let contactList= names.querySelectorAll('.collection-item')
    
    // loop through contactList
    for (let i = 0; i < contactList.length; i++) {
        let a = contactList[i].getElementsByTagName('a')[0];
        console.log(a);
        // if matches
        if(a.innerHTML.toLowerCase().indexOf(filterValue)== 0){
            contactList[i].style.display ='';
        }else{
            contactList[i].style.display = 'none';
        }
    }
}
