
export default {
    actions: {
        updatePasswordRequest({dispatch}, formData){
            return axios.post('/api/user/password/update', formData).then(response => {
                dispatch('showNotification', {level: 'success', msg: '密码修改成功'})
            }).catch(error => {
                dispatch('showNotification', {level: 'error', msg: '更新密码失败'})
            })
        },
    }
}
