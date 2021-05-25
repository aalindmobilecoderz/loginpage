import React from 'react';
import {useForm} from 'react-hook-form';
import Body from 'src/Components/Shared/Body/Body';
import Click from 'src/Components/Shared/Click/Click';
import Container from 'src/Components/Shared/Container/Container';
import FormBuilder from 'src/Components/Shared/FormBuilder/FormBuilder';
import Paper from 'src/Components/Shared/Paper/Paper';

function UserScreen() {
  const {control, formState} = useForm({
    defaultValues: {
      name: '',
      email: '',
    },
    mode: 'onChange',
  });

  return (
    <Container>
      <Body>
        <Paper p={10} flex={1}>
          <FormBuilder
            formConfigArray={[
              {
                name: 'name',
                control,
                type: 'text',
                label: 'Name',
                textInputProps: {
                  placeholder: 'Enter name',
                },
                rules: {
                  validate: (value) =>
                    value.trim() ? true : 'Name is required',
                },
              },
              {
                name: 'email',
                control,
                type: 'email',
                label: 'Email',
                textInputProps: {
                  placeholder: 'Enter email',
                },
              },
              {
                name: 'gender',
                control,
                type: 'select',
                label: 'Gender',
                textInputProps: {
                  placeholder: 'Select gender',
                },
                options: [
                  {
                    value: 1,
                    label: 'Male',
                  },
                  {
                    value: 0,
                    label: 'Female',
                  },
                ],
              },
            ]}
          />
          <Paper>
            <Paper h={15} />
            <Click
              middle
              center
              onPress={() => {}}
              disabled={!formState.isValid}
              br={5}>
              Submit
            </Click>
            <Paper h={15} />
          </Paper>
        </Paper>
      </Body>
    </Container>
  );
}

export default UserScreen;
