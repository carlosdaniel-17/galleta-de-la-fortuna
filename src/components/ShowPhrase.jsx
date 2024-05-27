import React from 'react'

const ShowPhrase = ({randomPhrase}) => {

    console.log(randomPhrase);

    const { phrase, author } = randomPhrase;

  return (
    <div className='app__container'>
      <p className='app__text'>{phrase}</p>
      <samp className='app__author'>{author}</samp>
    </div>
  )
}

export default ShowPhrase;