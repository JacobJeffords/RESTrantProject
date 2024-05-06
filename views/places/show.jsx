const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div>
                    <h1>{data.place.name}</h1>
                </div>
                <div>
                    <img src={data.place.pic} />
                </div>
                <div>
                    <p>Located in {data.place.city}, {data.place.state}<br></br>
                        Serving {data.place.cuisines}</p>
                </div>

                <div>
                    <h2>Ratings</h2>
                    <p>Not yet rated</p>
                </div>

                <div>
                    <h2>Comments</h2>
                    <p>No comments available</p>
                </div>

                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>

            </main>
        </Def>
    )
}

module.exports = show
