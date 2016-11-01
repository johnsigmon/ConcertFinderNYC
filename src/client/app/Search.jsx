import React        from 'react';
import AjaxAdapter  from '../helpers/ajaxAdapter.js'

const ajax = new AjaxAdapter(fetch);

export default function Search(props){
  const handleSubmit = function(e){
    console.log(e.target.q.value)
    props.onSubmitSearch(e.target.q.value);

  }
  return (
    <div>
    <form action="/" onSubmit={handleSubmit} >
      <input type="text" name="q"/>
      <input type="submit" value="submit"></input>
    </form>
    </div>
  )

}
