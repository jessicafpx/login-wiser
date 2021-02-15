import { Container, WelcomeText } from './styles';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter()

  return (
    <Container>
      <WelcomeText>
        <h1>
          Bem-vindo!
          {/* <strong>{user.email}</strong> */}
        </h1>
        <button type="button" onClick={() => router.back()}>
          Sair
        </button>
      </WelcomeText>
    </Container>
  );

};

export default Dashboard;
