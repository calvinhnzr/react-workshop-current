const Card = () => {
  return (
    <li>
      <figure>
        <img src="./assets/images/teaser.jpg" alt="alt" />
        <figcaption>
          <h3>Title</h3>
          <address>Author</address>
          <ul class="tag-list">
            <li>Tag1</li>
            <li>Tag2</li>
          </ul>
        </figcaption>
      </figure>
    </li>
  )
}
export default Card
