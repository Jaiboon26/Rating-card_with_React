import { useState } from 'react'
import './App.css'

export default function App() {
  const [active, setActive] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState('')

  const ChangeActive = (buttonID) => {
    setActive(buttonID)
    setScore(buttonID)
  }

  const ShowContent = () => {
    if (submitted) {
      return (
        <>
          <div className="card-thank">
            <div className="card-header">
              <img src=".\interactive-rating-component-main\images\illustration-thank-you.svg" alt="thank-img" />
            </div>
            <div className="result-container">
              You selected {score} out of 5
            </div>
            <div className="card-footer">
              <div className="header">
                Thank you!
              </div>
              <div className="body">
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
              </div>
            </div>
          </div>
        </>
      )
    }
    return (
      <>
        <div className="icon-container">
          <img src=".\interactive-rating-component-main\images\icon-star.svg" alt="icon" />
        </div>
        <div className="card-header">
          How did we do?
        </div>
        <div className="card-body">
          Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!
        </div>
        <div className="button-container">
          <button className={active === 1 ? 'active' : 'score-button'} onClick={() => ChangeActive(1)} type='button'>1</button>
          <button className={active === 2 ? 'active' : 'score-button'} onClick={() => ChangeActive(2)} type='button'>2</button>
          <button className={active === 3 ? 'active' : 'score-button'} onClick={() => ChangeActive(3)} type='button'>3</button>
          <button className={active === 4 ? 'active' : 'score-button'} onClick={() => ChangeActive(4)} type='button'>4</button>
          <button className={active === 5 ? 'active' : 'score-button'} onClick={() => ChangeActive(5)} type='button'>5</button>
        </div>
        <button className="submit-button" onClick={() => {
          setSubmitted(true)
        }}
          type='submit'
          disabled={active === null}>SUBMIT</button>
      </>
    )
  }

  return (
    <>
      <form>
        <article className='card-container'>
          <div className="content">
            {ShowContent()}
          </div>
        </article>
      </form>
    </>
  )
}
