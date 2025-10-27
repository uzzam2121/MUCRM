import toast from 'react-hot-toast'
import * as api from '../api'
import { start, end, error, getTasksReducer, getTaskReducer, createTaskReducer, updateTaskReducer, deleteTaskReducer, } from '../reducer/task'
import { baseURL } from '../../constant'
import { mockTasks } from '../../mockData'

// Check if we're in demo mode
const isDemoMode = () => baseURL === ''

export const getTasks = () => async (dispatch) => {
    try {
        dispatch(start())
        
        // Demo mode: return mock data
        if (isDemoMode()) {
            await new Promise(resolve => setTimeout(resolve, 300))
            dispatch(getTasksReducer(mockTasks))
            dispatch(end())
            return
        }
        
        const { data } = await api.getTasks()
        dispatch(getTasksReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const getTask = (taskId) => async (dispatch) => {
    try {
        dispatch(start())
        
        // Demo mode: return mock data
        if (isDemoMode()) {
            await new Promise(resolve => setTimeout(resolve, 300))
            const task = mockTasks.find(t => t._id === taskId) || mockTasks[0]
            dispatch(getTaskReducer(task))
            dispatch(end())
            return
        }
        
        const { data } = await api.getTask(taskId)
        dispatch(getTaskReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const createTask = (taskData, setOpen) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.createTask(taskData)
        setOpen(false)
        dispatch(createTaskReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const searchTask = (searchTerm) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.searchTask(searchTerm)
        dispatch(getTasksReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const filterTask = (filters) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.filterTask(filters)
        dispatch(getTasksReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const updateTask = (taskId, taskData, options) => async (dispatch) => {
    try {
        !options?.loading ? null : dispatch(start())
        const { data } = await api.updateTask(taskId, taskData)
        dispatch(updateTaskReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}
export const deleteTask = (taskId) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.deleteTask(taskId)
        dispatch(deleteTaskReducer(data.result))
        dispatch(end())
    } catch (err) {
        const message = err?.response?.data?.message || err?.message || "Something went wrong"
        toast.error(message)
        dispatch(error(err.message))
    }
}