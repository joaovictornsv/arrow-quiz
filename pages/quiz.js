import React from 'react';
import { useRouter } from 'next/router';

import QuizBackground from '../src/components/QuizBackground';
import { QuizContainer } from './index';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json';

export default function QuizPage() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget theme={db.theme}>
            <Widget.Header>{`Olá ${name}`}</Widget.Header>
          </Widget>
        </QuizContainer>

        <GitHubCorner projectUrl="https://github.com/joaovictornsv/arrow-quiz" />
      </QuizBackground>
    </>
  );
}
