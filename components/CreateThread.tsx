'use client'
import { useState } from 'react'
import { Thread } from '../types'
import { useRouter } from 'next/navigation'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

type CreateThreadProps = {
    onCreate: (thread: Thread) => void
}

const CreateThread = ({ onCreate }: CreateThreadProps): JSX.Element => {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [username, setUsername] = useState('')
    const [errors, setErrors] = useState({ title: '', description: '', username: '' })
    const [confirmationMessage, setConfirmationMessage] = useState('')

    //mappar fältens namn till svenska
    type InputName = 'title' | 'description' | 'username'
    const inputNamesInSwedish: Record<InputName, string> = {
        title: 'Titeln',
        description: 'Beskrivningen',
        username: 'Användarnamnet'
    }

    const validateInput = (value: string, field: InputName) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: value ? '' : `${inputNamesInSwedish[field]} måste fyllas i`
        }))
    }

    const handleSubmit = () => {
        validateInput(title, 'title')
        validateInput(description, 'description')
        validateInput(username, 'username')

        if (!title || !description || !username) {
            return
        }

        const newThread: Thread = {
            id: Math.floor(Math.random() * 1000),
            title,
            description,
            username,
            creationDate: new Date().toISOString(),
        }

        const existingThreads = JSON.parse(localStorage.getItem('threads') || '[]')
        const updatedThreads = [...existingThreads, newThread]
        localStorage.setItem('threads', JSON.stringify(updatedThreads))

        onCreate(newThread)

        setConfirmationMessage('Tråden har skapats')
        setTimeout(() => {
            setConfirmationMessage('')
        }, 5000)

        setTitle('')
        setDescription('')
        setUsername('')

        setErrors({ title: '', description: '', username: '' }) 
    }
    //byt ut router.push till annan plats om det behövs
    const handleClick = () => {
        handleSubmit()
        if (!errors.title && !errors.description && !errors.username) {
            router.push('/')
        }
    }

    return (
        <div className="flex items-center justify-center m-8">
            <div className="w-full max-w-lg p-6 bg-white border rounded-xl shadow-lg space-y-4">
                    <div>
                        <h2 className="text-center text-3xl font-bold text-gray-800">
                            Skapa en tråd
                        </h2>
                        {confirmationMessage && <p className='text-center text-green-500 mb-4'>{confirmationMessage}</p>}
                    </div>
                <div className='flex flex-col space-y-4'>
                    <div>
                        <Input
                            value={title}
                            placeholder='Titel'
                            onChange={(e) => {
                                setTitle(e.target.value)
                                setConfirmationMessage('')
                            }}
                        />
                        {errors.title && <p className="text-red-500 error-message">{errors.title}</p>}
                    </div>
                    <div>
                        <Textarea
                            value={description}
                            placeholder='Beskrivning'
                            onChange={(e) => {
                                setDescription(e.target.value)
                                setConfirmationMessage('')
                            }}
                        />
                        {errors.description && <p className="text-red-500 error-message">{errors.description}</p>}
                    </div>
                    <div>
                        <Input
                            value={username}
                            placeholder='Användarnamn'
                            onChange={(e) => {
                                setUsername(e.target.value)
                                setConfirmationMessage('')
                            }}
                        />
                        {errors.username && <p className="text-red-500 error-message">{errors.username}</p>}
                    </div>
                    <Button onClick={handleClick}>
                        Skapa tråd
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CreateThread