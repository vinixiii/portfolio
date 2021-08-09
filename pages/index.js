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
        id="home"
        minHeight="90vh"
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
              <Text tag="p" variation="bigTitle" marginTop="14px">
                Eu sou o <span>Vinícius Figueiroa</span>.
                <br />
                Desenvolvedor Front-end.
              </Text>
              <hr />
              <Button
                href="https://linkedin.com/in/vinicius-ss-figueiroa"
                target="_blank"
              >
                <img
                  style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                  src="./images/linkedin.svg"
                />
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
                alt="Imagem de Vinícius Figueiroa"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Box
        id="about-me"
        style={{ backgroundColor: '#2B2E44' }}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              display="flex"
              value={{ xs: 12, md: 6 }}
              marginTop={{
                xs: '42px',
                md: 'initial',
              }}
            >
              <img
                style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                src="./images/illustration01.svg"
                alt="Ilustração de um garoto sentado ao lado de um notebook"
              />
            </Grid.Col>
            <Grid.Col
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              value={{ xs: 12, md: 5 }}
            >
              <Text
                tag="p"
                variation="title"
                style={{ color: '#e5e5e5' }}
                marginTop={{ xs: '42px', sm: 'initial' }}
              >
                Um pouco sobre mim...
              </Text>
              <Text
                tag="p"
                variation="paragraph"
                style={{ color: '#e5e5e5' }}
                marginTop="42px"
                marginBottom="42px"
              >
                Sou um programador dedicado e me esforço para trazer as melhores
                soluções! Atualmente estou cursando desenvolvimento de sistemas
                pelo SENAI Informática e me especializando em Front-End com o
                Bootcamp de Front-End Avançado da Alura!
              </Text>
              <Button alignSelf="flex-end" ghost>
                <img
                  src="./images/download.svg"
                  alt="Ícone de uma seta apontada para baixo"
                />
                Baixar currículo
              </Button>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
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
