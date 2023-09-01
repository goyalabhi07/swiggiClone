const RestroCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
        <div className='card' onClick={() => { }}>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <h2>{name}</h2>
            <div>{cuisines?.join(', ')}</div>
            <h4>{avgRating} Stars</h4>
        </div>
    )
}

export default RestroCard;