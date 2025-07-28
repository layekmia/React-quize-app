import { useQuizes } from '../context/QuizeContext'
import Option from './Option'

export default function Question() {
  const {question} = useQuizes();
  return (
    <div className=''>
        <h4>{question.question}</h4>
        <Option />
    </div>
  )
}
