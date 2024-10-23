
const List=(props)=>{
    return(
        <>
        < div className={`pfp ${props.color}`}>
        <img src={props.image} alt="" className={`img ${props.Image}`}/>
            <h1 className={`head ${props.header}`}>{props.name}</h1>
            <p className={`text ${props.text}`}>${props.price}</p>
            <p className={`loc ${props.loc}`}>{props.description}</p>
        </div>
        </>
    )
}

export default List