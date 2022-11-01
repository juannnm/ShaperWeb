import React from 'react';
import { Typography, TextField, Box, MenuItem } from '@mui/material';
import { BasicForm, Button } from 'react-ui-controller';

interface Form {
    name: string;
    email: string;
    country: string;
    motive: string;
    message: string;
}

const motives = ['Academy(Careers)', 'Academy(Courses)', 'Shaper for Business(Companies)', 'Shaper for Business(Universities)'];

export const UserForm = () => {
    const [formState, setFormState] = React.useState<Form>({ name: '', email: '', country: '', motive: '', message: '' });

    const handleSubmit = (e: React.FormEvent<Element>) => {
        e.preventDefault();
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <BasicForm direction="column" handleSubmit={handleSubmit} autoComplete="on">
            <Box m="40px 0">
                <Typography variant="h5">Contact Us</Typography>
                {/* ICON */}
            </Box>
            <Typography variant="h6">Name*</Typography>
            <TextField name="name" required label="Full Name" onChange={handleChange} />
            <Typography variant="h6">Email*</Typography>
            <TextField name="email" required label="Email" onChange={handleChange} />
            <Typography variant="h6">Country*</Typography>
            <TextField name="country" label="Country" />
            <Typography variant="h6" onChange={handleChange}>
                Motive*
            </Typography>
            <TextField onChange={handleChange}>
                {motives.map((d, i) => (
                    <MenuItem key={i} value={d}>
                        {d}
                    </MenuItem>
                ))}
            </TextField>
            <Typography variant="h6">Message</Typography>
            <TextField name="message" label="Tell us about you..." onChange={handleChange} />
            <Button text="Send Message" type="submit" variant="contained" />
        </BasicForm>
    );
};
