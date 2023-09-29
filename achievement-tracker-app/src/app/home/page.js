'use client'
// Home Component
import React from 'react';
import CustomDropdown from '../../../components/Dropdown/CustomDropdown';

export default function Home() {
    return (
        <div className="flex flex-col items-center space-y-8 pt-8">
            <CustomDropdown
                buttonName="Navigation"
                fieldOne="Home"
                fieldTwo="Profile Creation"
                fieldThree="Search Bar"
                fieldFour="Bob"
            />
            <CustomDropdown
                buttonName="Courses"
                fieldOne="CSA"
                fieldTwo="AP Chem"
                fieldThree="AP Calc"
                fieldFour="APUSH"
            />
            <CustomDropdown
                buttonName="Grades"
                fieldOne="F"
                fieldTwo="F"
                fieldThree="F"
                fieldFour="F"
            />
        </div>
    );
}
