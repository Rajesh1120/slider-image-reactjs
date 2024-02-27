

export default function Image({image}) {
    return(
        <> 
        <img src={require(`../src/assets/${image}`)} alt={image} />
        </>
    )
}