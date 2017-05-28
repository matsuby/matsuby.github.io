var async_que = async_que || [];
async_que.push(() => {
  async_que.test('external before');
});
