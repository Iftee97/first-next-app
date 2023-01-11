export default function Details({ ninja }) {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  // console.log('data:', data) // returns users

  const paths = data.map(user => ({
    params: {
      id: user.id.toString()
    }
  }))

  return {
    paths,
    fallback: false // any paths not returned by getStaticPaths will result in a 404
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: {
      ninja: data
    }
  }
}
