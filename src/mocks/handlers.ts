import { http, HttpResponse } from 'msw';

/**
 * 与真实后端约定一致：管理员在后台改内容后仍返回同一结构。
 * mediaUrl 为站内静态资源路径（对应 Vite public/）或完整 URL。
 */
export const handlers = [
  http.get('/api/heroes', () => {
    return HttpResponse.json({
      code: 0,
      message: 'success',
      data: [
        {
          id: 1,
          title: 'Z-CORE',
          mediaUrl: '/assets/Z-CORE.jpeg',
        },
        {
          id: 2,
          title: 'Z-MATRIX',
          mediaUrl: '/assets/Z-MATRIX.jpeg',
        },
      ],
    });
  }),
];
