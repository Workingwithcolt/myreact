import { GenericButton } from "./GenericButton"

export const GenericCard = ({ title, description,handleDelete }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid blue'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <GenericButton
                buttonText={"Delete"}
                type={"button"}
                onClick={handleDelete}
            />
        </div>
    )
}