import { Box, Card, Container, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import propic from "../../assets/about/profilepic.jpg"
import Titulo from "../../components/layout/Titulo";
import ShoppingCart from "../../components/store/ShoppingCart";
import Layout from "../../components/layout/Layout";

export default function AboutPage() {
    return (
        <>
            <Layout>
                <Container maxWidth="lg" sx={{ mb: 2 }}>
                    <Titulo titulo={'Quien soy'}></Titulo>
                    <Box sx={{ mt: 5 }}>
                        <Box sx={{ alignItems: 'center' }}>
                            <Card sx={{ maxWidth: 500, margin: 'auto' }}>
                                <CardMedia sx={{ height: 400 }} image={propic}></CardMedia>
                            </Card>
                        </Box>
                        <Typography sx={{ mt: 4 }} style={{ wordWrap: "break-word" }}>Cuando nací el 22 de agosto de 1984 una tarde noche de un miércoles lluvioso, preguntaron a mi padre `a qué es muy guapa´a lo que contestó `para nada´ jugándose el pellejo con mi abuela materna. El médico también estaba decepcionado puesto que había pensado que nacería un niño con un corazón de futbolista. Razón no le faltaba, pues siempre me he sentido un ser  más que una niña o un niño. Me dijeron que pasó el cometa Halley y era mentira, pasó dos años después pero la leyenda de que iba a ser afortunada me acompaña hasta hoy en día. Se que es mentira pero al creermelo obtengo fuerzas. <br />
                            Vengo de una familia de ficciones, leyendas y sueños. Como soy hija única mi abuela jugaba conmigo en el coche en los viajes y me decía que el palacio del Escorial era nuestro, solo que no veraneabamos allí porque había que limpiar muchas ventanas, también que los desfiladeros de las carreteras estaban plagados de tribus indias que podían disparar flechas. Mi padre no lejos de la tradición creía que podía salir del cuerpo e invocar a la lluvia cuando quisiera y contactar con nuestros muertos a través de sueños que luego comentamos.<br />
                            De pequeña me vestían y me sacaban a la terraza para que no molestara y debe ser ahí cuando comenzó mi universo. Dicen muy molestos, que solo fue una vez pero no les creo.  Al pasar mucho tiempo sola en casa, por no tener hermanos, un mundo se empezó a forjar de la nada, paralelo al que admito como real. Aquel que fue saliendo en forma de letras y rotulador. Cuando me aburría en el colegio, cuando quería hacer sonreír a un amigo o reirme de una anécdota y cuando quiero conquistar a alguien.  Afortunadamente no era la época de sacar enfermedades mentales por cualquier peculiaridad así que estoy libre de pastillas, puedo ser simplemente algo extraña.<br />
                            Me han pasado muchas cosas en la vida pero a mucha gente también por lo que no voy a hacer hincapié, pero ahí han estado siempre mis dibujos y el humor. Me han salvado la vida y ahora creo que les debo un homenaje.
                            Cuando veo que del trozo de papel cualquiera surgen las líneas de mis personajes, mis espacios siento que me voy allí y estoy a gusto. A veces pintaría mis bichos por toda la ciudad pero no tengo el prestigio suficiente para evitar una multa.
                            Son simples y casi no tienen rostro porque soy vaga y porque es lo único en la vida que no es un trabajo y un requisito. Son y existen así, al natural como me salen. Es el único momento donde hago lo que me da la real gana.<br />
                            Este es mi universo. Es algo que expulso de mi como las bacterias. No pretenden decir ni ser nada, solo son. No pretenden tener éxito ni reputación, ni nivel, ni divulgación, solo son, como nosotros. Pienso que se nos ha olvidado ser simplemente, simplemente ser.
                            Parafraseando a Forrest Gump `y esto es lo único que tengo que decir sobre .....la guerra de Vietnam´.</Typography>
                    </Box>
                </Container>
                <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}