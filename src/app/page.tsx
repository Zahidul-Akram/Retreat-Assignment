'use client'

import { useState, useEffect } from 'react'
import VenueCard from '@/components/VenueCard'
import SearchFilters from '@/components/SearchFilters'
import BookingForm from '@/components/BookingForm'
import { Venue } from '@/types'

export default function Home() {
  const [venues, setVenues] = useState<Venue[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [filters, setFilters] = useState({
    location: '',
    capacity: '',
    price: '',
  })

  useEffect(() => {
    fetchVenues()
  }, [filters])

  const fetchVenues = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (filters.location) params.append('location', filters.location)
    if (filters.capacity) params.append('capacity', filters.capacity)
    if (filters.price) params.append('price', filters.price)

    try {
      const res = await fetch(`/api/venues?${params}`)
      const data = await res.json()
      setVenues(data)
    } catch (error) {
      console.error('Error fetching venues:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const handleBookingSuccess = () => {
    setSelectedVenue(null)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">Retreat Venues</h1>
          <p className="text-lg text-gray-600">Find the perfect venue for your team offsite</p>
        </header>

        <SearchFilters filters={filters} onChange={handleFilterChange} />

        {showSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
            Booking inquiry submitted successfully! We'll be in touch soon.
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading venues...</p>
          </div>
        ) : venues.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 text-lg">No venues found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} onBook={setSelectedVenue} />
            ))}
          </div>
        )}

        {selectedVenue && (
          <BookingForm
            venue={selectedVenue}
            onClose={() => setSelectedVenue(null)}
            onSuccess={handleBookingSuccess}
          />
        )}
      </div>
    </div>
  )
}
