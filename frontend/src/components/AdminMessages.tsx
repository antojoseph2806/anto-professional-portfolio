import React, { useEffect, useState } from 'react';
import {
  Mail,
  User,
  MessageSquareText,
  CalendarClock,
  Trash2,
} from 'lucide-react';
import Swal from 'sweetalert2';

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

const AdminMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://antojoseph.onrender.com/api/contact/admin');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();
        setMessages(data);
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.message || 'An error occurred while fetching messages',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this message?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (!confirm.isConfirmed) return;

    setDeletingId(id);

    try {
      const response = await fetch(`https://antojoseph.onrender.com/api/contact/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete message');
      }

      setMessages((prev) => prev.filter((msg) => msg._id !== id));

      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'The message has been deleted.',
        timer: 2000,
        showConfirmButton: false
      });
    } catch (err: any) {
      Swal.fire({
        icon: 'error',
        title: 'Delete Failed',
        text: err.message || 'An error occurred while deleting the message',
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            📬 Contact Messages
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full" />
        </div>

        {loading ? (
          <p className="text-gray-600 text-center text-lg animate-pulse">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages found.</p>
        ) : (
          <div className="space-y-6">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="absolute top-3 right-3 text-red-600 hover:text-red-800 transition"
                  disabled={deletingId === msg._id}
                  title="Delete Message"
                >
                  <Trash2 size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <User className="text-blue-600" size={20} />
                    <p className="text-gray-800 font-medium">{msg.name}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-green-600" size={20} />
                    <p className="text-gray-700 underline">{msg.email}</p>
                  </div>
                  <div className="md:col-span-2 flex items-start space-x-3">
                    <MessageSquareText className="text-indigo-600 mt-1" size={20} />
                    <p className="text-gray-700 leading-relaxed">{msg.message}</p>
                  </div>
                  <div className="md:col-span-2 flex items-center space-x-2 text-sm text-gray-500 mt-2">
                    <CalendarClock size={16} />
                    <span>Sent on: {new Date(msg.date).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;
