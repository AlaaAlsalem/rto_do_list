const myArr=[
    {
        description:'task1',
        completed:false,
        index:1
    },{
        description:'task2',
        completed:true,
        index:2
    },{
        description:'task3',
        completed:false,
        index:3
    },
]
export function localStorageGtItem (){

return myArr.length;
}
export function localStorageStItem (arr){
myArr.push(arr)
    //return {todos:arr}
}
/*
const store = [];
const localStorageMock = {
  getItem: (key) => store[key],
  setItem: (key, value) => {
    store[key] = value;
  },
};
export default localStorageMock;*/