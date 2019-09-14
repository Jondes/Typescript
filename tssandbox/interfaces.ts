/* 
function showTodo( todo: {title: string, text:string}){
    console.log(todo.title +':'+ todo.text);
}

let myTodo = { title:'Trash', text:'Take trash on Sunday evening'}
 showTodo(myTodo); 
 */

 interface Todo {
     title: string;
     text: string;
 }

 function showTodo( todo: Todo){
     console.log(todo.title + ':'+ todo.text);
 }
 let myTodo = {title:'Sunday Trash', text:'Take out the trash'}

 showTodo(myTodo);




