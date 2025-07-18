import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Desk4U
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Empowering professionals with inspiring workspaces and meaningful connections
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Desk4U was born from a simple idea: create workspaces that inspire 
                creativity, foster collaboration, and support the evolving needs of modern professionals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a single coworking space has grown into a thriving community of 
                entrepreneurs, freelancers, and remote workers who believe in the power of shared 
                spaces and collective growth.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve over 500 members across our locations, providing 
                not just workspace, but a home for innovation and professional development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 h-96 rounded-lg">
              {/* Placeholder for image */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building meaningful connections and fostering collaboration among our members
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Providing premium facilities and services that exceed expectations
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing new ideas and technologies to enhance the workspace experience
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                Dedicated to helping our members achieve their professional goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Desk4U
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-500">
                Serial entrepreneur with a passion for creating inspiring workspaces
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-gray-600 mb-2">Operations Manager</p>
              <p className="text-sm text-gray-500">
                Ensures smooth operations and exceptional member experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-gray-600 mb-2">Community Manager</p>
              <p className="text-sm text-gray-500">
                Builds connections and organizes events for our vibrant community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <p className="text-white">Active Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">3</div>
              <p className="text-white">Locations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <p className="text-white">Meeting Rooms</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">99%</div>
              <p className="text-white">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;