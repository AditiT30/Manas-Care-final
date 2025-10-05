'use client';

import { useState } from 'react';
import { Heart, Edit, Trash2, Plus } from 'lucide-react';

interface Affirmation {
    id: number;
    title: string;
    description: string;
}

export default function AffirmationsPage() {
    const [affirmations, setAffirmations] = useState<Affirmation[]>([
        {
            id: 1,
            title: "I am capable and strong",
            description: "I have overcome challenges before, and I will overcome this one too. My anxiety does not define me."
        },
        {
            id: 2,
            title: "This feeling will pass",
            description: "Anxiety is temporary. I am safe, I am grounded, and this moment will pass."
        },
        {
            id: 3,
            title: "I deserve peace",
            description: "I am worthy of calm and peace. I give myself permission to rest and heal."
        },
    ]);

    const handleEdit = (id: number) => console.log('Edit affirmation', id);
    const handleDelete = (id: number) =>
        setAffirmations(affirmations.filter((a) => a.id !== id));
    const handleAdd = () => console.log('Add new affirmation');

    return (
        <>
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-2">
                    <Heart className="text-teal-600" size={24} />
                    <h1 className="text-2xl font-semibold text-gray-800">Affirmations</h1>
                </div>
                <p className="text-gray-600">
                    Store positive statements to remind yourself of your strength and worth.
                </p>
            </div>

            {/* Affirmations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {affirmations.map((affirmation) => (
                    <div key={affirmation.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-1 h-16 bg-teal-500 rounded-full mr-4 flex-shrink-0"></div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800 mb-2">{affirmation.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{affirmation.description}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end space-x-2">
                            <button
                                onClick={() => handleEdit(affirmation.id)}
                                className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                                title="Edit affirmation"
                            >
                                <Edit size={16} />
                            </button>
                            <button
                                onClick={() => handleDelete(affirmation.id)}
                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete affirmation"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {affirmations.length === 0 && (
                <div className="text-center py-16">
                    <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="text-teal-400" size={48} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">No affirmations yet</h3>
                    <p className="text-gray-600 mb-6">Start building your collection of positive affirmations.</p>
                    <button
                        onClick={handleAdd}
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                    >
                        Create your first affirmation
                    </button>
                </div>
            )}

            {/* Floating Add Button */}
            {affirmations.length > 0 && (
                <button
                    onClick={handleAdd}
                    className="fixed bottom-6 right-6 w-14 h-14 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-200 flex items-center justify-center z-30"
                    title="Add new affirmation"
                >
                    <Plus size={24} />
                </button>
            )}
        </>
    );
}
