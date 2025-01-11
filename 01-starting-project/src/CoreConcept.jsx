export default function CoreConcept ({conceptObj}){
    const {title,description,image} = conceptObj;
    return (
<>
    <li style={{listStyle:'none'}}>
        <img src={image} alt="" srcset="" />
        <h2>{title}</h2>
        <span>{description}</span>
    </li>
    </>
    )
}