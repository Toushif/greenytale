
export const InputForm = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.cat ? props.placeholder : ''}</label>
            <input
                className="form-control"
                type={props.type}
                name={props.name}
                value={props.value || ''}
                id={props.id}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required={props.required}
                {...props}
            />
        </div>
    )
}

export const Dropdown = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.cat ? props.placeholder : ''}</label>
            <select 
                name={props.id}
                id={props.id}
                value={props.value} 
                required
                onChange={props.changeFn}>
                {props.children}
            </select>
        </div>
    )
}