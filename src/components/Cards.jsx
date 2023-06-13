const Card = ({image, title, description, characters, action}) => {
    return(
        <div className="book-card">
            <div className="book-gradient">
                <img className="book-image" src={image} alt={title} />
            </div>
            <h2 className="book-title">{title}</h2>
            <p className="book-description">{description}</p>
            <button onClick={() => action(title, characters)} className="button">Print Details</button>
        </div>
    )
}

export default Card;