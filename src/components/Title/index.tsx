import React from 'react';

type Props = {
  title: string;
  subTitle: string;
}

export const Title = ({ title, subTitle}: Props) => {
  return (
    <div className="title-holder">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
}
