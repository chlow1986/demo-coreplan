// A mock function to mimic making an async request for data
import Content from '../typings/Content';

export function fetchContent() {
  return new Promise<{ data: Content }>(async (resolve, reject) =>{
    const response = await fetch('https://reqres.in/api/users?page=2');
    if(response){
      resolve(response.json());
    }else{
      reject('unknown error')
    }
  });
}
