import styled from 'styled-components'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import GithubCorner from '../src/components/GithubCorner'

import db from '../db.json'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget theme={db.theme}>
          <Widget.Header>
            <h1>Arrow</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.Content>
        </Widget>

        <Widget theme={db.theme}>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.Content>
        </Widget>

        <Footer/>
      </QuizContainer>

      <GithubCorner projectUrl="https://github.com/joaovictornsv/arrow-quiz"/>
    </QuizBackground>
  )
}
