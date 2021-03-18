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
            <form onSubmit={(e)=>{
                e.preventDefault()
              const  data={
                    name:name
                }
                fetch({method:"post",url:"/postuser",
            body:JSON.stringify(data)
            })
            }}>
                <input onChange={(e)=>setter(e)} value={name} placeholder='enter name'>
                </input>
                <button onClick={(e)=>{
                    e.preventDefault()
              const  data={
                    name:name
                }
                fetch({method:"post",url:"http://test-react-deploy-app.herokuapp.com/",
            body:JSON.stringify(data)
            })
            }}>send</button>
            </form>
        </div>
    )
}
