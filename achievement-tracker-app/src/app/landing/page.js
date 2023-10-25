'use client'

import React from 'react';
import Link from 'next/link';
import DataContainer from '../../../components/Container/DataContainer';
import { getTopEightColleges, withTimeout, getTopFiveLikedActivities } from '../api';
import { useQuery, useQueryClient } from '@tanstack/react-query'

export default function Landing() {
    const queryClient = useQueryClient()

    const {
        data: collegeData,
        isLoading: collegeLoading,
        error: collegeError,
      } = useQuery(
        ['colleges'],
        () => withTimeout(10000, getTopEightColleges()), // 10 second timeout
        {
          retry: 2, // Number of retry attempts (2)
          retryDelay: 0, // No delay between retries
          refetchOnWindowFocus: false, // api does not get recalled when swithching tabs
          onSuccess: () => {
            // Trigger the subjects query when the user query is successful
            queryClient.invalidateQueries(['activities'])
          },
        },
      )
    
      // Fetches subjects only if the user query is successful
      const {
        data: activitiesData,
        isLoading: activitiesLoading,
        error: activitiesError,
      } = useQuery(
        ['activities'],
        () => withTimeout(10000, getTopFiveLikedActivities()), // 10 second timeout
        {
          enabled: !!collegeData, // Only run this query if userData is available
          retry: 2, // Number of retry attempts (2)
          retryDelay: 0, // No delay between retries
          refetchOnWindowFocus: false, // api does not get recalled when swithching tabs
        },
      )


    

    const imageData = [
        {
            image_url: "https://t4.ftcdn.net/jpg/01/66/55/01/360_F_166550191_hEVqAvFjIbRMZNDTaBoi0j7fX7ynPS5x.jpg",
            description: "Welcome to Achievement Tracker!"
        }
    ]

    console.log(activitiesData)

    return (
        <div className='flex flex-col items-center bg-blue-200 min-h-screen'>
            <div className='mt-4 mb-4'>
                <DataContainer
                    title=''
                    cardsData={imageData}
                />
            </div>
            <div className='flex-col items-center justify-center p-10 pr-8'>
                {collegeData && activitiesData && (
                    <>
                        <DataContainer
                            title="Top 6 Colleges"
                            cardsData={collegeData}
                        />
                        <Link href="/home" passHref>
                            <button className='mt-2 mb-6 px-4 py-2 bg-blue-500 text-white rounded-md'>
                                View More
                            </button>
                        </Link>
                        <DataContainer
                            title="Top 6 Activities"
                            cardsData={activitiesData.extracurricularTopFiveList}
                        />
                        <Link href="/home" passHref>
                            <button className='mt-2 mb-6 px-4 py-2 bg-blue-500 text-white rounded-md'>
                                View More
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
