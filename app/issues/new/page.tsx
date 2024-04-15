'use client'

import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
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

    return (
        <form
            className='max-w-xl space-y-3'
            onSubmit={handleSubmit(async (data) => {
                console.log(data)
                await axios.post('/api/issues', data)
                router.push('/issues')
            })}>
            <TextField.Root placeholder='Title' {...register('title')} />
            <TextArea placeholder='Description' {...register('description')} />
            <Button>Submit New Issue</Button>
        </form>
    )
}

export default NewIssuePage