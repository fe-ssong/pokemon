import { useDispatch, useSelector } from "react-redux"

export default function FavoriteButton({ pokemonId }) {
    const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
    const dispatch = useDispatch()
    return (
        <button onClick={(e) => {
            e.stopPropagation()
            dispatch(isFavorite ? favoriteSlice.actions.removeFromFavorite({pokemonId})
             : favoriteSlice.actions.addToFavorite({pokemonId}))
             action.payload.pokemonId = 1
        }}
        className={isFavorite ? "text-[red]" : ''}>
        {isFavorite ?'♥' : '♡'}
        </button>
    )
}