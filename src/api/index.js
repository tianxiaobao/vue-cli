import http from '../http';

// 测试接口，可删除
export function getUserInfo() {
    return http.get('/api/userInfo');
}