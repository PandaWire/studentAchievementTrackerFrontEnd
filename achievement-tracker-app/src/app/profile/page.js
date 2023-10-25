'use client'

import React from 'react';
import Link from 'next/link';
import DataContainer from '../../../components/Container/DataContainer';
import { getUserProfile, withTimeout } from '../api';
import { useQuery, useQueryClient } from '@tanstack/react-query'

export default function Profile() {
    const queryClient = useQueryClient()

    const {
        data: userData,
        isLoading: userLoading,
        error: userError,
      } = useQuery(
        ['user'],
        () => withTimeout(10000, getUserProfile("64ee8f075590239980cfc9f7")), // 10 second timeout
        {
          retry: 2, // Number of retry attempts (2)
          retryDelay: 0, // No delay between retries
          refetchOnWindowFocus: false, // api does not get recalled when switching tabs
        },
      )

      console.log(userData)

    const extracurricularData = [
        {
          title: 'School 1',
          cardData: { imageSrc: 'https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg', description: 'Description 1' },
        },
        {
          title: 'School 2',
          cardData: { imageSrc: 'https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg', description: 'Description 2' },
        },
        {
          title: 'School 3',
          cardData: { imageSrc: 'https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg', description: 'Description 3' },
        }
    ];

    return (
        <div class="flex-container flex flex-col items-center pl-10">
            <div class="box mb-10 flex items-center">
                <div class="w-1/2 flex items-center justify-center">
                    <div class="p-4 border rounded-md text-box-content">
                        <p>Name: Billy Bob</p>
                        <p>Graduation Year: 2000</p>
                        <p>School: Santiago Hills Elementary</p>
                        <p>Major: Art</p>
                    </div>
                </div>
            </div>
            <div class="box mb-10">
                <DataContainer
                    title='Billy Bobs Extracurriculars'
                    cardsData={userData["Extracurriculars"]}
                />
            </div>
            <div class="box mb-10">
                <DataContainer
                    title='Billy Bobs Test Scores'
                    cardsData={extracurricularData}
                />
            </div>
            <div class="box mb-10">
                <DataContainer
                    title='Billy Bobs Awards'
                    cardsData={extracurricularData}
                />
            </div>
        </div>
    );
    
}