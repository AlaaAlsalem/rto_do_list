import { createlocalstorage } from "../src/script";
import {localStorageGtItem,localStorageStItem} from './__mocks__/helper';
jest.mock('./helper.js')
describe('add methode', ()=> {


    test('Add item', ()=> {
        document.body.innerHTML = '<input id=\'add-bar\' value=\'Test Result Check\'/>';
        const inputBox = document.querySelector('#add-bar')
        const arr =  {
            description:'task4',
            completed:false,
            index:4
        }
       
        localStorageStItem(arr);
        const result = localStorageGtItem()
        expect(result).toBe(4);
    }),
    test('add to locale storage',()=> {

    })
    /*,
    test('Add to locale storage', ()=> {
        localStorageMock.setItem('todos',arr)
        expect(localStorageMock.getItem('todos')).toHaveLength(1);
    }

)*/
}) 