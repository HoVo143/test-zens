import { useEffect, useState } from 'react'
import { jokeDatas } from '~/api/mock-data'
import Cookies from 'js-cookie'

function Board() {

  const [jokes, setJokes] = useState(jokeDatas)
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0)
  const [message, setMessage] = useState(false)
  const [voted, setVoted] = useState(false)

  useEffect(() => {
    const hasVoted = Cookies.get(`joke_id_${jokes[currentJokeIndex]._id}_voted`)
    setVoted(hasVoted)
  }, [currentJokeIndex, jokes])

  const handleVote = (index) => {

    const updatedJokes = [...jokes]
    const currentJoke = updatedJokes[currentJokeIndex]

    if (index === 'like') {
      currentJoke.likes++
    } else if (index === 'dislike') {
      currentJoke.dislikes++
    }
    //cookies
    Cookies.set(`joke_id_${currentJoke._id}_voted`, true)

    // setCurrentJokeIndex(currentJokeIndex + 1)
    if (currentJokeIndex === jokes.length - 1) {
      setMessage(true)
    } else {
      setCurrentJokeIndex(currentJokeIndex + 1)
    }

    setJokes(updatedJokes)
    setVoted(true)
  }
  return (
    <div>
      {message ? (<p> That is all the jokes for today! Come back another day!</p>) :
        (
          <div>
            <p>{jokes[currentJokeIndex].joke}</p>
            <button onClick={() => handleVote('like')} disabled={voted}>This is Funny!</button>
            <button onClick={() => handleVote('dislike')} disabled={voted}>This is not Funny</button>
          </div>
        )}
    </div>
  )
}

export default Board
