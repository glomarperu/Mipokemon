import React, { useEffect, useRef, useState } from 'react'
import { Pokemon, Result } from '../interface/pokemon.nterface'
import axios from 'axios';
import { PokemonRow } from './PokemonRow';
import { usePokemon } from '../hook/usePokemon';

export const PokemonPage = () => {

    const {pokemons, prevPage, nextPage} = usePokemon();

    return (
        <>
            <h3>Lista de Pokemones</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foto</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemons?.map((pokemon) => (
                            <PokemonRow pokemon={pokemon}/>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button className='buttonPagination' onClick={ prevPage }>Prev</button>
                <button className='buttonPagination' onClick={ nextPage }>Next</button>
            </div>
        </>
    )
}
