
export default function DataCard({ imageSrc, description }) {
    return (
        <div className='border p-4 rounded-md shadow-lg max-w-sm transform hover:bg-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300'>
            <div className='relative h-[150px] w-full mb-4'>
                <Image
                    src={imageSrc}
                    alt={description}
                    width={300}
                    height={300}
                    objectFit='cover'
                />
            </div>
            <p className='mt-2 text-center'>{description}</p>
        </div>
    );
}