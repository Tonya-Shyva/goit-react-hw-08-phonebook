import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from 'components/Box/Box';

export default function Login() {
  return (
    <main>
      <Box>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </Box>
    </main>
  );
}
