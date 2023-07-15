import { useState } from "react";
import Select from "react-select";

interface Option {
    value: string;
    label: string;
}

const filterOptions = (options: Option[], filterOption: Option) => {
    return options.filter((option) => option.value !== filterOption.value);
};

const convertStringOptionToObject = (option: string) => {
    return {
        value: option,
        label: option,
    };
};

const convertStringOptionsToObjects = (options: string[]) => {
    return options.map((option) => convertStringOptionToObject(option));
};

interface FiltersProps {
    initOption: string;
    onSelect: (selectedOption: string) => void;
    options: string[];
}

const Filters = ({ initOption, onSelect, options }: FiltersProps) => {
    const selectOptions = convertStringOptionsToObjects(options);
    const selectInitOption = convertStringOptionToObject(initOption);
    const [selectedOption, setSelectedOption] =
        useState<Option>(selectInitOption);
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(
        filterOptions(selectOptions, selectInitOption)
    );

    const handleSelect = (selectedOption: Option) => {
        setFilteredOptions(filterOptions(selectOptions, selectedOption));
        setSelectedOption(selectedOption);
        onSelect(selectedOption.value);
    };

    return (
        // Parend div styled inline to keep consistency with styling
        // of Select component. I did not want to waste time on thinking
        // about better ways of managing CSS for Select component
        <div
            style={{
                borderRadius: "0.3rem",
                fontSize: "0.9rem",
                fontWeight: "var(--FONT-THIN)",
                boxShadow: "var(--SHADOW)",
            }}
        >
            <Select
                isSearchable={false}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: "none",
                        boxShadow: "none",
                        background: "var(--COLOR-ELEMENTS)",
                        color: "var(--COLOR-TEXT)",
                        width: "12rem",
                        padding: "0.5rem",
                        transition: "inherit",
                    }),
                    indicatorSeparator: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: "transparent",
                    }),
                    indicatorsContainer: (baseStyles, state) => ({
                        ...baseStyles,
                        // trick, because indicatorContainer CSS class props cannot be configured
                        div: {
                            color: "var(--COLOR-TEXT)",
                            "&:hover": {
                                color: "var(--COLOR-TEXT)",
                            },
                        },
                    }),
                    menu: (baseStyles, state) => ({
                        ...baseStyles,
                        boxShadow: "none",
                        background: "var(--COLOR-ELEMENTS)",
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        background: state.isFocused
                            ? "var(--COLOR-BACKGROUND)"
                            : "var(--COLOR-ELEMENTS)",
                    }),
                    singleValue: (baseStyles, state) => ({
                        ...baseStyles,
                        color: "var(--COLOR-TEXT)",
                    }),
                }}
                options={filteredOptions}
                // @ts-ignore
                onChange={handleSelect}
                value={selectedOption}
            />
        </div>
    );
};

export default Filters;
