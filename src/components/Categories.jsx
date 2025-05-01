import React from 'react'
import { setCategories as setCategoriesPrompt } from '../llm/PromptCreator'

export default function Categories({categories, setCategories}) {
    const categoryLabels = {
        geography: "Geography",
        entertainment: "Entertainment",
        history: "History",
        artLiterature: "Art and Literature",
        scienceNature: "Science and Nature",
        sportsLeisure: "Sports and Leisure"
    };

    const categoryConfig = [
        { name: "geography", label: "Geography" },
        { name: "entertainment", label: "Entertainment" },
        { name: "history", label: "History" },
        { name: "artLiterature", label: "Art and Literature" },
        { name: "scienceNature", label: "Science and Nature" },
        { name: "sportsLeisure", label: "Sports and Leisure" },
    ];

     const handleCheckboxChange = (event) => {
            const { name, checked } = event.target;
        
            setCategories(prevCategories => {
        
                const updatedCategories = {
                    ...prevCategories,
                    [name]: checked,
                };
        
                const selectedCategoryLabels = Object.entries(updatedCategories)
                    .filter(([_, isChecked]) => isChecked)
                    .map(([key]) => categoryLabels[key]);
        
                setCategoriesPrompt(selectedCategoryLabels);
        
                return updatedCategories;
            });
        };

        
  return (
    <div>
        {categoryConfig.map(({ name, label }) => (
        <label key={name}>
            <input
            type="checkbox"
            name={name}
            checked={categories[name]}
            onChange={handleCheckboxChange}
            disabled={
                Object.values(categories).filter(Boolean).length === 1 && categories[name]
            }
            />
            {label}
        </label>
    ))}
    </div>
  )
}
