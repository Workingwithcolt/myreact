export const GenericButton = ({ onClick = () => { }, buttonText, type }) => {
    return (
        <button style={{
            backgroundColor: 'red',
            borderRadius: '5px'
        }} type={type} onClick={onClick}>{buttonText}</button>
    )
}