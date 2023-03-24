import { useState } from 'react';
import Image from 'next/image'
import star from '../images/icon-star.svg'
import illustration from '../images/illustration-thank-you.svg'

export default function RatingCard() {

  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClicked = rating => setSelectedRating(rating);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(!isSubmitted);
  }

  return isSubmitted ? (
    <div className='card response-layout'>
      <Image className='illustration' src={illustration} alt='phone icon' />
      <p className='selected'>You selected {selectedRating} out of 5</p>
      <h1 className='thank-you'>Thank you!</h1>
      <p className='form-body'>We appreciate you taking the time to give a rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  ) : (
    <div className='card'>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Image className='star' src={star} alt='star icon' />
        <h1>How did we do?</h1>
        <p className='form-body'>Please let us know how we did with your support request.
          All feedback is appreciated to help us improve our offering!</p>
        <div>

          {[1, 2, 3, 4, 5].map(rating => (
            <button onClick={() => handleRatingClicked(rating)} type="button" className='ratings' key={rating}>
              {rating}
            </button>
          ))}
        </div>
        <button disabled={selectedRating === undefined} type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
}
