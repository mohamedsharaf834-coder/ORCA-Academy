import { useEffect } from "react";

export default function HomePage() {
  // تفعيل smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="font-sans">
      {/* شريط التنقل */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <ul className="flex justify-center space-x-8 py-4 text-lg font-semibold">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      {/* الهيرو مع اللوجو */}
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <img src="/ORCA2.png" alt="Logo" className="w-48 h-48 mb-6 drop-shadow-2xl" />
        <h1 className="text-5xl font-bold mb-4">ORCA Swimming Academy</h1>
        <p className="text-lg">Swim with confidence. Train like a pro.</p>
      </section>

      {/* سيكشن عن الأكاديمية */}
      <section id="about" className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="max-w-xl text-center">
          ORCA Academy is dedicated to teaching swimming with professional coaching and personalized training plans.
        </p>
      </section>

      {/* سيكشن الخدمات */}
      <section id="services" className="h-screen flex flex-col justify-center items-center bg-white">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <ul className="space-y-3 text-lg">
          <li>🏊 Swimming Classes for Kids</li>
          <li>🏋️ Fitness & Aqua Training</li>
          <li>🎯 Competitive Swim Coaching</li>
        </ul>
      </section>

      {/* سيكشن التواصل */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center bg-gray-200">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p>📞 01012201021</p>
        <p>📍 Luxor & Armant</p>
      </section>
    </div>
  );
}
