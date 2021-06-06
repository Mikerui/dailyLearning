const treeSum = function (nums) {
  let map = new Map()
  let result = []
  for (let i = 0; i < nums.length; i++) {
    // 第一个数
    const first = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      // 第二个数
      let second = 0 - nums[j] - first
      if (map.has(second)) {
        result.push([first, second, nums[j]])
      }
      // 没在map里面就将数据记录
      map.set(nums[i], j)
    }
    // 没找到就清除
    map.clear()
  }
  return result
}

// 用排序去重
const threeSum = function (num) {
  let set = new Set() // set 相对节省内存
  let result = []
  // 排序
  num.sort((a, b) => a - b)
  for (let i = 0; i < num.length; i++) {
    // 去重
    while (num[i] === num[i - 1]) {
      i++
    }
    // 第一个数
    let first = nums[i]
    let j = i + 1
    while (j < nums.length) {
      // 第三个数
      let second = 0 - nums[j] - first
      let third = nums[j]

      if (set.has(second)) {
        result.push([first, second, third])

        set.add(third)
        j++

        while (nums[j] === nums[j - 1]) {
          j++
        } // 去重
      } else {
        set.add(third)
        j++
      }
    }
    set = new Set()
  }
  return result
}
