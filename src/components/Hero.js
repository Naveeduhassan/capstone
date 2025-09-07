import greekSalad from '../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon dessert.jpg'
import delivery from '../assets/delivery.jpg'

export default function Hero() {
  const hero = [
    {
      title: "Greek Salad",
      image: greekSalad,
      price: "$10.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
      title: "Bruchetta",
      image: bruchetta,
      price: "$8.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil along with fresh tomatoes and basil."
    },
    {
      title: "Lemon Dessert",
      image: lemonDessert,
      price: "$5.00",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined and made with love."
    }
  ]
  return (
    <section className='hero'>
      <div className='hero-text'>
        <h1 className='hero-title'>This weeks Specials!</h1>
        <button className='hero-button'>Online Menu</button>
      </div>
      <div className='hero-cards'>
        {hero.map((item, idx) => (
          <div className='hero-card' key={idx}>
            <img className='hero-card-image' src={item.image} alt={item.title} />
            <div className='hero-card-content'>
              <div className='hero-card-header'>
                <h3 className='hero-card-title'>{item.title}</h3>
                <span className='hero-card-price'>{item.price}</span>
              </div>
              <div className='hero-card-description'>
                <p>{item.description}</p>
              </div>
              <a href='#' className='hero-card-order'>Order a delivery
                <img src={delivery} alt='Delivery' className='hero-card-delivery-icon' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
