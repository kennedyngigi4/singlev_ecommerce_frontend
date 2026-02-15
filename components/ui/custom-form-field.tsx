"use client";

import * as React from 'react';
import { Field, FieldDescription, FieldError, FieldLabel } from './field';
import { Input } from './input';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { FormFieldType } from '@/lib/form-fields-type';
import { Select, SelectContent, SelectTrigger, SelectValue } from './select';
import { Textarea } from './textarea';

interface CustomFormFieldProps{
    fieldType: string;
    label: string;
    name: string;
    control: Control<any>;
    inputType?: string;
    placeholder?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}

const RenderField = ({ field, state, props } : { field: any, state: any, props: CustomFormFieldProps}) =>{

    switch(props.fieldType){
        case FormFieldType.INPUT:
            return (
                <Input 
                    { ...field }
                    id = { props.name } 
                    type={props.inputType}
                    aria-invalid={state.invalid }
                    placeholder={props.placeholder }
                    disabled={props.disabled}
                />
            );

        case FormFieldType.FILE:
            return (
                <Input
                    id={props.name}
                    accept='image/*'
                    type={props.inputType}
                    aria-invalid={state.invalid}
                    onChange={(e) => {
                        field.onChange(e.target.files?.[0] ?? null)
                    }}
                />
            );

        case FormFieldType.SELECT:
            return(
                <Select key={field.value} value={field.value ?? ""} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={props.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {props.children}
                    </SelectContent>
                </Select>
            );

        case FormFieldType.TEXTAREA:
            return(
                <Textarea 
                    {...field}
                    placeholder={props.placeholder}
                    rows={15}
                />
            );
        default:
            return null;
    }
};

const CustomFormField = (props : CustomFormFieldProps) => {

    const { label, name, control } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState}) => (
                <Field className="gap-1" data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={label}>{label}</FieldLabel>
                    
                    <RenderField field={field} state={fieldState} props={props}  />

                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        >
        
        </Controller>
    );
}

export default CustomFormField