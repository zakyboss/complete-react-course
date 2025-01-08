export default function Content ({title,description,image}){
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