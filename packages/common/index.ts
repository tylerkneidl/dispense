import { z } from 'zod'

export const stateAbbrevArray = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ] as const;


export const AddressContactSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().min(1, {message: 'First Name is required'}),
  lastName: z.string().optional(),
  email: z.string().min(1, {message: 'Email is required'}).email({message: 'Must provide a valid email'}),
  includeAddress: z.boolean(),
  addressOne: z.string().min(1, {message: 'If you want to include an address, this is a required field.'}).optional(),
  addressTwo: z.string().optional(),
  city: z.string().min(1, {message: 'If you want to include an address, this is a required field.'}).optional(),
  state: z.enum(stateAbbrevArray).optional(),
  zip: z.string().optional()
  

})


export const ContactBodySchema = AddressContactSchema.omit({id: true} )



export type Contact = z.infer<typeof AddressContactSchema>

export type ContactBody = z.infer<typeof ContactBodySchema>