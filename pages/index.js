import { Button } from '../src/components/common/Button';
import Header from '../src/components/common/Header';
import { Box } from '../src/components/foundation/layout/Box';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Text } from '../src/components/foundation/Text';

export default function Home() {
  ({ theme }) => console.log(theme);
  return (
    <>
      <Header />
      <Box
        minHeight="100vh"
        id="home"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              value={{ xs: 12, md: 6 }}
              marginBottom={{
                xs: '42px',
                sm: 'initial',
              }}
            >
              <Text
                tag="p"
                variation="smallTitle"
                style={{ color: '#e5e5e5' }}
                marginTop={{
                  xs: '42px',
                  md: '0px',
                }}
              >
                Olá!
              </Text>
              <Text tag="p" variation="title" marginTop="14px">
                Eu sou o <span>Vinícius Figueiroa</span>.
                <br />
                Desenvolvedor Front-end.
              </Text>
              <hr />
              <Button
                href="https://linkedin.com/in/vinicius-ss-figueiroa"
                target="_blank"
              >
                <img src="./images/linkedin.svg" />
                LinkedIn
              </Button>
            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 5 }}
              marginTop={{
                xs: '42px',
                sm: 'initial',
              }}
            >
              <img
                style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                src="./images/eu.png"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Box style={{ backgroundColor: '#2B2E44' }} minHeight="100vh"></Box>
      {/* <Box
        flex="1"
        display="flex"
        flexDirection="column"
        id="teste"
        style={{ textAlign: 'center', backgroundColor: '#2B2E44' }}
      >
        <h1>Second Page</h1>
      </Box> */}
    </>
  );
}
