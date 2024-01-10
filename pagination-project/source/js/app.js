const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];
let list = document.getElementById('list')
let pagination = document.getElementById('pagination')
 
let currectPage = 1;
let row = 5

function displayUserList(allUSerArray,userlist,row,currectPage) {
    userlist.innerHTML = ''
    
    let endlist = currectPage * row ;
    let startlist= endlist - row;
    
    let paigeinatedUser = allUSerArray.slice(startlist , endlist)
    
    paigeinatedUser.forEach( function(user) {
        
        let userAdd = document.createElement('div') 
        userAdd.classList.add('item')
        userAdd.innerHTML = user.name + ' ' + user.family;
        userlist.appendChild(userAdd);
                console.log(userlist )
    });
}

function setupPagination(allUesrsArray,pageContainer, row) {
    pageContainer.innerHTML = ''

    let pagecount = Math.ceil(allUesrsArray.length / row)
    
    for (let i = 1; i < pagecount+1 ; i++) {
    
        let btn = ActiveButton(i , allUesrsArray)
        pageContainer.appendChild(btn)
    }
}

function ActiveButton(page , allUesrsArray) {
    let button = document.createElement('button')
    button.innerHTML = page;

    if (page === currectPage) {
        button.classList.add('active')
    }
    button.addEventListener('click',function () {
        currectPage = page;
        displayUserList(allUesrsArray, list, row, currectPage);

        let prevBtn = document.querySelector('button.active')
        prevBtn.classList.remove('active')

        button.classList.add('active')

    })


    return button
}

displayUserList(listItems, list, row, currectPage)
setupPagination(listItems,pagination,row)