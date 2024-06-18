export const GenericInput = ({ onChange, value, name, required }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
            <label>{name}</label>
            <input onChange={(e) => onChange(e.target.value)} value={value} name={name} required={required} />
        </div>
    )
}