import { useSearchparams } from "react-router-dom"
import { selectPokemonByRegExp } from "../RTK/selector"

export default function Search() {
    const [searchParams] = useSearchParams()
    const param = searchParams.get('pokemon')
    const reg = getRedExp(param)

    const pokemon = useSelector(selectPokemonByRegExp(reg))
    console.log(pokemon)
    return (
        <>
            {pokemon.map(el => <Card key={el.id} pokemon={el} />)}
        </>
    )
}