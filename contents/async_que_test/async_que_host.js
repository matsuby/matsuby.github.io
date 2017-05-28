var async_que = async_que || [];

// hosted function.
async_que.test = (str) => {
  console.log(str)
};

// exec registered queue.
if (async_que.length >= 1) {
  async_que.forEach((f) => f());
}

// change push to immediately execute.
async_que.push = (f) => f();
