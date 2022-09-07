import './index.scss'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
      <div className='errorMessageContainer'>
        <h1>404</h1>
        <h4>Oups ! La page que vous demandez n'existe pas</h4>
        <Link className='returnLink' to="/">Retourner sur la page d'accueil</Link>
      </div>
      
    )
  }
  
export default ErrorPage