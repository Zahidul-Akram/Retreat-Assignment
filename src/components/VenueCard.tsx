import { Venue } from '@/types'

interface VenueCardProps {
    venue: Venue
    onBook: (venue: Venue) => void
}

export default function VenueCard({ venue, onBook }: VenueCardProps) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            {venue.imageUrl && (
                <img
                    src={venue.imageUrl}
                    alt={venue.name}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{venue.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{venue.description}</p>
                <div className="flex flex-col gap-2 mb-4 text-sm text-gray-700">
                    <div className="flex items-center">
                        <span className="font-semibold w-24">Location:</span> {venue.location}
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-24">Capacity:</span> {venue.capacity} people
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-24">Price:</span> ${venue.pricePerNight} / night
                    </div>
                </div>
                <button
                    onClick={() => onBook(venue)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                    Book Now
                </button>
            </div>
        </div>
    )
}
