import request from '../utils/request'

// 获取文章信息列表
export const getArticle = params => {
    return request({
        method: 'GET',
        url: 'v1_0/articles',
        params
    })
}

// 获取文章频道
export const getArticleChannels = () => {
    return request({
        method: 'GET',
        url: 'v1_0/channels'
    })
}

// 删除文章列表(他的参数是路径参数：v1_0/articles/:target)
export const deleteArticle = articleId => {
    return request({
        method: 'DELETE',
        url: `v1_0/articles/${articleId}`
    })
}

// 发表文章
export const publishArticles = (data, draft = false) => {
    return request({
        method: 'POST',
        url: 'v1_0/articles',
        params: { // query参数由params传递
            draft
        },
        data
    })
}

// 获取指定文章内容
export const getArticles = articleId => {
    return request({
        method: 'GET',
        url: `v1_0/articles/${articleId}`
    })
}

// 修改文章 
export const updataArticle = (articleId, data, draft = false) => {
    return request({
        method: 'PUT',
        url: `v1_0/articles/${articleId}`,
        params: { draft },
        data
    })
}

// 修改文章评论状态
export const updataComentStatus = (articleId, allowComment) => {
    return request({
        method: 'PUT',
        url: 'v1_0/comments/status',
        params: {
            article_id: articleId
        },
        data: {
            allow_comment: allowComment
        }
    })
}