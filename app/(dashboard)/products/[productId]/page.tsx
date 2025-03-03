// "use client"

// import Loader from '@/components/custom ui/Loader'
// import ProductForm from '@/components/products/ProductForm'
// import React, { useEffect, useState } from 'react'

// const ProductDetails = ({ params }: { params: { productId: string }}) => {
//   const [loading, setLoading] = useState(true)
//   const [productDetails, setProductDetails] = useState<ProductType | null>(null)

//   const getProductDetails = async () => {
//     try { 
//       const res = await fetch(`/api/products/${params.productId}`, {
//         method: "GET"
//       })
//       const data = await res.json()
//       setProductDetails(data)
//       console.log(data);
//       setLoading(false)
//     } catch (err) {
//       console.log("[productId_GET]", err)
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     getProductDetails()
//   }, [])

//   return loading ? <Loader /> : (
//     <ProductForm initialData={productDetails} />
//   )
// }

// export default ProductDetails


"use client"

import Loader from '@/components/custom ui/Loader'
import ProductForm from '@/components/products/ProductForm'
import React, { useEffect, useState, useCallback } from 'react'

const ProductDetails = ({ params }: { params: { productId: string }}) => {
  const [loading, setLoading] = useState(true)
  const [productDetails, setProductDetails] = useState<ProductType | null>(null)

  const getProductDetails = useCallback(async () => {
    try { 
      const res = await fetch(`/api/products/${params.productId}`, {
        method: "GET"
      })
      const data = await res.json()
      setProductDetails(data)
      console.log(data)
      setLoading(false)
    } catch (err) {
      console.log("[productId_GET]", err)
      setLoading(false)
    }
  }, [params.productId])

  useEffect(() => {
    getProductDetails()
  }, [getProductDetails])

  return loading ? <Loader /> : (
    <ProductForm initialData={productDetails} />
  )
}

export default ProductDetails