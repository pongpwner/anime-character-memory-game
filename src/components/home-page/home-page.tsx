import { useNavigate } from "react-router-dom";
//import "./home-page.styles.scss";
import { gender } from "../../data/characters";
import styled from "styled-components";
const HighScores = styled.ul`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  li:nth-child(2) {
    color: red;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
const Heading1 = styled.h1`
  font-size: 3rem;
`;
const Heading2 = styled.h2`
  font-size: 2rem;
  margin: 2rem 0;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;
const P = styled.p`
  font-size: 2rem;
`;
const Ul = styled.ul`
  padding: 0;
`;
const Li = styled.li`
  font-size: 2rem;
`;
const FormRow = styled.div`
  display: flex;
  font-size: 2rem;
`;
const Label = styled.label`
  font-size: 2rem;
`;
const Play = styled.button`
  font-size: 2rem;
  display: block;
  margin: 1rem auto 0 auto;
  &:hover {
    cursor: pointer;
  }
`;
const Form = styled.form`
  font-size: 2rem;
`;
interface HomePageProps {
  setGender: Function;
  setBoardSize: Function;
  restartGame: Function;
  boardSize: string;
  gender: gender;
  highscores: number[];
}
const HomePage = ({
  setGender,
  setBoardSize,
  restartGame,
  boardSize,
  gender,
  highscores,
}: HomePageProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Heading1>Anime Character Memory Game</Heading1>
      <Section>
        <Heading2>Objective</Heading2>
        <P>Try to click each tile without clicking the same one twice.</P>
        <Heading2>Rules</Heading2>
        <Ul>
          <Li>
            You lose if you let the timer run out, or if you click the same
            waifu twice.
          </Li>
          <Li>
            The time left will be added to your score after every sucessful
            pick.
          </Li>
          <Li>Every 10 you pick correctly you will get 100 bonus points.</Li>
          <Li>
            If you pick everything correctly you get 50% bonus of your current
            points.
          </Li>
        </Ul>
      </Section>
      <Heading2>Settings</Heading2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/play");
          restartGame();
        }}
      >
        <FormRow>
          <Label>character pool gender:</Label>
          <input
            type="radio"
            id="both"
            value="both"
            name="gender"
            checked={gender === "both"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Label htmlFor="both">both</Label>

          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Label htmlFor="female">female</Label>

          <input
            type="radio"
            id="male"
            value="male"
            name="gender"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Label htmlFor="male">male</Label>
        </FormRow>
        <FormRow>
          <Label>board size:</Label>
          <input
            type="radio"
            id="small"
            value="18"
            name="board-size"
            onChange={(e) => setBoardSize(e.target.value)}
            checked={boardSize === "18"}
          />
          <Label htmlFor="small">small</Label>

          <input
            type="radio"
            id="large"
            value="32"
            name="board-size"
            checked={boardSize === "32"}
            onChange={(e) => setBoardSize(e.target.value)}
          />
          <Label htmlFor="large">large</Label>
        </FormRow>
        <Play type="submit">Play</Play>
      </Form>
      <HighScores>
        <Heading2>High Scores</Heading2>
        {highscores[0] ? highscores.map((score) => <li>{score}</li>) : null}
      </HighScores>
    </Container>
  );
};

export default HomePage;
