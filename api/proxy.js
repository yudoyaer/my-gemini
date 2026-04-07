export const config = {
  runtime: 'edge',
  regions: ['iad1'] // 核心魔法：强制锁定在美国华盛顿特区节点
};

export default async function handler(req) {
  const url = new URL(req.url);
  url.host = 'generativelanguage.googleapis.com';

  const headers = new Headers(req.headers);
  headers.set('host', 'generativelanguage.googleapis.com');

  return fetch(url, {
    method: req.method,
    headers: headers,
    body: req.body,
    redirect: 'follow'
  });
}
