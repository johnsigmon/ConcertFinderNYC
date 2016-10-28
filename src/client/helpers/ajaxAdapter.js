export default class AjaxAdapter{

  constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
  }

  fullPull(currentSearch) {
    return fetch(`/api/${currentSearch}`).then( r => r.json() );
  }

}
