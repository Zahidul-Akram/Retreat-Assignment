interface SearchFiltersProps {
    filters: {
        location: string
        capacity: string
        price: string
    }
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchFilters({ filters, onChange }: SearchFiltersProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Find Your Perfect Venue</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="e.g. New York"
                        value={filters.location}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Min Capacity</label>
                    <input
                        type="number"
                        name="capacity"
                        placeholder="e.g. 50"
                        value={filters.capacity}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Price / Night</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="e.g. 500"
                        value={filters.price}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>
            </div>
        </div>
    )
}
