import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const icons = [FaFacebookF, FaTwitter, FaPinterestP, FaInstagram];
  return (
    <section>
      <div>
        <h2>
          Note<span>Book</span>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
          perferendis.
        </p>
      </div>
      <div>
        <h3>Blogs</h3>
        <ul>
          <li>Travel</li>
          <li>Technology</li>
          <li>Lifstyle</li>
          <li>Fashion</li>
          <li>Business</li>
        </ul>
      </div>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>FAQ</li>
          <li>Term Condition</li>
          <li>Support </li>
          <li>Privacy</li>
        </ul>
      </div>
      <div>
        <div>
          <h3>Subscribe for NewsLetter </h3>
          <div>
            <input name="article" value="" />
            <button>Subscribe</button>
          </div>
        </div>
        <div>
          <h3>Follow On</h3>
          <ul>
            {icons.map((icon, i) => (
              <li key={i}>{icon}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
