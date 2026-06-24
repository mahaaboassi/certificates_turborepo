const host = "http://localhost:4000/"
export const apiRoutes = {
    auth : {
        signIn : `${host}auth/login`,
        me: `${host}auth/me`
    },
    users:{
        findAll: `${host}users`,
        one: (id:string )=>(`${host}users/${id}`)
    },
    instituations:{
        findAll: `${host}instituations`,
        one: (id:string )=>(`${host}instituations/${id}`)
    },
    certifications:{
        findAll: `${host}certifications`,
        one: (id:string )=>(`${host}certifications/${id}`),
        updateStatus: (id:string )=>(`${host}certifications/${id}/status`),
        getOneByQR: (qrToken:string )=>(`${host}verify/${qrToken}`)
    }
}