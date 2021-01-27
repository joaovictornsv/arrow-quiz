import React from 'react';
import { useRouter } from 'next/router';

export default function QuizPage() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <h1>Fala {name}</h1>
      <div>Quiz Page</div>
    </>
  );
}
