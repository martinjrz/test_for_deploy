import React,{useState} from 'react'

export default function Product() {
    const [name,setname]=useState('')
    const setter=(e)=>{
        e.preventDefault()
        setname(e.target.value)
    }
    return (
        <div>
            <h1>This is the product page </h1>
            <form>
                <input onChange={(e)=>setter(e)} value={name} placeholder='enter name'>
                </input>
                <button >send</button>
            </form>
        </div>
    )
}
