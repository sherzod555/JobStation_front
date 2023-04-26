import api from "./api";

export const searchVacancy = async(search) => {
    const {data} = await api.get(`/api/vacancies?populate=*&${search ? `&filters[job_name][$containsi]=${search}` : ''}`)
    return data
}

export const searchCvs = async(search) => {
    const {data} = await api.get(`/api/cvs?populate=*&${search ? `&filters[working_sphere][$containsi]=${search}` : ''}`)
    return data
}

export const getCvById = async (id) => {
    const {data} = await api.get(`/api/cvs/${id}`)
    return data
}

export const getVacancyById = async (id) => {
    const {data} = await api.get(`/api/vacancies/${id}`)
    return data
}