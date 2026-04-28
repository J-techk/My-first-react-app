import "./Courses.css";

const Courses = () => {
  return (
    <div>
      <section className="Course">
        <h1>Courses We Offer</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
          ipsam!
        </p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quod odio mollitia doloribus deleniti porro explicabo quo, aliquid
              quas nisi.
            </p>
          </div>

          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quod odio mollitia doloribus deleniti porro explicabo quo, aliquid
              quas nisi.
            </p>
          </div>

          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quod odio mollitia doloribus deleniti porro explicabo quo, aliquid
              quas nisi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
