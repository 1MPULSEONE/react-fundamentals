const Select = ({options, defaultValue, onChange, ...props}) => {
    return (
        <select {...props} onChange={(e) => (onChange(e.target.value))}>
            <option disabled value={""}>{defaultValue}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

export default Select