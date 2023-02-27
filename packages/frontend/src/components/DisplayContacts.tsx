import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Contact } from '@dispense-takehome/common'
import ContactCard from './ContactCard'

const DisplayContacts = () => {
    const getAllContacts = async () => {
        const response = await axios.get('/api/contacts')
    
        return response
      }
    
    const {data} = useQuery({
        queryKey: ['veryUniqueId'],
        queryFn: getAllContacts,
        select: ((data)=>data.data)
    })

    console.log(data)
    return <div>{data?.map((contact: Contact)=>{
        return <ContactCard contactInfo={contact} />
    })}</div>
}

export default DisplayContacts