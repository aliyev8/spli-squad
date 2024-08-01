'use client'
import {Field, Form, Formik} from "formik";
import {playerScheme} from "@/lib/schemas";
import {initialPlayer} from "@/lib/initialValues";
import {Button} from "flowbite-react";






export default function AddPlayerForm({handleSubmit,setOpenModal}) {

const positions = [
    {
        id:0,
        name:"Qapı",
        prefix:"gk"
    },
    {
        id:1,
        name:"Müdafiə",
        prefix:"df"
    },
    {
        id:3,
        name:"Mərkəz",
        prefix:"md"
    },
    {
        id:4,
        name:"Hücum",
        prefix:"fw"
    }
]

    const handleSelect =(setFieldValue,e) => {
        const prefix = e.target.value
        const selectedPosition = positions.find(item => item.prefix === prefix)

        setFieldValue('position',{
            name:selectedPosition.name,
            prefix:selectedPosition.prefix,

        })
    }

    return <div>
        <Formik initialValues={{...initialPlayer}}
                onSubmit={handleSubmit}
                validationSchema={playerScheme}
        >
            {({values, errors, dirty, isValid,setFieldValue}) => (
                <Form className='flex flex-col gap-8'>
                   <div className='relative flex '>
                       <Field
                           className={
                           `bg-white w-full h-10 rounded-md px-2 border text-black text-lg 
                           ${errors?.name ? 'border-red-700' : ""}`
                           }
                           name='name'
                           placeholder='Oyunçu adı'
                       />
                       <span className='text-red-700 text-sm font-bold absolute -bottom-6'>
                           {errors?.name ?? ''}
                       </span>
                   </div>

                    <div className='relative flex '>
                        <Field
                            type='number'
                            className={
                                `bg-white w-full h-10 rounded-md px-2 border text-black text-lg 
                           ${errors?.rate ? 'border-red-700' : ""}`
                            }
                            name='rate'
                            placeholder='Oyunçu reytinqi'
                        />
                        <span className='text-red-700 text-sm font-bold absolute -bottom-6'>
                           {errors?.rate ?? ''}
                       </span>
                    </div>

                    <select
                        onChange={(e) => handleSelect(setFieldValue,e)}
                        name="position" className=' leading-relaxed text-black dark:text-gray-700 rounded-md h-10'>
                        <option style={{color: 'red'}} className='' value="" disabled selected>Oyunçu mövqeyi</option>
                        {
                            positions.map((position) => (
                                <option key={position.id} value={position.prefix}>{position.name}</option>
                            ))
                        }
                    </select>


                    <div className='flex w-full justify-center gap-8'>
                        <Button color="gray" type='button' onClick={() => setOpenModal(false)}>
                            Bağla
                        </Button>
                        <Button color="success" type='submit' >
                            Əlavə et
                        </Button>
                    </div>
                </Form>
            )}

        </Formik>
    </div>
}