import React, { ChangeEvent, useRef, useState } from 'react';
import { action } from '@storybook/addon-actions'


export default {
  title: 'input',
  // component: UncontrolledRating,
};

export const UncontrolledInput = () => {
  return (
    <input />
  )
}

export const ControlleddInputWithFixedValue = () => {
  return (
    <input value={'it-incubator'} />
  )
}

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const actualValue = e.currentTarget.value
    setValue(actualValue)
  }

  return (
    <>
      <input value={value} onChange={onChangeHandler} /> - {value}
    </>

  )
}


export const GetValueOfUncontrolledByButtonPress = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }

  return (
    <>
      <input ref={inputRef} id={'inputId'} /> <button onClick={save}>save</button> - {value}
    </>

  )
}


export const ControlledInput = () => {

  const [parentValue, setParentValue] = useState('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  }

  return (
    <><input value={parentValue} onChange={onChangeHandler} /> - {parentValue}</>
  )
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  }

  return(
    <>
      <input checked={parentValue} type="checkbox" onChange={onChangeHandler}/>
    </>
  )
}

export const ControlledSelect = () => {

  const [parentValue, setParentValue] = useState<string | undefined>(undefined);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  }

  return(
    <>
      <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moskow</option>
        <option value="3">Kiev</option>
      </select>
    </>
  )
}