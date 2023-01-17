import { Link, useLocation } from "react-router-dom";

export default function Breadcrums() {
  const location = useLocation();

  // /help/contact ==> help | contact

  let currentLink = "";

  const crums = location.pathname
    .split("/")
    .filter((crum) => crum !== "")
    .map((crum) => {
      currentLink += `/${crum}`;

      return (
        <div className="crum" key={crum}>
          <Link to={currentLink}>{crum}</Link>
        </div>
      );
    });

  return <div className="breadcrums">{crums}</div>;
}
