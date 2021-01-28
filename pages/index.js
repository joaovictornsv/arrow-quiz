import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GithubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget theme={db.theme}>
          <Widget.Header>
            <h1>Arrow</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>

            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                type="text"
                name="input-name"
                id="input-name"
                value={name}
                placeholder="Digite seu nome"
                onChange={(e) => { setName(e.target.value); }}
              />
              <Button type="submit" disabled={name === ''}>
                {`Vamos jogar ${name}?`}
              </Button>
            </form>

          </Widget.Content>
        </Widget>

        <Widget theme={db.theme}>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GithubCorner projectUrl="https://github.com/joaovictornsv/arrow-quiz" />
    </QuizBackground>
  );
}
