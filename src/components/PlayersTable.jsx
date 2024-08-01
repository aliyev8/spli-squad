
"use client";


import {Button, Table} from "flowbite-react";
import {useState} from "react";

export default function PlayersTable({players,setPlayers}) {




    const handleDelete = id => {
        const filteredPlayer = players.filter((player) => player.id !== id)
        setPlayers([...filteredPlayer])
    }

    return (
        <div className="overflow-x-auto mt-8">
            {
                players.length > 0 ? <Table>
                    <Table.Head>
                        <Table.HeadCell>Adı</Table.HeadCell>
                        <Table.HeadCell>Mövqeyi</Table.HeadCell>
                        <Table.HeadCell>Reytinqi</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Sil</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">

                        {
                            players.map(({name,position,id,rate}) => (
                                <Table.Row key={id} className="bg-white dark:border-gray-700 dark:bg-gray-800" >

                                    <Table.Cell className='text-md font-bold'>
                                        {name}
                                    </Table.Cell>

                                    <Table.Cell className='text-sm font-semibold'>
                                        {position.name}
                                    </Table.Cell>

                                    <Table.Cell>
                                        {rate}
                                    </Table.Cell>

                                    <Table.Cell>
                                        <Button
                                            onClick={() => handleDelete(id)}
                                            className="font-medium text-red-700 hover:underline dark:text-red-600 bg-red-200">
                                            Sil
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table> : <div>
                    Oyunçu əlavə edilməyib!
                </div>
            }
        </div>
    );
}
