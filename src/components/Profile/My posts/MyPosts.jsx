import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.posts}>
          <h2>My post</h2>
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          
          <div>
            <Post message='Hi, how are you?' likesCount='15'/>
            <Post message='It`s my first post' likesCount='20'/>
          </div>
        </div>
    )
}

export default MyPosts;