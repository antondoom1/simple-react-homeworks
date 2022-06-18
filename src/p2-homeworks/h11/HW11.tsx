import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  return (
    <div>
      homeworks 11

      {/*should work (должно работать)*/}
      <div className={s.HW11Wrapper}>
        <div>
          <span>{value1}</span>
          <SuperRange
            onChangeRange={setValue1}
            value={value1}
          />
        </div>

        <div className={s.doubleRange}>
          <SuperDoubleRange
            onChangeRange={value => {
              setValue1(value[0])
              setValue2(value[1])
            }}
            value={[value1, value2]}
            step={5}
          />
        </div>
      </div>

      {/*<hr/>*/}
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
