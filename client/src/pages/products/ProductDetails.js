import { useOutletContext } from "react-router-dom";
import { FqaDropDown } from "../../components";
function ProductDetails() {
  const Details = useOutletContext();
  const { Description, DetailedImage, QandA } = Details;

  return (
    <>
      {Details && (
        <div className="pD-wrapper">
          <section className="detail-top">
            <img src={DetailedImage} alt="" />
            <p>{Description}</p>
          </section>
          <section className="detail-btm">
            <FqaDropDown Data={QandA} />
          </section>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
