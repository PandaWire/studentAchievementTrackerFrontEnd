'use client'
import { Dropdown } from "flowbite-react";

export default function CustomDropdown({
  buttonName,
  fieldOne,
  fieldTwo,
  fieldThree,
  fieldFour
}) {
  return (
    <div className="flex flex-col items-center">
        <Dropdown label={buttonName}>
          <Dropdown.Item>
            {fieldOne}
          </Dropdown.Item>
          <Dropdown.Item>
            {fieldTwo}
          </Dropdown.Item>
          <Dropdown.Item>
            {fieldThree}
          </Dropdown.Item>
          <Dropdown.Item>
            {fieldFour}
          </Dropdown.Item>
        </Dropdown>
    </div>
  );
}
