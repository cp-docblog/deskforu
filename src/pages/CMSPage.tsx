import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { Navigate } from 'react-router-dom';
import { 
  FileText, 
  Image, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  Upload
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  content: string;
  metadata?: any;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

interface WorkspaceType {
  id: string;
  name: string;
  description: string;
  price: number;
  price_unit: string;
  image_url?: string;
  features: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const CMSPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('content');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [workspaceTypes, setWorkspaceTypes] = useState<WorkspaceType[]>([]);
  const [loading, setLoading] = useState(true);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    fetchContentItems();
    fetchWorkspaceTypes();
  }, []);

  const fetchContentItems = async () => {
    try {
      const { data, error } = await supabase
        .from('content_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContentItems(data || []);
    } catch (error) {
      console.error('Error fetching content items:', error);
    }
  };

  const fetchWorkspaceTypes = async () => {
    try {
      const { data, error } = await supabase
        .from('workspace_types')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWorkspaceTypes(data || []);
    } catch (error) {
      console.error('Error fetching workspace types:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveContent = async (item: any) => {
    try {
      const { error } = await supabase
        .from('content_items')
        .update({
          title: item.title,
          content: item.content,
          updated_at: new Date().toISOString()
        })
        .eq('id', item.id);

      if (error) throw error;

      await fetchContentItems();
      setEditingItem(null);
      alert('Content saved successfully!');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content. Please try again.');
    }
  };

  const handleDeleteContent = async (id: string) => {
    if (confirm('Are you sure you want to delete this content?')) {
      try {
        const { error } = await supabase
          .from('content_items')
          .delete()
          .eq('id', id);

        if (error) throw error;

        await fetchContentItems();
        alert('Content deleted successfully!');
      } catch (error) {
        console.error('Error deleting content:', error);
        alert('Failed to delete content. Please try again.');
      }
    }
  };

  const handleSaveWorkspace = async (workspace: any) => {
    try {
      const { error } = await supabase
        .from('workspace_types')
        .update({
          name: workspace.name,
          description: workspace.description,
          price: workspace.price,
          price_unit: workspace.price_unit,
          features: workspace.features,
          updated_at: new Date().toISOString()
        })
        .eq('id', workspace.id);

      if (error) throw error;

      await fetchWorkspaceTypes();
      setEditingItem(null);
      alert('Workspace saved successfully!');
    } catch (error) {
      console.error('Error saving workspace:', error);
      alert('Failed to save workspace. Please try again.');
    }
  };

  const handleDeleteWorkspace = async (id: string) => {
    if (confirm('Are you sure you want to delete this workspace?')) {
      try {
        const { error } = await supabase
          .from('workspace_types')
          .update({ is_active: false })
          .eq('id', id);

        if (error) throw error;

        await fetchWorkspaceTypes();
        alert('Workspace deactivated successfully!');
      } catch (error) {
        console.error('Error deactivating workspace:', error);
        alert('Failed to deactivate workspace. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
              <p className="text-gray-600">Manage your website content and settings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('content')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'content'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Content
              </button>
              <button
                onClick={() => setActiveTab('workspaces')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'workspaces'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Settings className="w-4 h-4 inline mr-2" />
                Workspaces
              </button>
              <button
                onClick={() => setActiveTab('media')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'media'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Image className="w-4 h-4 inline mr-2" />
                Media
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'content' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Website Content</h3>
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Content
                  </button>
                </div>

                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
                  </div>
                ) : (
                <div className="space-y-4">
                  {contentItems.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                      {editingItem?.id === item.id ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={editingItem.title}
                            onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          />
                          <textarea
                            value={editingItem.content}
                            onChange={(e) => setEditingItem({...editingItem, content: e.target.value})}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          />
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleSaveContent(editingItem)}
                              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center"
                            >
                              <Save className="w-4 h-4 mr-2" />
                              Save
                            </button>
                            <button
                              onClick={() => setEditingItem(null)}
                              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 mt-1">{item.content}</p>
                            <p className="text-sm text-gray-500 mt-2">
                              Last modified: {new Date(item.updated_at).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setEditingItem(item)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteContent(item.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                )}
              </div>
            )}

            {activeTab === 'workspaces' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Workspace Types</h3>
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Workspace
                  </button>
                </div>

                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
                  </div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {workspaceTypes.map((workspace) => (
                    <div key={workspace.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-500"></div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900">{workspace.name}</h4>
                        <p className="text-gray-600 text-sm mt-1">{workspace.description}</p>
                        <p className="text-yellow-600 font-bold mt-2">${workspace.price}/{workspace.price_unit}</p>
                        <div className="mt-3">
                          <p className="text-sm text-gray-500 mb-1">Features:</p>
                          <ul className="text-sm text-gray-600">
                            {workspace.features.map((feature, index) => (
                              <li key={index}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <button
                            onClick={() => setEditingItem(workspace)}
                            className="text-blue-600 hover:text-blue-900 flex items-center"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteWorkspace(workspace.id)}
                            className="text-red-600 hover:text-red-900 flex items-center"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Deactivate
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                )}
              </div>
            )}

            {activeTab === 'media' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Media Library</h3>
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors flex items-center">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Media
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Media items would go here */}
                  <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                    <p className="text-gray-500">No media uploaded yet</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSPage;