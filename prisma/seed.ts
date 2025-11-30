import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const venues = [
    {
      name: 'Grand Hotel',
      location: 'New York',
      capacity: 200,
      pricePerNight: 500,
      description: 'A luxury hotel in the heart of the city.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    },
    {
      name: 'Seaside Resort',
      location: 'Miami',
      capacity: 150,
      pricePerNight: 350,
      description: 'Relax by the beach in this beautiful resort.',
      imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    },
    {
      name: 'Mountain Lodge',
      location: 'Denver',
      capacity: 50,
      pricePerNight: 200,
      description: 'Cozy lodge in the mountains, perfect for small teams.',
      imageUrl: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80',
    },
    {
      name: 'Urban Loft',
      location: 'San Francisco',
      capacity: 30,
      pricePerNight: 400,
      description: 'Modern loft space for creative workshops.',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    },
    {
      name: 'Historic Mansion',
      location: 'London',
      capacity: 100,
      pricePerNight: 600,
      description: 'Experience history in this elegant mansion.',
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    },
  ]

  for (const venue of venues) {
    await prisma.venue.create({
      data: venue,
    })
  }

  console.log('Seed data inserted')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
