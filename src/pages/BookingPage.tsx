import React, { useState } from 'react';
import { useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../contexts/BookingContext';
import { supabase } from '../lib/supabase';

interface WorkspaceType {
  id: string;
  name: string;
  description: string;
  price: number;
  price_unit: string;
  features: string[];
  is_active: boolean;
}

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const { setBookingData } = useBooking();
  const [workspaceTypes, setWorkspaceTypes] = useState<WorkspaceType[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    workspaceType: '',
    date: '',
    timeSlot: '',
    duration: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerWhatsapp: ''
  });

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

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const durations = [
    { value: '1-hour', label: '1 Hour', multiplier: 1 },
    { value: '2-hours', label: '2 Hours', multiplier: 2 },
    { value: '4-hours', label: '4 Hours', multiplier: 4 },
    { value: '1-day', label: '1 Day', multiplier: 1 },
    { value: '1-week', label: '1 Week', multiplier: 7 },
    { value: '1-month', label: '1 Month', multiplier: 30 }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const calculatePrice = () => {
    const workspace = workspaceTypes.find(w => w.name === formData.workspaceType);
    const duration = durations.find(d => d.value === formData.duration);
    
    if (!workspace || !duration) return 0;
    
    return workspace.price * duration.multiplier;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const totalPrice = calculatePrice();
    
    setBookingData({
      ...formData,
      totalPrice
    });
    
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Workspace
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Reserve your ideal workspace in just a few simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Workspace Selection */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Select Workspace Type
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <label
                      key={workspace.name}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.workspaceType === workspace.name
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="workspaceType"
                        value={workspace.name}
                        checked={formData.workspaceType === workspace.name}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <h4 className="font-semibold text-black">{workspace.name}</h4>
                        <p className="text-yellow-600 font-bold">${workspace.price}/{workspace.price_unit}</p>
                      </div>
                    </label>
                  ))
                  )}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Select Time
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Choose time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Duration Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Select duration</option>
                  {durations.map((duration) => (
                    <option key={duration.value} value={duration.value}>
                      {duration.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Customer Information */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="customerWhatsapp"
                      value={formData.customerWhatsapp}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              {formData.workspaceType && formData.duration && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">Price Summary</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Cost:</span>
                    <span className="text-2xl font-bold text-yellow-600">${calculatePrice()}</span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
                >
                  Proceed to Confirmation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;