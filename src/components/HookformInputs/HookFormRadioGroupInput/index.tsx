import { RadioGroup, RadioGroupProps } from '@mui/material';
import React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

export interface HookRadioGroupInputProp
  extends Omit<ControllerProps<any>, 'render'>,
    Omit<RadioGroupProps, 'onChange' | 'name' | 'defaultValue' | 'value'> {}

const HookRadioGroupInput = ({ name, control, ...rest }: HookRadioGroupInputProp) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => <RadioGroup {...props} {...rest} />}
    />
  );
};

export default HookRadioGroupInput;
