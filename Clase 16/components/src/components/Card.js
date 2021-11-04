import React from 'react'

const Card = ( { id, title, url } ) => {

    return (
        <>
            <div className="col-md-3 col-xs-12">
                <div className="card" >
                    <img src={url} className="card-img-top" alt={id + ' - ' + title} />
                    <div className="card-body">
                        <p className="card-text"><a href={url}>{title}</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
