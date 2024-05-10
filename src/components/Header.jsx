const Header = () => {
  return (
    <header class="main-header">
      <nav class="main-navigation">
        <a href="/" class="logo">
          <h1>
            <img
              src="./assets/images/projectsurvival-logo.svg"
              alt="ProjectSurvival4All Logo"
            />
          </h1>
        </a>

        <div class="is-hidden">
          <form class="keyword-search for-large-viewports">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Suchen"
            />
            <button type="submit">
              <span class="icon icon--l">search</span>
            </button>
          </form>
        </div>

        <div class="main-menu-trigger hambuger-menu">
          <input type="checkbox" id="hambuger-manu-checkbox" />
          <label for="hambuger-manu-checkbox">
            <span></span>
            <span></span>

            <span></span>
          </label>
          <ul>
            <li>News</li>
            <li>Barrierefreiheit</li>
            <li>DE</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
