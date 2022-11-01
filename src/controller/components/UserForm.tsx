import React from 'react';
import { SelectChangeEvent, Typography, TextField, Box, MenuItem } from '@mui/material';
import { Button } from 'react-ui-controller';



interface Form {
  name: string;
  email: string;
  country: string;
  motive: string;
  message: string;
}

const motives = [{motive:'Academy(Careers)'}, {motive:'Academy(Courses)'}, {motive:'Shaper for Business(Companies)'}, {motive:'Shaper for Business(Universities)'}]


export const UserForm = () => {
  const [formstate, setFormState] = React.useState<Form>({name:'', email:'', country:'', motive:'', message:''});
  const [motive, setMotive] = React.useState();
  const handleSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    const { name, email, country, motive, message } = formstate;
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMotive(event.target.motive)
  }

  return (
    <Box display='flex' flexDirection='column' justifyContent='left'>
      <Box m="40px 0">
        <Typography variant="h5">Contact Us</Typography>
        {/* ICON */}
      </Box>
      <Typography variant="h6">Name*</Typography>
      <TextField name='name' required label='Full Name'/>
      <Typography variant="h6">Email*</Typography>
      <TextField name='email' required label='Email'/>
      <Typography variant="h6">Country*</Typography>
      <TextField name='country' label='Country'/>
      <Typography variant="h6">Motive*</Typography>
      <TextField>
        {motives.map((option) => (
          <MenuItem key={option.motive} value={option.motive}>
            {option.motive}
          </MenuItem>
        ))}
      </TextField>
      <Typography variant="h6">Message</Typography>
      <TextField name='message' label='Tell us about you...'/>
      <Button text='Send Message' type='button' variant='contained'/>
    </Box>

  )
}
