import { HTTP } from '../util/http'

class LikeModel extends HTTP {
  like (behavior, artID, category) {
    const url = behavior === 'like' ? 'like' : 'like/cancel'
    this.request({
      url,
      method: 'POST',
      desc: behavior === 'like' ? '喜欢' : '取消喜欢',
      data: {
        art_id: artID,
        type: category
      },
    })
  }
}

export {LikeModel}

