import { Link } from 'react-router-dom'; // Import Link
import './Product.css'; // Import your stylesheet
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';


const Product = () => {
  const products = [
    { id: 1, imgSrc: p1, hoverText: 'Text for Image 1' },
    { id: 2, imgSrc: p2, hoverText: 'Text for Image 2' },
    { id: 3, imgSrc: p3, hoverText: 'Text for Image 2' },
    { id: 4, imgSrc: p4, hoverText: 'Text for Image 2' },
    { id: 5, imgSrc: p5, hoverText: 'Text for Image 2' },

  ];

  return (
    <div className="product-container">
      <div className="header-banner">
        Our Listed Product
      </div>
      <div className="product-images">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.imgSrc} alt={`Product ${product.id}`} />
            <div className="hover-text">{product.hoverText}</div>
            <Link to="/contact" className="contact-link">
              <button className="contact-button">Contact</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
