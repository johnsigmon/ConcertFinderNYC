
export default class AjaxAdapterDos{

  constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
  }

  fullPull(searchQuery) {
   console.log('FULLPULL')
    return fetch(`/api/${searchQuery}`).then( r => r.json());
  }
}
