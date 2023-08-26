import MyPosts from './My posts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
       <div className={classes.content}>
        <div>
          <img className={classes.header} src='https://www.freewebheaders.com/wp-content/gallery/beautiful-landscape/cache/pink-purple-sky-and-spring-nature-landscape-header.jpg-nggid044745-ngg0dyn-1280x720x100-00f0w010c010r110f110r010t010.jpg'/>
        </div>

        <div className={classes.avatar}>
            <img src='https://thumbs.dreamstime.com/b/two-hummingbird-bird-pink-flower-hummingbirds-fiery-throated-hummingbird-flying-next-to-beautiful-bloom-flower-savegre-co-95610310.jpg'/>
        </div>
        <div className={classes.descr}>
            <h1 className={classes.descr_name}>Nazarii Bezkorovainyi</h1>
            <p className={classes.descr_nick}><i>@nazarii</i></p>
            <hr />
            <div className={classes.descr_about}>
               <p>18yo</p>
               <p>Student IASA</p>
            </div>
            
        </div>

        <MyPosts />
      </div>
    )
}

export default Profile;