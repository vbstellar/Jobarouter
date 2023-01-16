import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>{career.location}</p>
        </Link>
      ))}
    </div>
  );
}

//loader function
export const careerLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  return res.json();
};
