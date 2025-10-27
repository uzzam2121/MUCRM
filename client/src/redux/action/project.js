import toast from 'react-hot-toast'
import * as api from '../api'
import { start, end, error, getProjectReducer, getProjectsReducer, createProjectReducer, updateProjectReducer, deleteProjectReducer, } from '../reducer/project'
import { getUsersReducer } from '../reducer/user'
import { baseURL } from '../../constant'
import { mockProjects } from '../../mockData'

// Check if we're in demo mode
const isDemoMode = () => baseURL === ''

export const getProject = (projectId) => async (dispatch) => {
    try {
        dispatch(start())
        
        // Demo mode: return mock data
        if (isDemoMode()) {
            await new Promise(resolve => setTimeout(resolve, 300))
            const project = mockProjects.find(p => p._id === projectId) || mockProjects[0]
            dispatch(getProjectReducer(project))
            dispatch(end())
            return
        }
        
        const { data } = await api.getProject(projectId)
        dispatch(getProjectReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const getProjects = () => async (dispatch) => {
    try {
        dispatch(start())
        
        // Demo mode: return mock data
        if (isDemoMode()) {
            await new Promise(resolve => setTimeout(resolve, 300))
            dispatch(getProjectsReducer(mockProjects))
            dispatch(end())
            return
        }
        
        const { data } = await api.getProjects()
        dispatch(getProjectsReducer(data.result))
        console.log(data.result)
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}

export const getUsers = () => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.getUsers()
        dispatch(getUsersReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const searchProject = (searchTerm, isArchived) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.searchProject(searchTerm, isArchived)
        dispatch(getProjectsReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const filterProject = (filters) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.filterProject(filters)
        dispatch(getProjectsReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const createProject = (projectData, navigate) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.createProject(projectData)
        dispatch(createProjectReducer(data.result))
        navigate('/projects')
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const updateProject = (projectId, projectData) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.updateProject(projectId, projectData)
        dispatch(updateProjectReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const deleteProject = (projectId) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.deleteProject(projectId)
        dispatch(deleteProjectReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
