
import { Card } from "./components/Cards";
import { NavBar } from "./components/Navbar";
import { personajes } from "./Utils/Personajes";
import './index.css'






export const Principal = () => {
    return (

        <main>
            <NavBar />
            <h1>Mi Primer Aplicativo Certus</h1>
            {
                personajes.map((personaje) => (
                    <Card
                        {...personaje}

                    />



                )
                )
            }


        </main>
    )
}