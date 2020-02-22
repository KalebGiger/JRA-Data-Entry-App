import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export function SelectInput(props) {

    const {
        value,
        options,
        handleChange,
        className,
        label
    } = props;

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <div>
            <FormControl variant="outlined" className={className}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    {label}
                </InputLabel>
                <Select
                    native
                    value={value}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="" />
                    {options && options.map((value, index) =>
                        <option key={index} value={value}>
                            {value}
                        </option>
                    )}
                </Select>
            </FormControl>
        </div>
    );
}