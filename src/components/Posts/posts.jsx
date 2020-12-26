import { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom'


function Posts () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  useEffect(() => {
    async function getPosts () {

			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts')
				const json = await response.json()
        setData(json)
				setLoading(false)

			}
			catch(error) {
				setError(error)
			}
		}

		getPosts()
  }, [])

  return (
    <>

			{
				loading && !error && <h1>Loading</h1>
			}

			{
				error && <>{error.message}</>
			}

			{
				data.length > 0 && <ul>
					{
						data.map(post => <li key={post.id}>

              <NavLink to={/comments/ + post.id} >{post.title}</NavLink>

           

						</li>)
					}
				</ul>
			}
		</>
  )
}
export default Posts

