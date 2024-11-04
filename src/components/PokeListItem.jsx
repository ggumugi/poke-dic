import classnames from 'classnames'
import './css/PokeListItem.css'

function PokeListItem({ pokemon, onRemove, onToggle, onEvolve, notevolve }) {
   const { id, name, image, checked } = pokemon
   return (
      <div className="item">
         <img src={image} alt={name} width="150" className={classnames('pic', { on: checked })} onDoubleClick={() => onToggle(id)} />
         <p>{name}</p>
         <button className="evolve" onClick={() => onEvolve(id)} disabled={notevolve(name)}>
            진화하기!
         </button>
         <button className="out" onClick={() => onRemove(id)}>
            도감에서 빼기
         </button>
      </div>
   )
}

export default PokeListItem
