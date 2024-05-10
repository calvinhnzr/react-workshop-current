import { useEffect } from "react"

const Card = (props) => {
  useEffect(() => {
    console.log(props.item)
  }, [])
  return (
    <li>
      <figure>
        <img
          src={"./assets/images/" + props.item.teaserImg}
          alt={props.item.teaserImg}
        />
        <figcaption>
          <h3>{props.item.title}</h3>
          <address>{props.item.author}</address>
          <ul className="tag-list">
            <li>Tag1</li>
            <li>Tag2</li>
          </ul>
        </figcaption>
      </figure>
    </li>
  )
}
export default Card
