import api from './apiConfig'

export const getPosts = async () => {
  try {
    const response = await api.get('/posts')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getPost = async id => {
  try {
    const response = await api.get(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createPost = async post => {
  try {
    const response = await api.get('/posts', post)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updatePost = async (id, product) => {
  try {
    const response = await api.get(`/posts/${id}`, product)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deletePost = async id => {
  try {
    const response = await api.get(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}