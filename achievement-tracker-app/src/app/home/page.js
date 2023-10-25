'use client'
// Home Component
import React from 'react';
import CustomDropdown from '../../../components/Dropdown/CustomDropdown';

export default function Home() {
    return (
        <div className="flex flex-col items-center space-y-8 pt-8">
            <div class="text-sm max-w-prose ...">
                <p>Welcome to Achievement Tracker!</p>
            </div>
            <CustomDropdown
                buttonName="Sign In"
                fieldOne="Home"
                fieldTwo="Profile Creation"
                fieldThree="Search Bar"
                fieldFour="Bob"
            />
            <CustomDropdown
                buttonName="Create a New Account"
                fieldOne="CSA"
                fieldTwo="AP Chem"
                fieldThree="AP Calc"
                fieldFour="APUSH"
            />
        </div>
        
    );
}
