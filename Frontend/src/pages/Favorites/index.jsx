import React from 'react'
import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'

function Favorites() {

  let {favorites, setFavorites}=useContext(FavoritesContext)

  return (
    <div>
      
    </div>
  )
}

export default Favorites
