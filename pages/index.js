import Header from '../reactComponents/Header'
import css from '../CSS/app.css'

export default () => <div>

<Header />
    <div className = {css.landing_page}>
        <h2>Andromeda</h2>
        <p>Andromeda is a game that takes place in the Andromeda Galaxy shortly after humanity has discovered faster than light travel
            A number of corporations have pooled their resources to build a large warp rail facility in the Andromeda Galaxy to ship materials
            back to the Milky Way.
        </p>
        <p>This website serves to document the various craftable items that can be used by the player.  Users can compare similar items to see how they differ
            and can see what the requirements are to craft items.
        </p>
    </div>
</div>