import Image from 'next/image'
import DataCard from '../Card/DataCard'
import Link from 'next/link'

export default function DataContainer({title, cardsData}) {
    console.log(cardsData)
    return (
        <div className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>{title}</h2>
            <div className='flex flex-wrap gap-4'>
                {cardsData.map((card, index) => (
                    <DataCard
                        key={index}
                        imageSrc={card.image_url}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}