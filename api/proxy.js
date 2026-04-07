export const config = {
  runtime: 'edge',
  regions: ['iad1'] // 锁定美国机房
};

export default async function handler(req) {
  const url = new URL(req.url);
  url.host = 'generativelanguage.googleapis.com';
  
  const headers = new Headers(req.headers);
  headers.set('host', 'generativelanguage.googleapis.com');
  
  // 核心魔法：无情删除所有暴露真实 IP 和地区的请求头！
  headers.delete('x-forwarded-for');
  headers.delete('x-real-ip');
  headers.delete('forwarded');
  headers.delete('x-vercel-ip-country');
  headers.delete('x-vercel-ip-city');
  
  return fetch(url, {
    method: req.method,
    headers: headers,
    body: req.body,
    redirect: 'follow'
  });
}
