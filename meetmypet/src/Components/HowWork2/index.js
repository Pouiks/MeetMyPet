import React  from 'react'
import { Button, Icon, Modal, Image, Header } from 'semantic-ui-react'
import HowWork3 from '../HowWork3'
import './howwork2.scss';


const HowWork2 = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button primary>Prochaine étape (2/3)</Button>}
        >
        <Modal.Header>2ème etape !</Modal.Header>
        <Modal.Content image>

            <Image size='small' src='/image/Icon.png' className="modal2"/>

            
            <Modal.Description>
            <Header>En quelques clics, découvrez des groupes proche de vous </Header>
            <p>
                Grâce à notre outils de géolocalisation, découvrez et rejoignez les groupes de vos choix
            </p>

                <p >Trouver des groupes en cherchant la ville de votre choix</p>
                <p >Créer des groupes pour amener de l'interaction dans votre quartier </p>
                <p >Echangez avec les membres des groupes que vous avez rejoint</p>

            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <HowWork3 />
        </Modal.Actions>
        </Modal>
    )
}   
export default HowWork2;
