import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Hot Desk',
      price: '$25',
      period: 'per day',
      monthlyPrice: '$300',
      description: 'Perfect for freelancers and remote workers',
      features: [
        'Flexible desk space',
        'High-speed internet',
        'Printing services',
        'Complimentary coffee',
        'Common area access',
        '2 free meeting room hours/month',
        'Phone booth access'
      ],
      notIncluded: [
        'Dedicated desk',
        'Storage locker',
        'Private office'
      ],
      popular: false
    },
    {
      name: 'Private Office',
      price: '$150',
      period: 'per day',
      monthlyPrice: '$1,800',
      description: 'Ideal for teams and established businesses',
      features: [
        'Private lockable office',
        'Dedicated desk space',
        'High-speed internet',
        'Printing services',
        'Complimentary coffee',
        'Storage solutions',
        '5 free meeting room hours/month',
        'Phone booth access',
        'Reception services'
      ],
      notIncluded: [
        'Parking (additional $15/day)'
      ],
      popular: true
    },
    {
      name: 'Meeting Room',
      price: '$50',
      period: 'per hour',
      monthlyPrice: '$400',
      description: 'Professional meeting spaces for any occasion',
      features: [
        'Private meeting room',
        'AV equipment included',
        'Whiteboard and flip charts',
        'High-speed internet',
        'Complimentary refreshments',
        'Reception support',
        'Flexible booking'
      ],
      notIncluded: [
        'Catering (available on request)',
        'Extended setup time'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Parking',
      price: '$15/day',
      description: 'Secure parking in our dedicated garage'
    },
    {
      name: 'Storage Locker',
      price: '$25/month',
      description: 'Personal storage space for your belongings'
    },
    {
      name: 'Virtual Office',
      price: '$99/month',
      description: 'Business address and mail handling services'
    },
    {
      name: 'Phone Answering',
      price: '$149/month',
      description: 'Professional phone answering in your company name'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Choose the perfect plan for your work style and business needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
                  plan.popular ? 'ring-2 ring-yellow-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-yellow-500 text-black text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                    <div className="text-sm text-gray-500 mt-1">
                      Monthly: {plan.monthlyPrice}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/booking"
                    className={`w-full py-3 px-6 rounded-md font-semibold transition-colors inline-block text-center ${
                      plan.popular
                        ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your workspace experience with our additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-2">{addon.name}</h3>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="text-xl font-bold text-yellow-500">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Pricing FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our pricing and membership options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Are there any setup fees?</h3>
              <p className="text-gray-600">
                No setup fees! You only pay for the time you use. We believe in transparent, 
                straightforward pricing with no hidden costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Can I switch between plans?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your membership at any time. 
                Changes take effect at the start of your next billing cycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Do you offer discounts for long-term commitments?</h3>
              <p className="text-gray-600">
                Yes! We offer 10% discount for 6-month commitments and 15% discount for 
                annual memberships. Contact us for custom enterprise pricing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">What's your cancellation policy?</h3>
              <p className="text-gray-600">
                We require 30 days notice for cancellation. You'll have access to your 
                workspace until the end of your billing period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of professionals and take your productivity to the next level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Book a Tour
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;