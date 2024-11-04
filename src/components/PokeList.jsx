import './css/PokeList.css'
import PokeListItem from './PokeListItem'

function PokeList({ pokemons, onRemove, onToggle, onEvolve, notevolve }) {
   return (
      <div className="PokeList">
         {pokemons.map((pokemon) => (
            <PokeListItem pokemon={pokemon} key={pokemon.id} onRemove={onRemove} onToggle={onToggle} onEvolve={onEvolve} notevolve={notevolve} />
         ))}
      </div>
   )
}

export default PokeList
