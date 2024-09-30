import React from 'react';

const ArticleContent = ({ title, image, date, content }) => {
  return (
    <article className="prose max-w-none flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="relative w-full max-w-4xl h-64 md:h-96 mb-4">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="text-muted-foreground mb-4">Posted on: {date}</p>
      {content.split('\n').map((line, index) => (
        <p key={index} className="mb-4">{line}</p>
      ))}
    </article>
  );
};

export default ArticleContent;

