import Comments from "./comments/Comments";
import Header from "./Header";

const App = () => {
  return (

    
    <div className="commentSection">
      <br></br>
      
      
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
<br></br>
<br></br>
<Header/>

    </div>
  );
};

export default App;
