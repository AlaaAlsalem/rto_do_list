
export function localStorageGtItem () {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export function localStorageStItem(todo){
   localStorage.setItem('todos', JSON.stringify(todo));
   return true
}


