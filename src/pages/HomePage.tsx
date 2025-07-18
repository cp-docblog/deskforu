import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowRight, Users, Wifi, Coffee, Shield, Calendar, MapPin } from 'lucide-react';

interface WorkspaceType {
  id: string;
  name: string;
  description: string;
  price: number;
  price_unit: string;
  image_url?: string;
  features: string[];
  is_active: boolean;
}

const HomePage: React.FC = () => {
  const [workspaceTypes, setWorkspaceTypes] = useState<WorkspaceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkspaceTypes();
  }, []);

  const fetchWorkspaceTypes = async () => {
    try {
      const { data, error } = await supabase
        .from('workspace_types')
        .select('*')
        .eq('is_active', true)
        .order('price', { ascending: true });

      if (error) throw error;
      setWorkspaceTypes(data || []);
    } catch (error) {
      console.error('Error fetching workspace types:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Perfect Workspace Awaits
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium coworking spaces designed for productivity, collaboration, and growth. 
              Join our community of innovators and entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
              >
                Book Your Space
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose Desk4U?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to work efficiently and professionally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High-Speed Internet</h3>
              <p className="text-gray-600">
                Lightning-fast fiber internet with backup connections to keep you online
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vibrant Community</h3>
              <p className="text-gray-600">
                Connect with like-minded professionals and grow your network
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Amenities</h3>
              <p className="text-gray-600">
                Complimentary coffee, printing services, and modern facilities
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
              <p className="text-gray-600">
                24/7 secure access with keycard entry and security cameras
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
              <p className="text-gray-600">
                Book by the hour, day, or month with easy online reservations
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">
                Conveniently located in the heart of the business district
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Workspace Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect space for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
              </div>
            ) : workspaceTypes.length === 0 ? (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No workspace types available.</p>
              </div>
            ) : (
              workspaceTypes.map((workspace) => (
                <div key={workspace.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{workspace.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {workspace.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-black">
                        ${workspace.price}/{workspace.price_unit}
                      </span>
                      <Link
                        to="/booking"
                        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have made Desk4U their workspace of choice
          </p>
          <Link
            to="/booking"
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center"
          >
            Book Your First Day
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;