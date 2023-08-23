export default async function getData(id){
    const response = await fetch("https://basic-blog.teamrabbil.com/api/post-details/${id}")

    if(!response.ok){
        throw new Error('failed to fetch data')
    }

    return response.json()
}

export default async function Userdata({params: id}){
    const data = await getData(id)

    return(
      <div>{data.title}</div>  
    )
}