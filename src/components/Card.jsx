const Card = ({children})=>{
    return(
        <div className="w-1/4 bg-secondary shadow-xl rounded-lg m-2 hover:transform hover:scale-105 hover:shadow-2xl">
            {children}
        </div>
    )
}

export default Card