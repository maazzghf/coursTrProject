

function Button({label, className}){
    return(
        <>
            <button className={className} style={{borderRadius: 5}}>
                {label}
            </button>
        </>
    )
}


export default Button;