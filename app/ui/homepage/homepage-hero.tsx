// components/Hero.js

export default function Hero() {
    return (
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1500)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for dark background */}
        <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white px-6">
          <div>
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-xl mb-6">Discover amazing content and explore the possibilities.</p>
            <a href="#explore" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Get Started
            </a>
          </div>
        </div>
      </section>
    );
  }
  