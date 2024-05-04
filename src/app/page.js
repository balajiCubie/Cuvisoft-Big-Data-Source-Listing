import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";


const generateStarRating = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      ); // Full star
    } else {
      stars.push(
        <span key={i} className="text-gray-300">
          &#9733;
        </span>
      ); // Empty star
    }
  }
  return stars;
};
export default function Home() {
  return (
    <div>
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}
