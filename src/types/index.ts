export interface Venue {
    id: string
    name: string
    location: string
    capacity: number
    pricePerNight: number
    description: string
    imageUrl?: string | null
}

export interface BookingInquiry {
    venueId: string
    companyName: string
    email: string
    startDate: string
    endDate: string
    attendeeCount: number
}
