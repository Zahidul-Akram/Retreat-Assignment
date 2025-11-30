import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get('location')
    const capacity = searchParams.get('capacity')
    const price = searchParams.get('price')

    const filters: any = {}

    if (location) {
        filters.location = {
            contains: location,
            mode: 'insensitive',
        }
    }

    if (capacity) {
        filters.capacity = {
            gte: parseInt(capacity),
        }
    }

    if (price) {
        filters.pricePerNight = {
            lte: parseFloat(price),
        }
    }

    try {
        const venues = await prisma.venue.findMany({
            where: filters,
        })
        return NextResponse.json(venues)
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching venues' }, { status: 500 })
    }
}
