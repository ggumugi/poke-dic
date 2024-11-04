import './css/PokeTemplate.css'

function PokeTemplate({ children }) {
   return (
      <div className="PokeTemplate">
         <div className="app-title">
            <img src="/images/logo.png" alt="로고" />
            &nbsp; 포켓몬 도감
         </div>
         <div className="content">{children}</div>
      </div>
   )
}

export default PokeTemplate