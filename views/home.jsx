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
                    <img src="rest-rant\public\css\images\anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg" alt="Raspberry Cake" />
                    <div>
                        Photo by <a href="https://unsplash.com/@anna_tukhfatullina?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anna Tukhfatullina</a> on <a href="https://unsplash.com/">Unsplash</a>
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


