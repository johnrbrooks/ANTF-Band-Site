import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Shows () {
    return (
        <div>
            <div className="home-page">
                <Nav />
                <h1>Shows</h1>
            </div>
        </div>
    )
}