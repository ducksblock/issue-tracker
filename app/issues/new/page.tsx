'use client'

import React, { useState } from 'react'
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface IssueForm {
    title: string
    description: string
}

const NewIssuePage = () => {

    const router = useRouter()
    const { register, handleSubmit } = useForm<IssueForm>()
    const [error, setError] = useState('')

    return (
        <div className='max-w-xl'>
            {error && <Callout.Root color="red" role="alert" className='mb-5'>
                <Callout.Text>
                    {error}
                </Callout.Text>

            </Callout.Root>}
            <form
                className='space-y-3'
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await axios.post('/api/issues', data)
                        router.push('/issues')
                    } catch (error) {
                        setError('An unexpected error occured.')
                    }
                })}>
                <TextField.Root placeholder='Title' {...register('title')} />
                <TextArea placeholder='Description' {...register('description')} />
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage