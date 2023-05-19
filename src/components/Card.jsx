const Card = ({children, width})=>{
    return(
        <div className={`${width} bg-secondary shadow-xl rounded-lg m-2 hover:transform hover:scale-105 hover:shadow-2xl`}>
            {children}
        </div>
    )
}

export default Card