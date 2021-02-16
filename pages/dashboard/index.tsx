import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { IState } from '../../src/store';
import { IUser } from '../../src/store/modules/userAuth/types';
import { Container, WelcomeText } from '../../styles/dashboard';

const Dashboard = () => {
  const router = useRouter();

  const state = useSelector<IState, IUser>(state => state.userAuth.user);

  return (
    <Container>
      <WelcomeText>
        <h1>
          Bem-vindo,
          <strong> {state.email}</strong>
        </h1>
        <button type="button" onClick={() => router.back()}>
          Sair
        </button>
      </WelcomeText>
    </Container >
  );

};

export default Dashboard;
