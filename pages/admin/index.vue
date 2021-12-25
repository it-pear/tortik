<template>
  <div>
    <h1>Аналитика</h1>
    <AnalyticChart 
      title="Количество просмотров"
      :labels="views.labels"
      :data="views.data"
    />
    <AnalyticChart 
      title="Количество комментариев"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
import AnalyticChart from '@/components/admin/AnalyticChart'

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store}) {
    const {views, comments} = await store.dispatch('post/getAnalytics')
    return {views, comments}
  },
  components: {AnalyticChart}
}
</script>