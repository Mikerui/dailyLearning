// 什么是两数之和，给定一个整数数组 nums 和一个目标值 target ，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
function twoSum(nums, target) {
  let map = new Map()
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    const x = target - element
    if (map.has(x)) {
      return [map.get(x), index]
    }
    map.set(element, index)
  }
  return []
}
