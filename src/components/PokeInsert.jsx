import './css/PokeInsert.css'
import React, { useState, useCallback } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
function PokeInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = useCallback((e) => setValue(e.target.value), [])
   const onSubmit = useCallback(
      (e) => {
         e.preventDefault()
         onInsert(value)
         setValue('')
      },
      [value, onInsert]
   )
   return (
      <form className="PokeInsert" onSubmit={onSubmit}>
         <div className="add">
            <input type="text" placeholder="포켓몬 이름을 입력해주세요" value={value} onChange={onChange} />
            <button type="submit">
               <IoMdAddCircleOutline />
            </button>
         </div>
      </form>
   )
}

export default PokeInsert
