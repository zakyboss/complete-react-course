export default function Content ({conceptObj}){
    const {title,description,image} = conceptObj;
    return (
<div>
    <li>
        <img src={image} alt="" srcset="" />
        <h2>{title}</h2>
        <span>{description}</span>
    </li>
</div>
    )
}