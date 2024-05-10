import { useEffect } from "react"

const Card = (props) => {
  useEffect(() => {
    console.log(props.item)
  }, [])
  return (
    <li>
      <figure>
        <img src="./assets/images/teaser.jpg" alt="" />
        <figcaption>
          <h3>Title</h3>
          <address>Author</address>
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
