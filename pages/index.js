import Header from '../src/components/common/Header';
import { Box } from '../src/components/foundation/layout/Box';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Text } from '../src/components/foundation/Text';

export default function Home() {
  return (
    <>
      <Header />
      <Box style={{ height: '90vh' }}>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col>
              <Text tag="p" variation="smallTitle">
                Olá!
              </Text>
              <Text tag="p" variation="title">
                Eu sou o Vinícius Figueiroa.
                <br />
                Desenvolvedor Front-end.
              </Text>
            </Grid.Col>
            <Grid.Col>Imagem</Grid.Col>
          </Grid.Row>
        </Grid.Container>

        {/* <section style={{ backgroundColor: 'lightcoral' }}>
          <h2>First Page</h2>
        </section>
        <section style={{ backgroundColor: 'lightblue' }}>
          <h2>Secpnd Page</h2>
        </section>
        <section style={{ backgroundColor: 'violet' }}>
          <h2>Third Page</h2>
        </section>
        <section style={{ backgroundColor: 'lightgreen' }}>
          <h2>Fourth Page</h2>
        </section> */}
      </Box>
    </>
  );
}
