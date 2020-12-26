import {useParams} from 'react-router-dom'
import {useEffect, useState } from 'react'
function Comments () {

  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [comment, setComment] = useState([])
  useEffect(() => {
    async function getComments () {

			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/comments')
				const json = await response.json()
        setComment(json.filter(comment => comment.postId === Number(id)))
				setLoading(false)

			}
			catch(error) {
				setError(error)
			}
		}

		getComments()
  }, [id])
  return (
    <>
    {id}

     {
				loading && !error && <h1>Loading</h1>
			}

			{
				error && <>{error.message}</>
			}

			{
				comment.length > 0 && <ul>
				{
          comment.map ((co) => {
              return <li key={co.id}>{co.body}</li>
          })
        }
				</ul>
			} 
   
    </>
  )
}
export default Comments