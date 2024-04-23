// import {baseUrl} from './base_url';
const baseUrl = process.env.REACT_APP_BASEURL;

export const peopleLoader = async () => {
    // make a call to backend index route
    const response = await fetch(`${baseUrl}/people`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    // convert the response in a js object
    const people = await response.json()
    // return the people
    return people
}

export const personLoader = async ({params}) => {
    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/people/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    // convert the response into a js object
    const person = await response.json()
    // return the person
    return person
}