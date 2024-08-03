import planMainImage from "src/assets/plan-main-image.png";

export function StartPlanSection() {
  return (
    <section className="mb-[150px]">
      <figure>
        <img src={planMainImage} alt="Start Plan Main Image" />
        <div>
          <h1>Start your free trial today!</h1>
          <p>
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <button>Start a Free Trail</button>
      </figure>
    </section>
  );
}

export default StartPlanSection;
