import React, {ChangeEvent} from 'react'
import {Slider} from '@material-ui/core'

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: number[]) => void
  value?: number[]
  step?: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, value, step}) => {

  const onChangeCallBack = (e: ChangeEvent<{}>, newValue: number | number[]) => {
    onChangeRange && onChangeRange(newValue as number[])
  }

  return (
    <Slider
      value={value}
      onChange={onChangeCallBack}
      valueLabelDisplay="auto"
      step={step}
      color="primary"
    />
  )
}

export default SuperDoubleRange
