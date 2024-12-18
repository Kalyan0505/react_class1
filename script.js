const MyApp = () => {
  return (
    <div class="container">
      <h1>Learn Web Development</h1>
      <p>
        Welcome to the MDN learning area. This set of articles aims to guide
        complete
        <br></br>
        beginners to web development with all they need to start coding websites
        <br></br>
        <br></br>
        The aim of this area of MDN is not to take you from "beginner" to
        "expert" but to
        <br></br>
        take you from "beginner" to "comfortable". From there you should be able
        to start
        <br></br>
        making your way, learning from <span class="id">the rest of MDN</span>,
        and other intermediate to
        <br></br>
        advanced resources that assumes a lot of previous knowledged.
        <br></br>
        <br></br>
        If you're a complete beginner, web development can be challenging - we
        will hold
        <br></br>
        your hand and provide anough detail for you to feel comfortable and
        learn the topics
        <br></br>
        properly. You should feel at home whether yo'ure a student learning web
        <br></br>
        development (on your own or part of a class), a teacher looking for a
        class
        <br></br>
        materials, a hobbyist, or someone who just wants to understand more
        about how
        <br></br>
        web technologies work.
      </p>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.querySelector("#root"));
