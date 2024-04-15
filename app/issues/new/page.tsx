'use client'

import React, { useState } from 'react'
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/validationSchemas'
import { z } from 'zod'
import ErrorMessage from '@/components/ErrorMessage'

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {

    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    })
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
                <ErrorMessage>
                    {errors.title?.message}
                </ErrorMessage>
                <TextArea placeholder='Description' {...register('description')} />
                <ErrorMessage>
                    {errors.description?.message}
                </ErrorMessage>
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage