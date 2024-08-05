"use client";

import {Button, Modal} from "flowbite-react";
import {useState} from "react";
import {FcPlus} from "react-icons/fc";
import AddPlayerForm from "@/components/AddPlayerForm";
import { nanoid } from 'nanoid'



export default function AddModal({players, setPlayers}) {

    const [openModal, setOpenModal] = useState(false);



    const handleSubmit = (values) => {
        let id =nanoid()
        setOpenModal(false)
        setPlayers((players) => [{
            id: id,
            ...values
        },...players])
    }


    return (
        <>
            <Button
                color='green'
                className=''
                onClick={() => setOpenModal(true)}>
                Əlavə et
            </Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>

                 <AddPlayerForm setOpenModal={setOpenModal} handleSubmit={handleSubmit}/>
                </Modal.Body>

            </Modal>
        </>
    );
}
