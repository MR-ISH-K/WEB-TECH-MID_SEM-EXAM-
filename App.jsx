import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <>
      <header className="header" id="home">
        <h1>Bright Future Library</h1>
        <p>Read Today, Lead Tomorrow.</p>
        <p>A place to learn, discover, and build a brighter future.</p>
      </header>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#events">Events</a>
        <a href="#books">Featured Books</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </>
  )
}

function Services() {
  const services = [
    'Book borrowing and returning',
    'Internet and computer access',
    'Quiet reading and study spaces',
    'Educational workshops and literacy programmes',
  ]

  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service}</h3>
            <p>We provide resources and support to help our community learn and grow.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Events() {
  const events = [
    {
      title: 'Children’s Storytelling Day',
      date: 'November 5, 2026',
      description: 'Children will enjoy exciting stories and develop a love for reading.',
    },
    {
      title: 'Community Reading Competition',
      date: 'November 14, 2026',
      description: 'Readers will share their skills and compete in a friendly reading event.',
    },
  ]

  return (
    <section id="events" className="section light">
      <h2>Upcoming Events</h2>
      <div className="grid">
        {events.map((event, index) => (
          <div className="card" key={index}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturedBooks() {
  const books = [
    {
      title: 'Things Fall Apart',
      author: 'Chinua Achebe',
      description: 'A novel exploring Igbo culture and the effects of colonialism.',
    },
    {
      title: 'The Richest Man in Babylon',
      author: 'George S. Clason',
      description: 'Lessons about saving money, managing finances, and building wealth.',
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      description: 'A young shepherd follows his dreams and discovers his purpose.',
    },
  ]

  return (
    <section id="books" className="section">
      <h2>Featured Books</h2>
      <div className="grid">
        {books.map((book, index) => (
          <div className="card book-card" key={index}>
            <div className="book-icon">📚</div>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = {}

    if (name.trim() === '') {
      newErrors.name = 'Please enter your full name.'
    }

    if (email.trim() === '') {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (message.trim() === '') {
      newErrors.message = 'Please enter your message.'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSuccess('Thank you! Your message has been submitted.')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setSuccess('')
    }
  }

  return (
    <section id="contact" className="section light">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p><strong>Address:</strong> Bright Future Library, Nyamata, Rwanda</p>
        <p><strong>Telephone:</strong> +250787788069</p>
        <p><strong>Email:</strong> info@brightfuturelibrary.com</p>
        <p><strong>PERSONAL Email:</strong> ishimwekundaarsene@gmail.com</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your full name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email address"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your message here"
          rows="5"
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send Message</button>
        {success && <p className="success">{success}</p>}
      </form>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="about" className="welcome">
          <h2>Welcome to Bright Future Library!</h2>
          <p>
            Our library is a welcoming community space where students, children, and adults
            can access knowledge, improve their skills, and discover new ideas.
          </p>
          <p>
            We believe that reading and education can transform lives and create a brighter
            future for everyone.
          </p>
        </section>
        <Services />
        <Events />
        <FeaturedBooks />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2026 Bright Future Library. All rights reserved.</p>
        <p>Read Today, Lead Tomorrow.</p>
      </footer>
    </>
  )
}

export default App
