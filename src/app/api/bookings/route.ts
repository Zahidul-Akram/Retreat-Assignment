import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { venueId, companyName, email, startDate, endDate, attendeeCount } = body

        if (!venueId || !companyName || !email || !startDate || !endDate || !attendeeCount) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const venue = await prisma.venue.findUnique({
            where: { id: venueId },
        })

        if (!venue) {
            return NextResponse.json({ error: 'Venue not found' }, { status: 404 })
        }

        if (attendeeCount > venue.capacity) {
            return NextResponse.json(
                { error: `Attendee count exceeds venue capacity of ${venue.capacity}` },
                { status: 400 }
            )
        }

        const booking = await prisma.bookingInquiry.create({
            data: {
                venueId,
                companyName,
                email,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                attendeeCount: parseInt(attendeeCount),
            },
        })

        return NextResponse.json(booking, { status: 201 })
    } catch (error) {
        console.error('Error creating booking:', error)
        return NextResponse.json({ error: 'Error creating booking inquiry' }, { status: 500 })
    }
}
