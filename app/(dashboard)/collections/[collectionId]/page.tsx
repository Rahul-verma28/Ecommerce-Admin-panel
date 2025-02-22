// "use client"

// import { useEffect, useState } from "react"

// import Loader from "@/components/custom ui/Loader"
// import CollectionForm from "@/components/collections/CollectionForm"
// import toast from "react-hot-toast"

// const CollectionDetails = ({ params }: { params: { collectionId: string }}) => {
  
//   const [loading, setLoading] = useState(true)
//   const [collectionDetails, setCollectionDetails] = useState(null)

//   const getCollectionDetails = async () => {
//     try { 
//       const res = await fetch(`/api/collections/${params.collectionId}`, {
//         method: "GET"
//       })
//       const data = await res.json()
//       // console.log(data)
//       setCollectionDetails(data)
//       setLoading(false)
//     } catch (err) {
//       console.log("[collectionId_GET]", err)
//     }
//     finally {
//     setLoading(false); // Always stop loading, even if the request fails.
//   }
// }
// // console.log(collectionDetails)

//   useEffect(() => {
//     getCollectionDetails()
//   }, [])

//   return loading ? <Loader /> : (
//     // <CollectionForm/>
//     "hello"
//   )
// }

// export default CollectionDetails


"use client"

import { useEffect, useState } from "react"

import Loader from "@/components/custom ui/Loader"
import CollectionForm from "@/components/collections/CollectionForm"

const CollectionDetails = ({ params }: { params: { collectionId: string }}) => {
  const [loading, setLoading] = useState(true)
  const [collectionDetails, setCollectionDetails] = useState<CollectionType | null>(null)

  const getCollectionDetails = async () => {
    try { 
      const res = await fetch(`/api/collections/${params.collectionId}`, {
        method: "GET"
      })
      const data = await res.json()
      setCollectionDetails(data)
      setLoading(false)
    } catch (err) {
      console.log("[collectionId_GET]", err)
      setLoading(false)
    }
  }

  useEffect(() => {
    getCollectionDetails()
  }, [])

  return loading ? <Loader /> : (
    <CollectionForm initialData={collectionDetails}/>
  )
}

export default CollectionDetails