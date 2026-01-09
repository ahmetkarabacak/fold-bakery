'use client';

import { motion } from 'framer-motion';
import { Croissant, Wheat, Sandwich, Coffee } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Croissants',
      description: 'Hand-laminated layers of buttery perfection',
      icon: Croissant,
      color: 'bg-buttery-yellow',
    },
    {
      id: 2,
      name: 'Sourdough Bread',
      description: 'Naturally fermented, artisanal loaves',
      icon: Wheat,
      color: 'bg-golden-brown',
    },
    {
      id: 3,
      name: 'Gourmet Sandwiches',
      description: 'Premium ingredients, crafted daily',
      icon: Sandwich,
      color: 'bg-buttery-yellow',
    },
    {
      id: 4,
      name: 'Specialty Coffee',
      description: 'Expertly roasted, perfectly brewed',
      icon: Coffee,
      color: 'bg-dark-roast',
    },
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section id="home" className="min-h-screen md:h-[80vh] flex items-center justify-center bg-gradient-to-b from-buttery-yellow to-off-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-dark-roast mb-6 leading-tight"
          >
            Fold: The Art of Layers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-dark-roast/80 mb-8 max-w-2xl mx-auto"
          >
            Where tradition meets innovation in every fold, every layer, every bite.
          </motion.p>
          <motion.a
            href="#products"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="inline-block bg-golden-brown text-off-white px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-golden-brown/90 transition-colors min-h-[44px] flex items-center justify-center"
          >
            View Menu
          </motion.a>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-roast text-center mb-12 md:mb-16"
          >
            Our Offerings
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`${product.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto`}>
                    <Icon 
                      size={32} 
                      className={product.color === 'bg-dark-roast' ? 'text-off-white' : 'text-dark-roast'} 
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-dark-roast text-center mb-2 md:mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base text-dark-roast/70 text-center">
                    {product.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-buttery-yellow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/bakery-image.jpeg"
                  alt="Fold Bakery - Artisan baking process"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-roast mb-4 md:mb-6">
                Our Story
              </h2>
              <p className="text-base md:text-lg text-dark-roast/80 mb-4 leading-relaxed">
                At Fold, we believe that the art of baking lies in the layers. Our croissants are crafted using traditional French lamination techniques, where butter is carefully folded into dough, creating hundreds of delicate layers that result in the perfect flaky texture.
              </p>
              <p className="text-base md:text-lg text-dark-roast/80 mb-4 leading-relaxed">
                Each morning, our bakers begin before dawn, hand-laminating dough with precision and care. This meticulous process, passed down through generations, ensures that every croissant, every loaf of sourdough, and every pastry that leaves our ovens is a masterpiece of flavor and texture.
              </p>
              <p className="text-base md:text-lg text-dark-roast/80 leading-relaxed">
                We source only the finest ingredients—European butter, organic flour, and locally roasted coffee—to create an experience that honors both tradition and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-dark-roast text-off-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 md:mb-4">Fold</h3>
              <p className="text-sm md:text-base text-off-white/80 max-w-xs">
                The Art of Layers
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left">
              <div>
                <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Quick Links</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>
                    <a href="#home" className="hover:text-golden-brown transition-colors min-h-[44px] flex items-center justify-center md:justify-start">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="hover:text-golden-brown transition-colors min-h-[44px] flex items-center justify-center md:justify-start">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-golden-brown transition-colors min-h-[44px] flex items-center justify-center md:justify-start">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Contact</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="min-h-[44px] flex items-center justify-center md:justify-start">
                    <a href="mailto:hello@foldbakery.com" className="hover:text-golden-brown transition-colors">
                      hello@foldbakery.com
                    </a>
                  </li>
                  <li className="min-h-[44px] flex items-center justify-center md:justify-start">
                    <a href="tel:+1234567890" className="hover:text-golden-brown transition-colors">
                      (123) 456-7890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 md:mt-12 pt-8 border-t border-off-white/20 text-center text-sm md:text-base text-off-white/60">
            <p>&copy; {new Date().getFullYear()} Fold Bakery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

