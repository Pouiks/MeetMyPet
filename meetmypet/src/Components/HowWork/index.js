import React from 'react'
import { Button,  Modal, Image, Header } from 'semantic-ui-react'

import HowWork2 from '../HowWork2';
import './howwork.scss';

const HowWork = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        closeOnDocumentClick={true}
        trigger={<Button>Comment ça fonctionne ?</Button>}
        >
        <Modal.Header>Un concept en 3 étapes</Modal.Header>
        <Modal.Content image>
            <Image size='large' src='/image/modal1.jpg' wrapped />
            <Modal.Description>
            <Header>Inscrivez votre maitre </Header>
            <p>
                Apres avoir renseigné les informations nécéssaire, choisissez votre meilleur photo, et sortez votre maitre 
            </p>
            <p>Apres l'inscription la découverte !</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions onActionClick>
            <HowWork2 />
        </Modal.Actions>
        </Modal>
    )
}

export default HowWork;