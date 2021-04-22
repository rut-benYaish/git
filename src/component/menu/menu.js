import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/home'>home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/producs'>producs</Link>
                </li>
                <li>
                    <Link to='/More sites'>More sites</Link>
                </li>
            </ul>
        </nav>
    )
}