import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://thumbs.dreamstime.com/b/two-hummingbird-bird-pink-flower-hummingbirds-fiery-throated-hummingbird-flying-next-to-beautiful-bloom-flower-savegre-co-95610310.jpg" />
      <span>{props.message}</span>;
      <div>
        <span>Likes: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
