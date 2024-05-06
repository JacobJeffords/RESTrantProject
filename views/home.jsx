const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="rest-rant\public\images\photo-1490474504059-bf2db5ab2348.avif" alt="Chia Fruit Shake" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home


