import React from "react";
import Select from "react-select";
import { AiOutlineDown } from "react-icons/ai";

const MultiSelectSearch = () => {
  const options = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "Javascript" },
    { value: "illustrator", label: "Illustrator" },
    { value: "photoshop", label: "Photoshop" },
    { value: "php", label: "PHP" },
    { value: "python", label: "Python" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#FFFFFF" : "#000000",
      // color: state.isSelected ? '#000000' : '#FFFFFF',
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      // color: '#000000',
      color: "#FFFFFF",
      backgroundColor: "#405189",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      // color: '#000000',
      color: "#FFFFFF",
      backgroundColor: "#405189",
      ":hover": {
        // backgroundColor: '#FED7D7',
        // color: '#000000',
        backgroundColor: "#405189",
        color: "#FFFFFF",
      },
    }),
    control: (provided,{ isFocused, theme }) => ({
      ...provided,
      // backgroundColor: "#FFFFFF", // Change the background color here
      // backgroundColor: state.isFocused ? '#252f3f' : '#1e293b', 
      backgroundColor: isFocused ? theme.colors.primary : theme.colors.neutralLight,
      borderColor:isFocused ? theme.colors.primary : theme.colors.neutralLight,
      boxShadow: 'none',
    }), 
  };
  return (
    <Select
      isMulti
      options={options}
      components={{ DropdownIndicator: () => <AiOutlineDown /> }}
      placeholder="Select skills"
      className="w-full  focus:outline-none outline-none"
      styles={customStyles}
    />
  );
};

export default MultiSelectSearch;