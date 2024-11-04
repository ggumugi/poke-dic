import React, { useState, useRef, useCallback } from 'react'
import PokeTemplate from './components/PokeTemplate'
import PokeInsert from './components/PokeInsert'
import PokeList from './components/PokeList'

function App() {
   const [pokemons, setPokemons] = useState([
      {
         id: 1,
         name: '피카츄',
         image: '/images/피카츄.png',
         checked: true,
      },
      {
         id: 2,
         name: '파이리',
         image: '/images/파이리.png',
         checked: true,
      },
      {
         id: 3,
         name: '꼬부기',
         image: '/images/꼬부기.png',
         checked: true,
      },
   ])
   const nextId = useRef(4)
   const onInsert = useCallback(
      (name) => {
         const pokemon = {
            id: nextId.current,
            name,
            image: `/images/${name}.png`,
            checked: true,
         }
         setPokemons(pokemons.concat(pokemon))
         nextId.current += 1
      },
      [pokemons]
   )
   const onRemove = useCallback(
      (id) => {
         const removedPokemons = pokemons.filter((pokomon) => pokomon.id !== id)
         setPokemons(removedPokemons)
      },
      [pokemons]
   )

   const onToggle = useCallback(
      (id) => {
         const togglePokemons = pokemons.map((pokomon) =>
            pokomon.id === id
               ? {
                    ...pokomon,
                    checked: !pokomon.checked,
                 }
               : pokomon
         )
         setPokemons(togglePokemons)
      },
      [pokemons]
   )
   const evolve = (value) => {
      if (value === '고라파덕') {
         value = '골덕'
         return value
      } else if (value === '꼬부기') {
         value = '어니부기'
         return value
      } else if (value === '어니부기') {
         value = '거북왕'
         return value
      } else if (value === '야돈') {
         value = '야도란'
         return value
      } else if (value === '이상해씨') {
         value = '이상해풀'
         return value
      } else if (value === '이상해풀') {
         value = '이상해꽃'
         return value
      } else if (value === '파이리') {
         value = '리자드'
         return value
      } else if (value === '리자드') {
         value = '리자몽'
         return value
      } else if (value === '푸린') {
         value = '푸크린'
         return value
      } else if (value === '피카츄') {
         value = '라이츄'
         return value
      } else {
         return value
      }
   }

   const notevolve = (value) => {
      if (value === '골덕') {
         return true
      } else if (value === '거북왕') {
         return true
      } else if (value === '야도란') {
         return true
      } else if (value === '라이츄') {
         return true
      } else if (value === '리자몽') {
         return true
      } else if (value === '메타몽') {
         return true
      } else if (value === '이상해꽃') {
         return true
      } else if (value === '푸크린') {
         return true
      } else if (value === '야옹') {
         return true
      } else {
         return false
      }
   }
   const onEvolve = useCallback(
      (id) => {
         const evolvePokemons = pokemons.map((pokemon) =>
            pokemon.id === id
               ? {
                    ...pokemon,
                    name: evolve(pokemon.name),
                    image: `/images/${evolve(pokemon.name)}.png`,
                 }
               : pokemon
         )
         setPokemons(evolvePokemons)
      },
      [pokemons]
   )
   return (
      <PokeTemplate>
         <PokeInsert onInsert={onInsert} />
         <PokeList pokemons={pokemons} onRemove={onRemove} onToggle={onToggle} onEvolve={onEvolve} notevolve={notevolve} />
      </PokeTemplate>
   )
}

export default App
